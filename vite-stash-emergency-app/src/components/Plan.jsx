import React, { useState } from "react";
import {useParams} from 'react-router';
import HomePage from "./HomePage";
import { suppliesTornado,suppliesEartquake, suppliesWildfire  } from "./Data";


export default function Plan() {
    const [userListInput, setUserListInput] = useState({
        customListItem: "",
        email: ""
    })

    const [disaster, setDisaster] = useState('Select from the dropdown');
    const [newSupplies, setNewSupplies] = useState({
        Tornadoes: [],
        Earthquakes: [],
        WildFires: [],
    });

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
        WildFires: suppliesWildfire,
    };

    const builtInList = getList[disaster] || [];
    const addToList = newSupplies[disaster] || [];

    const renderList = [...builtInList, ...addToList].map((item)=> (
        <li key={`${item.id}${item.supply}`}>
            <p>{item.supply}</p>
        </li>
    )) || null;   
    

    

    return(
        <>
        <div>
            <h1>Here we can help you Plan for Natural Disasters.</h1>
                <h2>Below use the Drop Down to select the disaster you would like to plan for.</h2>
        </div>
        <form>
        <div>
            <select value={disaster}
                onChange={e => setDisaster(e.target.value)}>
                <option value="">Select from the list below</option>
                <option value="Tornadoes" >Tornadoes</option>
                <option value="Earthquakes">Earthquakes</option>
                <option value="WildFires">Wildfires</option>
            </select>
        </div>
        </form>
        <div className="supplyData">
            <ul>{renderList}</ul>
        </div>
        <form>
            <h3>Add Your Own Items To The List!</h3>
                <div className="addToList">
                    <label>
                    <input
                    placeholder='Enter Your Ideas...'
                    text="text"
                    value={userListInput.customListItem}
                    onChange={handleChange}
                    name="customListItem"
                    />
                    <button type="Button" onClick={addSupply}>Add</button>
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
                    type="email"
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