import styles from './Template.module.css'
import { createRef } from "react";
import Pdf from "react-to-pdf";

export const Template = () => {


  const ref = createRef()


  

  return (
    <div>


<Pdf targetRef={ref} filename="example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
   
    <div className={styles.template} ref={ref}>


      <div className={styles.heading}>
        <div className={styles['heading-top']}>
          <h1>Daniel Ayandiran</h1>
        </div>
        <div className={styles['heading-down']}>
          <p>Lagos,Nigeria</p>
          <p>07067074988</p>
          <p>nifemiayandiran@gmail.com</p>
        </div>
      </div>

      <div className={styles.website}>
        <h1>WEBSITES,PORTFOLIOS,PROFILES</h1>
        <p>Shapati-portfolio.netlify.app</p>
      </div>

      <div className={styles.proffesionalsum}>
        <h1>PROFFESIONAL SUMMARY</h1>
        <p>Logical and results written developer dedicated to building and developing and optimized user focused websites for customers with various buisness objectives</p>
      </div>

      <div className={styles.skills}>
        <h1>SKILLS</h1>
        <p>Web programming</p>
      </div>      

      <div className={styles['work-history']}>
        <h1>WORK HISTORY</h1>
        <div className={styles.works}>
          <div className={styles['works-container']}>
            <div className={styles['works-left']}>
              <h3>FULL STACK INTERN</h3>
              <h3>FRONT END DEV</h3>
            </div>
            <div className={styles['works-right']}>
              <p>2021 july - 2022 june</p>
              <p>2019 july - 2020 august</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.education}>
        <h1>EDUCATION</h1>
      </div>

    </div>
    </div>
  )
}
