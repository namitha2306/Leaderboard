import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './leaderboard.css';

const Leaderboard = () => {
  const [topContributors, setTopContributors] = useState([]);
  const [allContributors, setAllContributors] = useState([]);

  // Load CSV file and parse it
  useEffect(() => {
    Papa.parse('/leaderboard.csv', {
      download: true,
      header: true, // Use the first row as headers
      complete: (result) => {
        const data = result.data;
        const top = data.slice(0, 3); // Top 3 contributors
        setTopContributors(top);
        setAllContributors(data);
      },
    });
  }, []);

  return (
    
    <div className="leaderboard-container">
      {/* Leaderboard Section */}<h1 className="leaderboard-heading">Leaderboard</h1>
      <div className="leaderboard">
        {/* Top Contributors Section */}
        <div className="top-contributors">
          <h2>Top Contributors</h2>
          <div className="top-list">
            {topContributors.map((contributor, index) => (
              <div className="contributor" key={index}>
                <span className="rank">{contributor.Rank < 10 ? `0${contributor.Rank}` : contributor.Rank}</span>
                <span className="name">{contributor.Name}</span>
                <span className="score">{contributor.Score}</span>
              </div>
            ))}
          </div>
        </div>

        {/* All Contributors Section */}
        <div className="all-contributors">
          <h2>All Contributors</h2>
          <table className="contributor-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {allContributors.map((contributor, index) => (
                <tr key={index}>
                  <td>{contributor.Rank < 10 ? `0${contributor.Rank}` : contributor.Rank}</td>
                  <td>{contributor.Name}</td>
                  <td>{contributor.Score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
