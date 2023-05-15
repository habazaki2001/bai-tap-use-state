import * as React from 'react';
import { useState } from "react";
import './style.css';

export default function App() {
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const dataJobsStorage = JSON.parse(localStorage.getItem('jobs'))
    return dataJobsStorage ?? []
  })

  const handleSubmit = (job) => {
    setJobs(prev => {
      const newJobs = [...prev, job]
      const converdJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', converdJobs)
      return newJobs
    })
    setJob('')
  }

  return (
    <div>
      <h1>Todolist Jobs with useState and save LocalStorage</h1>
      <input type="text" value={job} onChange={e => setJob(e.target.value)}/>
      <ul>
        {
          jobs.map((item, index) => (
              <li
                key={index}
              >
                {item}
              </li>
          ))
        }
      </ul>
      <button onClick={() => handleSubmit(job)} >Add</button>
    </div>
  );
}
