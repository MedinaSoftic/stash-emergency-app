import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PublicAllReports.css";

function PublicAllReports() {
  const [reports, setReports] = useState([]);

// useEffect runs once when the component mounts
// It sends a GET request to fetch all reports from the backend
  useEffect(() => {
    axios.get("http://localhost:8080/api/reports")
      .then((res) => setReports(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="ReportsContainer">
      <h2>All Emergency Reports</h2>
      <ul className="ReportsList">
        {/*Iterates through the reports array, and displays each report */}
        {reports.map((report) => (
          <li key={report.id}>
            <strong>{report.type}</strong>: {report.description} — {report.city} ({report.zipCode})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PublicAllReports;
