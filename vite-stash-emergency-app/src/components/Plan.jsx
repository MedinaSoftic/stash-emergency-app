import React, { useState } from "react";
import {useParams} from 'react-router';
import HomePage from "./HomePage";
import { supplies } from "./Data";


export default function Plan() {
    let [userListInput, setUserListInput] = useState({
        add: "",
        email: ""
    })


    const handleChange = (e) => {
        const{name, value} = e.target;

        setUserListInput((inputUser)=> {
            return {
                ...inputUser,
                [name]:value
            }
        })
    }
    
    
    const supplyList = supplies.map(items => 
        <li key={items.id}><p>{items.supply}</p></li>)

    return(
        <>
        <div>
            <h1>Here we can help you Plan for Natural Disasters.</h1>
                <h2>Below use the Drop Down to select the disaster you would like to plan for.</h2>
        </div>
        <div>
            <select>
                <option>Select from the list below</option>
                <option>Tornadoes</option>
                <option>Earthquakes</option>
                <option>Wildfires</option>
            </select>
            <button>Search List</button>
        </div>
        <div className="supplyData">
            <ul>{supplyList}</ul>
        </div>
            <h3>Add Your Own Items To The List!</h3>
    
            <form>
                <div className="addToList">
                    <label>
                    <input
                    placeholder='Enter Your Ideas...'
                    text="text"
                    value={userListInput.add}
                    onChange={handleChange}
                    name="add"
                    />
                    </label>
                    <br/>
                </div>
                <div>
                    <br/>
                    <h3>Would you like to email this list?</h3>
                    <h3>Add your email below, you will receieve your email soon!</h3>
                    <label>
                    <input
                    placeholder='Enter Your Email...'
                    text="email"
                    value={userListInput.email}
                    onChange={handleChange}
                    name="email"
                    />
                    </label>
                </div>
            </form>
   
        </>
    )
}