import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./VolunteerCard.module.css";
import { pageBaseUrl } from "../../utils/general";
import { Link } from "react-router-dom";

function VolunteerCard(props) {
  const { volunteerJobs, location } = props;
  const [volunteerJobsUpload, setVolunteerJobsUpload] = useState([]);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${pageBaseUrl}volunteerJobs`);
        setVolunteerJobsUpload(response.data);
        console.log(response.data);
        console.log(volunteerJobs);

      } catch (error) {
        console.error("Error fetching volunteer jobs:", error.message);
      }
    };
    fetchData();
  }, []);



  return (
    <div className={styles.cardContainer}>
      {location
        ? location.map((volunteerJob, index) => (
            <div key={index} className={styles.card}>
              <Link
                to={`/volunteerJobs/${volunteerJob._id}`}
                className="volunteerJobsLink"
              >
                <img
                  src={volunteerJob.imgURL}
                  alt="Volunteer Job"
                  className={styles.image}
                />
                <div className={styles.details}>
                  <h3 className={styles.title}>{volunteerJob.title}</h3>
                  <p className={styles.info}>
                    Max Amount: {volunteerJob.maxAmount}
                  </p>
                  <p className={styles.info}>
                    Start Date:{" "}
                    {new Date(volunteerJob.startDate).toLocaleDateString()}
                  </p>
                  <p className={styles.info}>
                    End Date:{" "}
                    {new Date(volunteerJob.endDate).toLocaleDateString()}
                  </p>
                  <p className={styles.info}>
                    Location: {volunteerJob.location}
                  </p>
                  <div className={styles.categories}>
                    {volunteerJob.categories.map((category, index) => (
                      <span key={index} className={styles.category}>
                        {category}
                      </span>
                    ))}
                  </div>
                  <br />
                  <hr />
                  <br />
                  <p className={styles.info}>Status: {volunteerJob.status}</p>
                  <button className={styles.button}>More information</button>
                </div>
              </Link>
            </div>
          ))
        : volunteerJobs && volunteerJobs.length > 0
        ? volunteerJobs.map((volunteerJob, index) => (
            <div key={index} className={styles.card}>
              <Link
                to={`/volunteerJobs/${volunteerJob._id}`}
                className="volunteerJobsLink"
              >
                <img
                  src={volunteerJob.imgURL}
                  alt="Volunteer Job"
                  className={styles.image}
                />
                <div className={styles.details}>
                  <h3 className={styles.title}>{volunteerJob.title}</h3>
                  <p className={styles.info}>
                    Max Amount: {volunteerJob.maxAmount}
                  </p>
                  <p className={styles.info}>
                    Start Date:{" "}
                    {new Date(volunteerJob.startDate).toLocaleDateString()}
                  </p>
                  <p className={styles.info}>
                    End Date:{" "}
                    {new Date(volunteerJob.endDate).toLocaleDateString()}
                  </p>
                  <p className={styles.info}>
                    Location: {volunteerJob.location}
                  </p>
                  <div className={styles.categories}>
                    {volunteerJob.categories.map((category, index) => (
                      <span key={index} className={styles.category}>
                        {category}
                      </span>
                    ))}
                  </div>
                  <br />
                  <hr />
                  <br />
                  <p className={styles.info}>Status: {volunteerJob.status}</p>
                  <button className={styles.button}>More information</button>
                </div>
              </Link>
            </div>
          ))
        : volunteerJobsUpload.map((volunteerJob, index) => (
            <div key={index} className={styles.card}>
              <Link
                to={`/volunteerJobs/${volunteerJob._id}`}
                className="volunteerJobsLink"
              >
                <img
                  src={volunteerJob.imgURL}
                  alt="Volunteer Job"
                  className={styles.image}
                />
                <div className={styles.details}>
                  <h3 className={styles.title}>{volunteerJob.title}</h3>
                  <p className={styles.info}>
                    Max Amount: {volunteerJob.maxAmount}
                  </p>
                  <p className={styles.info}>
                    Start Date:{" "}
                    {new Date(volunteerJob.startDate).toLocaleDateString()}
                  </p>
                  <p className={styles.info}>
                    End Date:{" "}
                    {new Date(volunteerJob.endDate).toLocaleDateString()}
                  </p>
                  <p className={styles.info}>
                    Location: {volunteerJob.location}
                  </p>
                  <div className={styles.categories}>
                    {volunteerJob.categories.map((category, index) => (
                      <span key={index} className={styles.category}>
                        {category}
                      </span>
                    ))}
                  </div>
                  <br />
                  <hr />
                  <br />
                  <p className={styles.info}>Status: {volunteerJob.status}</p>
                  <button className={styles.button}>More information</button>
                </div>
              </Link>
            </div>
          ))}
    </div>
  );
}

export default VolunteerCard;
