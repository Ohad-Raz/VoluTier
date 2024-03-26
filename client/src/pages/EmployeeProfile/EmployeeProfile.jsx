import React, { useContext } from 'react';
import styles from './EmployeeProfile.module.css';
import { UserContext } from '../../context/UserContext';
import { FaGithub,FaLinkedin } from "react-icons/fa";

function EmployeeProfile() {
  const { UserObj } = useContext(UserContext);
  console.log(UserObj);
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.name}>
          <img src={UserObj.imageUrl} alt="" />
          <h1>{UserObj.firstName} {UserObj.lastName}</h1>
        <h2 className={styles.lvl}>LVL.{UserObj.Level}</h2>
        </div>
        <div className={styles.company}>
          <h2>{UserObj.company?.companyName}</h2>
          <h2>{UserObj.profession}</h2>
        </div>
      </div>
      <div className={styles.contact}>
        <h1>Contact</h1>
        <div className={styles.contactInfo}>
          <p>{UserObj.email}</p>
          <p>+{UserObj.phone}</p>
          <p>{UserObj.location}</p>
            <h1>Links</h1>
          <div className={styles.icons}>
          <a href={UserObj.github}><FaGithub/></a>
          <a href={UserObj.linkendin}><FaLinkedin/></a>
          </div>
        </div>
      </div>
      <div className={styles.xp}>
        <h1>XP Ranking System</h1>
        <div className={styles.xpInfo}>
          <p>Level 1: 0-14 XP</p>
          <p>Level 2: 15-39 XP</p>
          <p>Level 3: 40-69 XP</p>
          <p>Level 4: 70-109 XP</p>
          <p>Level 5: 110-159 XP</p>
          <p>Level 6: 160-229 XP</p>
          <p>Level 7: 230-319 XP</p>
          <p>Level 8: 320-449 XP</p>
          <p>Level 9: 450-619 XP</p>
          <p>Level 10: 620 XP</p>
        </div>
      </div>
      <div className={styles.leaderboard}>
        
      </div>
    </div>
  );
}

export default EmployeeProfile;
