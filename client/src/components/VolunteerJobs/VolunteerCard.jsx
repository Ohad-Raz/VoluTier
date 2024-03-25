import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './VolunteerCard.module.css'; // Import CSS module for styling
import { pageBaseUrl } from '../../utils/general';
import { Link } from 'react-router-dom';

function VolunteerCard() {
  const [volunteerJobs, setVolunteerJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${pageBaseUrl}volunteerJobs`);
        setVolunteerJobs(response.data);
      } catch (error) {
        console.error('Error fetching volunteer jobs:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.cardContainer}>
      {volunteerJobs.map((volunteerJob, index) => (
        <div key={index} className={styles.card}>
           <Link to={`/volunteerJobs/${volunteerJob._id}`} className="volunteerJobsLink">
          <img src={volunteerJob.imgURL} alt="Volunteer Job" className={styles.image} />
          <div className={styles.details}>
            <h3 className={styles.title}>{volunteerJob.title}</h3> {/* Title */}
        
            <p className={styles.info}>Max Amount: {volunteerJob.maxAmount}</p> {/* Max Amount */}
            <p className={styles.info}>Start Date: {new Date(volunteerJob.startDate).toLocaleDateString()}</p> {/* Start Date */}
            <p className={styles.info}>End Date: {new Date(volunteerJob.endDate).toLocaleDateString()}</p> {/* End Date */}
          
            <p className={styles.info}>Location: {volunteerJob.location}</p> {/* Location */}
  
          
            <div className={styles.categories}>
              {volunteerJob.categories.map((category, index) => (
                <span key={index} className={styles.category}>{category}</span>
              ))}
            </div>
            <br></br>
            <hr></hr>   <br></br>
            <p className={styles.info}>Status: {volunteerJob.status}</p> {/* Status */}
            {/* Created At: Display createdAt if needed */}
            <button className={styles.button}>Apply</button>
          </div>
          </Link>
          
        </div>
      ))}
    </div>
  );
}

export default VolunteerCard;
