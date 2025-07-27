import React, { useState, useEffect } from "react";
import axios from "axios";
import LinkButton from "../LinkButton";

function Dashboard() {
  const [reports, setReports] = useState([]);
  const [formData, setFormData] = useState({
    type: "",
    description: "",
    location: "",
    zipCode: "",
    user: { id: localStorage.getItem("userId") },
  });

  // GET user's reports on page load
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    axios
      .get(`http://localhost:8080/api/reports/user/${userId}`)
      .then((res) => setReports(res.data))
      .catch((err) => console.error(err));
  }, []);

  // POST new report
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/reports", formData)
      .then((res) => {
        setReports([...reports, res.data]);
        setFormData({ ...formData, type: "", description: "", location: "", zipCode: "" });
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <h2>Welcome to your Dashboard</h2>

      <form onSubmit={handleSubmit}>
        <select className="typeDropDown" placeholder="Type" value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
            <option value="">Select from the list below</option>
            <option value="Electric">Electric</option>
            <option value="Water">Water</option>
            <option value="Fire">Fire</option>
        </select>
        <input placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
        <input placeholder="Location" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
        <input placeholder="Zip Code" value={formData.zipCode} onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })} />
        <button type="submit">Submit Report</button>
      </form>

      <h3>Your Submitted Reports:</h3>
      <ul>
        {reports.map((report) => (
          <li key={report.id}>
            <strong>{report.type}</strong>: {report.description} — {report.location} ({report.zipCode})
          </li>
        ))}
      </ul>
        <LinkButton to="/" btnClass= "homeBtn" label="Home" imgClass="homeImg" imgSrc="/img/homeButton.png" imgalt="Home Button"/>
        <LinkButton to="/plan" btnClass= "planBtn" label="Plan Ahead" imgClass="planImg" imgSrc="/img/planButton.png" imgalt="Plan Button"/>
        <LinkButton to="/contact" btnClass= "contactBtn" label="Contact Resources" imgClass="contactImg" imgSrc="/img/contactButton.png" imgalt="Contact Button"/>
        <LinkButton to="/about" btnClass="aboutBtn" label="About" imgClass="aboutImg" imgSrc="/img/aboutButton.png" imgalt="About button" />
    </>
  );
}

export default Dashboard;