import React, { useEffect, useState } from "react";
import VolunteerCard from "../../components/VolunteerJobs/VolunteerCard";
import styles from "./Feed.module.css";
import axios from "axios";
import { pageBaseUrl } from "../../utils/general";
import { useLocation } from "react-router-dom";

function Feed() {
  const [formData, setFormData] = useState({});
  const [volunteerJobs, setVolunteerJobs] = useState([]);
  let location = useLocation();

  useEffect(() => {}, []);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const getVolunteerByFilter = async () => {
    try {
      const res = await axios.post(
        `${pageBaseUrl}volunteerJobs/getVolunteerByFilter`,
        {
          area: formData.area,
          category: formData.category,
          amount: formData.amount,
          city: formData.city,
        }
      );
      const data = res.data;
      console.log(data);
      setVolunteerJobs(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.feedContainer}>
      <div className={styles.containerOne}>
        <h2>Find volunteering opportunities</h2>
        <div className={styles.selectContainer}>
          <select name="area" onChange={changeHandler}>
            <option value="" disabled selected>
              The volunteer area
            </option>
            <option value="north">North</option>
            <option value="west">West</option>
            <option value="east">East</option>
            <option value="south">South</option>
          </select>
        
          <select name="category" onChange={changeHandler}>
            <option value="" disabled selected>
              {"Who would you like to help? (All)"}
            </option>
            <option value="Environment">Environment</option>
            <option value="at risk youth">At-risk Youth</option>
            <option value="elderly people">Elderly People</option>
            <option value="Building">Building</option>
            <option value="agriculture">Agriculture</option>
            <option value="education">Education</option>
            <option value="software">Software</option>
          </select>
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={changeHandler}
          />
          <input
            type="text"
            name="amount"
            placeholder="Amount of volunteers"
            onChange={changeHandler}
          />
        </div>
        <button className={styles.searchBtn} onClick={getVolunteerByFilter}>
          Search
        </button>
      </div>
      <div className={styles.cardsContainer}>
        <VolunteerCard
          volunteerJobs={volunteerJobs}
          location={location.state.volunteerData}
        />
      </div>
    </div>
  );
}

export default Feed;
