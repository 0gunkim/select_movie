import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './infoDetail.module.scss';
import useMe from '../../../hooks/useMe';
import { getUsersMeInfo } from '../../../api/Users';

const InfoDetail = () => {
  const { me, onGetMe } = useMe();
  const { id } = useParams();
  const [userInfoDetail, setUserInfoDetail] = useState();

  const fetchUserInfoDetail = async () => {
    const response = await getUsersMeInfo();
    setUserInfoDetail(response.data);
    console.log('디테일', response.data);
  };

  useEffect(() => {
    fetchUserInfoDetail();
    onGetMe();
  }, [id]);

  return (
    <section className={styles.category}>
      <div className={styles.isliked}>
        <p className={styles.top}>💛 좋아요 표시한 영화 수 💛</p>
        <p className={styles.middle}>{userInfoDetail?.likeCount}</p>
      </div>
      <div className={styles.rating}>
        <p className={styles.top}>⭐ 평균 평점 ⭐</p>
        {!!userInfoDetail?.averageScore ? (
          <p className={styles.middle}>{userInfoDetail?.averageScore.toFixed(1)}</p>
        ) : (
          <p className={styles.middle}>0</p>
        )}
      </div>
      <div className={styles.review}>
        <p className={styles.top}>✍ 내가 남긴 리뷰 수 ✍</p>
        <p className={styles.middle}>{userInfoDetail?.reviewCount}</p>
      </div>
    </section>
  );
};
export default InfoDetail;

