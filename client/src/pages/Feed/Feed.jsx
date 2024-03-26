import React, { useEffect, useState } from "react";
import VolunteerCard from "../../components/VolunteerJobs/VolunteerCard";
import styles from "./Feed.module.css";
import axios from "axios";
import { pageBaseUrl } from "../../utils/general";
import { useLocation } from "react-router-dom";

function Feed() {
  const [formData, setFormData] = useState({});
  const [filters, setfilters] = useState();
  const [volunteerJobs, setVolunteerJobs] = useState([]);
  let location = useLocation();
  console.log(location.state.volunteerData);

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
        <h2>Find volunteering</h2>
        <div className={styles.selectContainer}>
          <select name="area" onChange={changeHandler}>
            <option value="">The volunteer area</option>
            <option value="north">North</option>
            <option value="west">West</option>
            <option value="east">East</option>
            <option value="south">South</option>
          </select>
          <select name="category" onChange={changeHandler}>
            <option value="">{"Who would you like to help? (All)"}</option>
            <option value="Environment">Environment</option>
            <option value="at risk youth">at risk youth</option>
            <option value="elderly people">elderly people</option>
            <option value="Building">Building</option>
            <option value="agriculture">agriculture</option>
            <option value="education">education</option>
            <option value="software">software</option>
          </select>
          <select name="category" onChange={changeHandler}>
            <option value="">{"Who would you like to help? (All)"}</option>
            <option value="Environment">Environment</option>
            <option value="at risk youth">at risk youth</option>
            <option value="elderly people">elderly people</option>
            <option value="Building">Building</option>
            <option value="agriculture">agriculture</option>
            <option value="education">education</option>
            <option value="software">software</option>
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
        <button onClick={getVolunteerByFilter}>Search</button>
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
