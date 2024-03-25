import React from 'react'
import SingleJobCard from '../../components/SingleJob/SingleJobCard'
import styles from "./SingleJob.module.css"
function SingleJob() {
  return (

    <div>
    <div>SingleJob</div>
    <div className={styles.container}><SingleJobCard/></div>
    </div>
  )
}

export default SingleJob