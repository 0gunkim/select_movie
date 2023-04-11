import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';
import styles from './infoModal.module.scss';
import useMe from '../../../hooks/useMe';
import { patchUser } from '../../../api/Users';
import { Button, Input } from '../../../components';
import { TrashIcon } from '../../../assets/icon';

const InfoModal = ({
  className,
  option,
  buttonChildren,
  modalOpen,
  setModalOpen,
}) => {
  const me = useMe();
  const modalRef = useRef(null);
  const [postForm, setPostForm] = useState({
    name: '',
    nickname: '',
    description: '',
  });

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    setPostForm({ ...postForm, [name]: value });
  };

  const closeModal = () => {
    setPostForm({
      name: '',
      nickname: '',
      description: '',
    });
    setModalOpen(false);
  };
  const onReset = (e) => {
    const { name } = e.currentTarget;
    setPostForm({ ...postForm, [name]: '' });
  };
  const onSubmit = async (e) => {
    //NOTE: 새로고침 방지
    e.preventDefault();
    try {
      const responsePatch = await patchUser(postForm);
      if (responsePatch.status === 200) {
        alert('수정완료');
        responseData();
      }
    } catch (err) {
      const errData = err.response.data;
      if (errData.statusCode !== 200) {
        alert(errData.message);
      }
    }
  };

  useEffect(() => {
    setPostForm({
      name: me?.name,
      nickname: me?.nickname,
      description: me?.description,
    });
    const handler = (event) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
        setPostForm({
          name: '',
          nickname: '',
          description: '',
        });
        responseData();
      }
    };
    // 이벤트 핸들러 등록
    document.addEventListener('mousedown', handler);
    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener('mousedown', handler);
    };
  }, [modalOpen]);

  return (
    <CSSTransition
      in={modalOpen}
      timeout={300}
      classNames={{
        enterActive: styles.modalEnterActive,
        enterDone: styles.modalEnterDone,
        exitActive: styles.modalExit,
        exitDone: styles.modalExitActive,
      }}
      unmountOnExit
    >
      <div className={styles.overlay}>
        <section
          ref={modalRef}
          className={cx(styles.container, className, styles[option])}
        >
          <header className={styles.title}>
            🤗 당신을 어떻게 소개하고 싶나요? 🤗
          </header>
          <main className={styles.content}>
            <ul>
              <p className={styles.label}>이름</p>
              <Input
                className={styles.input}
                onChange={onChange}
                name="name"
                value={postForm.name}
                maxLength={10}
              />
              <p className={styles.label}>닉네임</p>
              <Input
                className={styles.input}
                onChange={onChange}
                name="nickname"
                value={postForm.nickname}
              />
              <p className={styles.label}>소개글</p>
              <textarea
                className={styles.textarea}
                onChange={onChange}
                name="description"
                value={postForm.description}
                maxLength={100}
              />
            </ul>
            {/*<button className={styles.deleteUser}>
              <TrashIcon />
              계정을 삭제하시겠습니까?
    </button>*/}
          </main>

          <footer className={styles.buttonBox}>
            <Button
              className={styles.cancelButton}
              children={'취소'}
              onClick={closeModal}
            />
            {/* <Button className={styles.resetButton} onClick={onReset}>
              초기화
            </Button> */}
            <Button
              className={styles.deleteButton}
              children={buttonChildren}
              onClick={onSubmit}
            />
          </footer>
        </section>
      </div>
    </CSSTransition>
  );
};

export default InfoModal;
