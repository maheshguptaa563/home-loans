import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = (props) => {
  return (
    <div className={styles.cardcontainer}>
      <div className={styles.content}>
        <h2 className={styles.subtitle}>
          Fresh start Basic Base Variable Saver Home Loan
        </h2>
      </div>
      <hr className={styles.line} />
      <div className={styles.cardbody}>
        <div className={styles.rate}>
          <div className={styles.advertised}>
            <h5 className={styles.subrate}>Advertised Rate</h5>
            <h1 className={styles.percent}>3.74%</h1>
          </div>
          <div class={styles.vertical}></div>
          <div className={styles.comparison}>
            <h5 className={styles.subrate}>Comparison Rate</h5>
            <h1 className={styles.percent}>3.74%</h1>
          </div>
        </div>
        <hr className={styles.line} />
        <div>
          <h3 className={styles.subtitle}>&#x2713; Extra Low interest Rate</h3>
          <h3 className={styles.subtitle}>
            &#x2713; No upfront or ongoing fees
          </h3>
          <h3 className={styles.subtitle}>&#x2713; 100% full offset account</h3>
          <h3 className={styles.subtitle}>
            &#x2713; Extra repayments + redraw services
          </h3>
        </div>
        <div className={styles.bottom}>
          <div className={styles.compare}>
            <input type="checkbox" id="vehicle1" />
            <label for="vehicle1">Compare</label>
          </div>
          <div className={styles.info}>
            <h3 className={styles.infostyle}>
              <u>More Information</u>
            </h3>
          </div>
        </div>
        <hr className={styles.line} />
        <button className={styles.button1}>Go to Site</button>
      </div>
    </div>
  );
};

export default ProductCard;
