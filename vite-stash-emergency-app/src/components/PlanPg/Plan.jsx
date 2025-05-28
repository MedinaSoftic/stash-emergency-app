import React, { useState, useEffect } from "react";
import {Link} from 'react-router';
import LinkButton from "../LinkButton";
import HomePage from "../HomePage";
import './Plan.css'
import { suppliesTornado, suppliesEartquake, suppliesWildfire  } from "./Data";
import emailjs from 'emailjs-com'


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

    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleChange = (e) => {
        const{name, value} = e.target;
        
        setUserListInput((inputUser)=> {
            return {
                ...inputUser,
                [name]:value
            }
        })
    };
    
    // Logic for adding supplies, addSupply take the input of the user, trims white space, and if the user doesnt add anything but white space, it will not trigger an add nor if no disaster is selected.
    const addSupply = () => {
        const trimText = userListInput.customListItem.trim();
        if (!trimText || !disaster) return;

    // If the user adds an item, We used the Date.now() to be able to add it to the list count for ID, then converted their text to "supply".
    //  takes the old list (...prev) and adds the new information. 
        const newItem = {id: Date.now(), supply: trimText};
        setNewSupplies(prev => ({
            ...prev,
            [disaster]: [...prev[disaster], newItem]
        }))
    //this clears the feild after data is added ""
        setUserListInput(prev => ({...prev, customListItem: ""}));
    };
    // allows us to save the new supplies to localStorage when the user enters new items. this is included so when the user toggles between other disasters it stores the information. 
    // once user leaves the page to a new one it will delete, its is only local to that page.  
    useEffect(() => {
        localStorage.setItem("customSupplies", JSON.stringify(newSupplies));
    }, [newSupplies]);

    useEffect (() => {
        const saved = localStorage.getItem("customSupplies");
        if (saved) { //checks to see if anything was added to "customSupplies", if yes it will show those items.
            setNewSupplies(JSON.parse(saved));
        }
    }, []); 
    

    const getList = {
        Tornadoes: suppliesTornado,
        Earthquakes: suppliesEartquake,
        Wildfires: suppliesWildfire,
    };

    const builtInList = getList[disaster] || []; // the list from data that is being imported form the specific disaster
    const addToList = newSupplies[disaster] || [];  //adds items to existing list of disastes 

    const renderList = [...builtInList, ...addToList].map((item)=> ( //this is when the disasted is clicked it will render that list (this is also why "Select from below" wont show anything because its not a list )
        <li key={`${item.id}${item.supply}`}>
            <p>{item.supply}</p>
        </li>
    )) || null;   
    
    useEffect(() => {
        if(disaster && disaster !== "Select form the dropdown") {
        }
    }, [disaster])

    const handleInputChange = (e) => {  //alows us to write text in input 
        const { name, value } = e.target;
            setUserForm(prevState => ({ ...prevState, [name]: value }));
            
        }

    const isFormComplete = userForm.firstName && userForm.lastName && userForm.email; //trigger for disable button on submit 


    const handleSubmit = (e) => {
        e.preventDefault();  //so page wont reload on submit of form
            setIsSubmitting(true);

        const allItems =[...(builtInList || []), ...(newSupplies[disaster] || [])] //shows built in list with added user supplies
        const message = allItems.map(item => `${item.supply}`).join('\n'); //shows the message of all lists together with a new line after each 

        const templateParams = { 
            firstName: userForm.firstName,
            lastName: userForm.lastName,
            email: userForm.email,
            message: message
        }


        //Here is where the email works, without using backend. Sends a request to EmailJs, fills the template 
        //I made in the site, with the values passed through by props, uses my email entered to send the email.
        emailjs.send(
            'service_Stash2025!',
            'template_pel2nal',
            templateParams,
            'tsgqQ6Xc7vI21cNli'
        ).then(() => {
            setIsSubmitting(false); //since i cant use alerts, i had to have a useState to show the user that something is working in the backround visually. 
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 3000);
        }).catch(() => {
            setIsSubmitting(false);
        });
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
                    {/* logic here for the sumbitting, if isSubmitting, show submitted... else if isSubmitted show submitted(has a timmer for 3 sec), else show submit 
                    btn will always be disabled unitl all feilds are completed, if somone gives a fake email, i will get an email alert from the fake account.*/}
                    <button className="planPgBtnsdisable" type="submit" disabled={!isFormComplete || isSubmitting}> 
                        {isSubmitting ? "Submitting..." : isSubmitted ? 'Submitted' : 'Submit'}
                    </button>
                </label>
            </div>
        </form>
        )}
            <div>
            <LinkButton to="/" btnClass= "homeBtn" label="Home" imgClass="homeImg" imgSrc="src/img/homeButton.png" imgalt="Home Button"/>
            <LinkButton to="/contact" btnClass= "contactBtn" label="Contact Resources" imgClass="contactImg" imgSrc="src/img/contactButton.png" imgalt="Contact Button"/>
            <LinkButton to="/about" btnClass= "aboutBtn" label="About" imgClass="aboutImg" imgSrc="src/img/aboutButton.png" imgalt="About button"/>
        </div>
        </div>
        </>
    )
}
