import React, { useState } from "react";
import styles from "./Home.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { pageBaseUrl } from "../../utils/general";

function Home() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getVolunteerByFilter = async () => {
    try {
      const res = await axios.post(`${pageBaseUrl}volunteerJobs/getVolunteerByFilter`, {
        area: formData.area,
        category: formData.category,
      });
      const data = res.data;
      console.log(data);
      // Navigate to the feed page with the fetched data
      navigate('/feed', { state: { volunteerData: data } });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerOne}>
        <h1>
          Volu<span>Tier</span>
        </h1>
        <h2>Your volunteering platform!</h2>
        <h3>Search, volunteer, move forward!</h3>
      </div>

      <div className={styles.containerTwo}>
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
        </div>
        <button onClick={getVolunteerByFilter}>Search</button>
      </div>

      <div className={styles.containerThree}>
        <h1>How It Works:</h1>
        <p id={styles.p1}>1. Choose to volunteer</p>
        <p id={styles.p2}>2. Sign up</p>
        <p id={styles.p3}>3. volunteering together</p>
        <p id={styles.p4}>4. Level up and get Points</p>
      </div>
    </div>
  );
}

export default Home;
