import React from "react";

function Home() {
  return (
    <>
      <div>
        <h1>
          Volu<span>Tier</span>
        </h1>
        <h2>Your volunteering platform!</h2>
        <h3>Search, volunteer, move forward!</h3>

        <div>
          <h3>Find volunteering</h3>
          <select name="area" id="">
            <option value="noth">The volunteer area</option>
            <option value="north"></option>
            <option value="west"></option>
            <option value="east"></option>
            <option value="south"></option>
          </select>
          <select name="subject" id="">
            <option value="">{"(Who would you like to help?(All))"}</option>
            <option value="Environment">Environment</option>
            <option value="at risk youth">at risk youth</option>
            <option value="elderly people">elderly people</option>
            <option value="Building">Building</option>
            <option value="agriculture">agriculture</option>
            <option value="education">education</option>
            <option value="software">software</option>
          </select>
          <button>Serch</button>

          <div>
            <h1>How It Works</h1>
            <p>Choose to volunteer</p>
            <p>Sign up</p>
            <p>volunteering together</p>
            <p>Level up and get Points</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
