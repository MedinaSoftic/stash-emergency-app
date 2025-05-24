import React, { useState, useEffect } from "react";
import {Link} from 'react-router';
import LinkButton from "../LinkButton";
import HomePage from "../HomePage";
import './Plan.css'
import { suppliesTornado, suppliesEartquake, suppliesWildfire  } from "./Data";


export default function Plan() {
    const [userListInput, setUserListInput] = useState({
        customListItem: "",
    })
        const [userForm, setUserForm] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    

    const [disaster, setDisaster] = useState("");
    const [newSupplies, setNewSupplies] = useState({
        Tornadoes: [],
        Earthquakes: [],
        Wildfires: [],
    });

    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = (e) => {
        const{name, value} = e.target;

        setUserListInput((inputUser)=> {
            return {
                ...inputUser,
                [name]:value
            }
        })
    };
    
    const addSupply = () => {
        const trimText = userListInput.customListItem.trim();
        if (!trimText || !disaster) return;

        const newItem = {id: Date.now(), supply: trimText};
        setNewSupplies(prev => ({
            ...prev,
            [disaster]: [...prev[disaster], newItem]
        }))
        setUserListInput(prev => ({...prev, customListItem: ""}));
    };
    

    const getList = {
        Tornadoes: suppliesTornado,
        Earthquakes: suppliesEartquake,
        Wildfires: suppliesWildfire,
    };

    const builtInList = getList[disaster] || [];
    const addToList = newSupplies[disaster] || [];

    const renderList = [...builtInList, ...addToList].map((item)=> (
        <li key={`${item.id}${item.supply}`}>
            <p>{item.supply}</p>
        </li>
    )) || null;   
    
    useEffect(() => {
        if(disaster && disaster !== "Select form the dropdown") {
            console.log("add and email is now visable")
        }
    }, [disaster])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
            setUserForm(prevState => ({ ...prevState, [name]: value }));
            
        }

    const isFormComplete = userForm.firstName && userForm.lastName && userForm.email;


    const handleSubmit = (event) => {
        event.preventDefault();
            setIsSubmitting(true);

        setTimeout(() => {
            alert('Form submitted!');
            setIsSubmitting(false);
        }, 2000);
    };


    return(
        <>
        <div>
            <h1>Here we can help you Plan for Natural Disasters.</h1>
                <h2>Below use the Drop Down to select the disaster you would like to plan for.</h2>
        </div>
        <form>
        <div >
            <select className="dropdown" value={disaster}
                onChange={e => setDisaster(e.target.value)}>
                <option value="">Select from the list below</option>
                <option value="Tornadoes" >Tornadoes</option>
                <option value="Earthquakes">Earthquakes</option>
                <option value="Wildfires">Wildfires</option>
            </select>
        </div>
        </form>

        <div>
        <div className="supplyData">
            <ul className="listDataStyle">{renderList}</ul>
        </div>

        </div>
        <div className="formInPlan">
            {disaster != "" && (
            <form onSubmit={handleSubmit}>
            <h3>Add Your Own Items To The List!</h3>
            <div className="addToList">
                <label>
                    <input
                        placeholder='Enter Your Ideas...'
                        type="text"
                        text="text"
                        value={userListInput.customListItem}
                        onChange={handleChange}
                        name="customListItem"
                    />
                    <div>
                        <button className="planPgBtns" type="Button" onClick={addSupply}>Add</button>
                    </div>
                </label>
                <br/>
            </div>
            <div>
                <br/>
                    <h3>Would you like to email this list?</h3>
                    <h3>Add your email below, you will receieve your email soon!</h3>
                <label>
                    <div className="inputbox">
                    <input
                        placeholder='First Name...'
                        type="text"
                        value={userForm.firstName}
                        onChange={handleInputChange}
                        name="firstName"
                    /></div>
                    <div className="inputbox">
                    <input
                        placeholder='Last Name...'
                        type="text"
                        value={userForm.lastName}
                        onChange={handleInputChange}
                        name="lastName"
                    /></div>
                    <div className="inputbox">
                    <input
                        placeholder='Enter Your Email...'
                        type="email"
                        value={userForm.email}
                        onChange={handleInputChange}
                        name="email"
                    /></div>
                    <button className="planPgBtnsdisable" type="submit" disabled={!isFormComplete || isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </label>
            </div>
        </form>
        )}
            <div>
            <LinkButton to="/" btnClass= "homeBtn" label="Home" imgClass="homeImg" imgSrc="src/img/homeButton.png" imgAlt="Home Button"/>
            <LinkButton to="/contact" btnClass= "contactBtn" label="Contact Resources" imgClass="contactImg" imgSrc="src/img/contactButton.png" imgAlt="Contact Button"/>
            <LinkButton to="/about" btnClass= "aboutBtn" label="About" imgClass="contactImg" imgSrc="src/img/aboutButton.png" imgAlt="About button"/>
        </div>
        </div>
        </>
    )
}
