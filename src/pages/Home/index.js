import React from "react";
import styles from "./home.module.scss";
import { RankingCarousel } from "../../components";
import { HomeCarousel  } from "../../components/Carousel";
import { motion, useIsPresent } from "framer-motion";



const Home = () => {

  const isPresent = useIsPresent();

  return (
    /* <motion.div
    animate={{y : 100}}
  > */
    <section className={styles.wrapper}>
      <article className={styles.ranking}>
        <div>
          <RankingCarousel />
        </div>
      </article>
      <article className={styles.category}>
       <h2>❌ 따라하지마 ! 액션영화</h2>
        <HomeCarousel GenreId = 'fc84777a-d713-4539-a5b9-8c24f0c85b99' />
        <h2>❌ 따라하지마 ! 범죄영화</h2>
        <HomeCarousel GenreId = '801c5056-0479-415c-b205-9daecad91b0e' />
        <h2>❌ 따라하지마 ! 로맨스영화</h2>
        <HomeCarousel GenreId = '73fa7e1d-0e3e-4506-9432-21c29faa8dd7' />
        <h2>❌ 따라하지마 ! 가족영화</h2>
        <HomeCarousel GenreId = '1c9e16ec-920f-4975-b028-b4c681084f88' />
      </article>
    </section>
    /*  </motion.div> */
  );
};

export default Home;
