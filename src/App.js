import React, { useState, useEffect } from "react";
import jobsData from "./data/jobs.json"; // We'll create this file soon
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading jobs with a 1 second delay
  useEffect(() => {
    setTimeout(() => {
      setJobs(jobsData);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Filter jobs by title based on search term
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="app-container">
      <h1><div className="w">Job Listings</div></h1>

      <input
        type="text"
        class="centered-input"
        placeholder="Search job titles..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {isLoading ? (
  <div className="spinner-container">
    <div className="spinner"></div>
    <p>Loading jobs...</p>
  </div>
) : filteredJobs.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="job-list">
          {filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h2>{job.title}</h2>
              <p><strong>{job.company}</strong></p>
              <p>{job.location}</p>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
