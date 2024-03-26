import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styles from './SingleJobCard.module.css'; // Import CSS module for styling
import { pageBaseUrl } from '../../utils/general';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';


function SingleJobCard() {
  const [volunteerJob, setVolunteerJob] = useState(null);
  const { volunteerJobId } = useParams(); // Use correct parameter name
  const {UserID}=useContext(UserContext)
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    importantInfo: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${pageBaseUrl}volunteerJobs/${volunteerJobId}`);
        setVolunteerJob(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching volunteer job:', error.message);
      }
    };

    fetchData();
  }, [volunteerJobId]); // Trigger useEffect when volunteerJobsId changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${pageBaseUrl}volunteerJobs/apply/${volunteerJobId}`, {
        employeeId: UserID, // Assuming email is used as the employeeId
      });
      console.log(response.data);
      // Add any further handling after successful application
    } catch (error) {
      console.error('Error applying for job:', error.message);
      // Add error handling here
    }
  };

  if (!volunteerJob) {
    return <div>Loading...</div>; // Show loading indicator while fetching data
  }

  
  

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img src={volunteerJob.imgURL} alt="Volunteer Job" className={styles.image} />
        </div>
        <div className={styles.details}>
          <h3 className={styles.title}>{volunteerJob.title}</h3>
          <p className={styles.description}>{volunteerJob.description}</p>
          <p className={styles.info}>applicants: {volunteerJob.applicants.length}</p>
          <p className={styles.info}>Max Amount: {volunteerJob.maxAmount}</p>
          <p className={styles.info}>Start Date: {new Date(volunteerJob.startDate).toLocaleDateString()}</p>
          <p className={styles.info}>End Date: {new Date(volunteerJob.endDate).toLocaleDateString()}</p>
          <p className={styles.info}>Estimated Hours: {volunteerJob.estimatedHours}</p>
          <p className={styles.info}>Area: {volunteerJob.area}</p>
          <p className={styles.info}>City: {volunteerJob.city}</p>
          <p className={styles.info}>Location: {volunteerJob.location}</p>
          <p className={styles.info}>Business Name: {volunteerJob.businessId?.name}</p>
          <p className={styles.info}>Contact Phone: {volunteerJob.contactPhone}</p>
          <div className={styles.categories}>
            {volunteerJob.categories.map((category, index) => (
              <span key={index} className={styles.category}>{category}</span>
              
            ))}
          </div>
            <br></br>
            {volunteerJob.applicants.includes(UserID)?<i><h5>Already applied</h5></i>:<form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
            <textarea name="importantInfo" placeholder="Important Information? Let us know" value={formData.importantInfo} onChange={handleChange}></textarea>
            <button type="submit" className={styles.button}>Apply</button>
          </form>}
          <br></br>
          <hr></hr>
          <br></br>
          <p className={styles.info}>Status: {volunteerJob.status}</p> {/* Status */}
        </div>
      </div>
    </div>
  );
}

export default SingleJobCard;
