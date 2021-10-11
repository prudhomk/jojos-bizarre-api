import React from 'react';
import styles from '../components/styles/loader.scss'
export default function Loader() {
  return (
    <div className={styles.loader}>
      <img src="loadingdance.gif" alt="loader"/>
    </div>
  );
}
