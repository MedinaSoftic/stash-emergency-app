import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PublicAllReports.css";

function PublicAllReports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/reports")
      .then((res) => setReports(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="ReportsContainer">
      <h2>All Emergency Reports</h2>
      <ul className="ReportsList">
        {reports.map((report) => (
          <li key={report.id}>
            <strong>{report.type}</strong>: {report.description} — {report.location} ({report.zipCode})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PublicAllReports;
