import React from 'react';
import styles from './VolunteerCard.module.css'; // Import CSS module for styling

function VolunteerCard() {
  // Sample data for the volunteer jobs
  const volunteerJobs = [
    {
      place: "Local Community Center",
      description: "Helping organize events and activities for children",
      maxAmount: 10,
      amount: 5,
      startDate: "2024-04-01",
      endDate: "2024-04-30",
      imgURL: "https://www.ruachtova.org.il/wp-content/uploads/2021/07/shutterstock_1761616103.jpg",
      categories: ["Children", "Community", "Events"]
    },
    {
      place: "Animal Shelter",
      description: "Assisting with animal care and adoption events",
      maxAmount: 8,
      amount: 3,
      startDate: "2024-05-15",
      endDate: "2024-06-15",
      imgURL: "https://www.ruachtova.org.il/wp-content/uploads/2021/07/shutterstock_1761616103.jpg",
      categories: ["Animals", "Community"]
    },
    // Add one more volunteer job here
    {
      place: "Food Bank",
      description: "Packing and distributing food to those in need",
      maxAmount: 15,
      amount: 10,
      startDate: "2024-04-10",
      endDate: "2024-05-10",
      imgURL: "https://www.ruachtova.org.il/wp-content/uploads/2021/07/shutterstock_1761616103.jpg",
      categories: ["Community", "Food"]
    }
  ];

  return (
    <div className={styles.cardContainer}>
      {volunteerJobs.map((volunteerJob, index) => (
        <div key={index} className={styles.card}>
          <img src={volunteerJob.imgURL} alt="Volunteer Job" className={styles.image} />
          <div className={styles.details}>
            <h3 className={styles.title}>{volunteerJob.place}</h3>
            <p className={styles.description}>{volunteerJob.description}</p>
            <p className={styles.info}>Max Amount: {volunteerJob.maxAmount}</p>
            <p className={styles.info}>Amount: {volunteerJob.amount}</p>
            <p className={styles.info}>Start Date: {volunteerJob.startDate}</p>
            <p className={styles.info}>End Date: {volunteerJob.endDate}</p>
            <div className={styles.categories}>
              {volunteerJob.categories.map((category, index) => (
                <span key={index} className={styles.category}>{category}</span>
              ))}
            </div>
            <button className={styles.button}>Apply</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VolunteerCard;
