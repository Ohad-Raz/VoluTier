import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <header>
        <div>
          <h1>
            Vulo<span>Tier</span>
          </h1>
          <div>
            <Link to="/">Home</Link>
            <Link to="/Feed">Feed</Link>
            <Link to="/Company">Company</Link>
            <Link to="/leaderboard">Leader Board</Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
