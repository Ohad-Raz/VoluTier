import React, { useContext } from 'react';
import styles from './EmployeeProfile.module.css';
import { UserContext } from '../../context/UserContext';

function EmployeeProfile() {
  const { UserObj } = useContext(UserContext);
  console.log(UserObj);
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.name}>
          <img src={UserObj.imageUrl} alt="" />
          <h1>{UserObj.firstName} {UserObj.lastName}</h1>
        </div>
        <div className={styles.company}>
          <h2>{UserObj.company?.companyName}</h2>
          <h2>{UserObj.profession}</h2>
        </div>
        <h2 className={styles.lvl}>LVL.{UserObj.Level}</h2>
      </div>
      <div className={styles.contact}>
        <h1>Contact</h1>
      </div>
    </div>
  );
}

export default EmployeeProfile;
