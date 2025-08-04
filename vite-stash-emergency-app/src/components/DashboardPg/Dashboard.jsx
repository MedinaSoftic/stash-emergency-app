import React, { useState, useEffect } from "react";
import axios from "axios";
import LinkButton from "../LinkButton";
import "./Dashboard.css"
import { useUser } from "../User/UserContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const {user, setUser} = useUser();
    console.log("user in dashboard:", user);

    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState(null)
    
    const [reports, setReports] = useState([]);
    const [formData, setFormData] = useState({
        type: "",
        description: "",
        city: "",
        zipCode: "",
        user: null,
    });

  // GET user's reports on page load
  useEffect(() => {
    if (!user?.id) return;
    axios
        .get(`http://localhost:8080/api/reports/user/${user.id}`)
        .then((res) => setReports(res.data))
        .catch((err) => console.error(err));
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.type || !formData.description || !formData.city || !formData.zipCode) {
            alert("Please fill in all fields.");
            return;
        }

        if (!user?.id) {
            console.error("User not available");
            return;
        }

    const reportData = {
        ...formData,
        user: { id: user.id }
    };
    
    // PUT request to update existing report
    if (isEditing && editId) {
        axios
        .put(`http://localhost:8080/api/reports/${editId}`, reportData)
        .then((res) => {
            const updatedReports = reports.map((r) =>
                r.id === editId ? res.data : r
            );
            setReports(updatedReports);
            resetForm();
        })
      .catch((err) => console.error(err));
  } else {
    // POST request to create new report
    axios
        .post("http://localhost:8080/api/reports", reportData)
        .then((res) => {
            setReports([...reports, res.data]);
            resetForm();
        })
        .catch((err) => console.error(err));
    }
    };

    const resetForm = () => {
        setFormData({
            type: "",
            description: "",
            city: "",
            zipCode: ""
        });
        setIsEditing(false);
        setEditId(null);
    };

    // Logout user and navigate back to sign in page 
    const handleLogout = () => {
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        setUser(null);
        navigate("/signin");
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
        <div className="inputDiv">
            <textarea className="Description" placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
            <input className="City" placeholder="City" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
            <input className="Zipcode" placeholder="Zip Code" value={formData.zipCode} onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })} />
        </div>
        <button type="submit">Submit Report</button>
      </form>

      <h3>Your Submitted Reports:</h3>
      <ul>
        {reports.map((report) => (
            <li key={report.id}>
                <strong>{report.type}</strong>: {report.description} — {report.city} ({report.zipCode})
                {/* Edit button pre fills form for editing */}
                <button onClick={() => {
                    setFormData({
                        type: report.type,
                        description: report.description,
                        city: report.city,
                        zipCode: report.zipCode
                });
                setIsEditing(true);
                setEditId(report.id);
            }} className="editBttn">Edit</button>
            {/*Delete button triggers axios DELETE request from backend*/}
            <button onClick={() => {
                axios.delete(`http://localhost:8080/api/reports/${report.id}`)
                    .then(() => {
                        setReports(reports.filter(r => r.id !== report.id));
                    })
                     .catch(err => console.error(err));
                }}className="deleteBttn">Delete</button>
            </li>
        ))}
      </ul>
        {/*Logout clears session and redirects user to main sign in*/}
      <div className="logoutContainer">
        <button onClick={handleLogout} className="logoutBtn">Logout</button>
      </div>

        <LinkButton to="/" btnClass= "homeBtn" label="Home" imgClass="homeImg" imgSrc="/img/homeButton.png" imgalt="Home Button"/>
        <LinkButton to="/plan" btnClass= "planBtn" label="Plan Ahead" imgClass="planImg" imgSrc="/img/planButton.png" imgalt="Plan Button"/>
        <LinkButton to="/contact" btnClass= "contactBtn" label="Contact Resources" imgClass="contactImg" imgSrc="/img/contactButton.png" imgalt="Contact Button"/>
        <LinkButton to="/about" btnClass="aboutBtn" label="About" imgClass="aboutImg" imgSrc="/img/aboutButton.png" imgalt="About button" />
    </>
  );
}

export default Dashboard;