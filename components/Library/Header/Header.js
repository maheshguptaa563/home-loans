import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headparent}>
      <div className={styles.title}>
        <h1>Top Home Loan Products</h1>;
      </div>
      <div className={styles.menu}>
        <div>ALL</div>
        <div>REFINANCE</div>
        <div>FIXED RATE</div>
        <div>FIRST HOME BUYER</div>
        <div>INVESTOR</div>
        <div>NEXT HOM BUYER</div>
      </div>
    </div>
  );
};

export default Header;
