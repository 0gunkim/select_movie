import styles from './headerLeft.module.scss';
import cx from 'classnames';
import { ShareIcon } from '../../../../assets/icon';
import { Link, useNavigate } from 'react-router-dom';

// header > 왼쪽 프로필 공통
const HeaderLeft = ({ className, type, userName, date, writtenId }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/user/${writtenId}`);
  };

  return (
    <article
      className={cx(styles.left, styles[type], className)}
      onClick={onClick}
    >
      {/* type: comment 경우, 답글 화살표 아이콘 넣기 */}
      {type === 'comment' && <ShareIcon className={styles.IShare} />}

      <p className={styles.profileIcon}>🤔</p>
      <div className={styles.profileText}>
        <h2 className={styles.userName}>{userName}</h2>
        <p className={styles.date}>{date}</p>
      </div>
    </article>
  );
};
export default HeaderLeft;
