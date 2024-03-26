import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './SingleJobCard.module.css'; // Import CSS module for styling
import { pageBaseUrl } from '../../utils/general';
import { useParams } from 'react-router-dom';

function SingleJobCard() {
  const [volunteerJob, setVolunteerJob] = useState(null);
  const { volunteerJobsId } = useParams(); // Use correct parameter name

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${pageBaseUrl}volunteerJobs/${volunteerJobsId}`);
        setVolunteerJob(response.data);
      } catch (error) {
        console.error('Error fetching volunteer job:', error.message);
      }
    };

    fetchData();
  }, [volunteerJobsId]); // Trigger useEffect when volunteerJobsId changes

  if (!volunteerJob) {
    return <div>Loading...</div>; // Show loading indicator while fetching data
  }
  console.log(volunteerJob);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
        <img src={volunteerJob.imgURL} alt="Volunteer Job" className={styles.image} /></div>
        <div className={styles.details}>
          <h3 className={styles.title}>{volunteerJob.title}</h3>
          <p className={styles.description}>{volunteerJob.description}</p>
          <p className={styles.info}>Max Amount: {volunteerJob.maxAmount}</p>
          <p className={styles.info}>Start Date: {new Date(volunteerJob.startDate).toLocaleDateString()}</p>
          <p className={styles.info}>End Date: {new Date(volunteerJob.endDate).toLocaleDateString()}</p>
          <p className={styles.info}>Estimated Hours: {volunteerJob.estimatedHours}</p>
          <p className={styles.info}>Location: {volunteerJob.location}</p>
          <p className={styles.info}>Business Name: {volunteerJob.businessId?.name}</p>
          <p className={styles.info}>Contact Phone: {volunteerJob.contactPhone}</p>
          <div className={styles.categories}>
            {volunteerJob.categories.map((category, index) => (
              <span key={index} className={styles.category}>{category}</span>
            ))}
          </div>
          <br></br>
            <hr></hr>   <br></br>
            <p className={styles.info}>Status: {volunteerJob.status}</p> {/* Status */}
          <button className={styles.button}>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default SingleJobCard;
