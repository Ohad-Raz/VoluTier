import React from 'react'
import VolunteerCard from '../../components/VolunteerJobs/VolunteerCard'
import styles from "./Feed.module.css"

function Feed() {
  return (
    <div className={styles.feedContainer}>
    {/* <div>Feed</div> */}
    <div className={styles.cardsContainer}><VolunteerCard/></div>
</div>

  )
}

export default Feed