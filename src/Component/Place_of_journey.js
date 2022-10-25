import { useEffect, useState } from "react";
import State_Input_Component from "./INPUT_COMPONENTS/State_Input_Component";
import Trip_Type_Input_Component from "./INPUT_COMPONENTS/Trip_Type_Input_Component";
import Trip_Subtype_Input_Component from "./INPUT_COMPONENTS/Trip_Subtype_Input_Component";


const Place_of_journey = () => {


    const [state_Id,setStateId]=useState(null);
    const[trip_type_Id,setTripTypeId]=useState(null);
    const [trip_subtype_Id,setTripSubtypeId]=useState(null);
    const[place_of_journey,setPlaceOfjourney]=useState('');
    const [success,setSuccess]=useState(0);


    const handleClick=()=>{

        fetch('http://localhost:8000/admin/sub_routes/trip_details_related_routes/places_of_journey/add_place_of_journey/'+place_of_journey+'/'+trip_subtype_Id+'/'+trip_type_Id+'/'+state_Id,{
            method:'POST'
        })
        .then(result=>{
            return result.json();
        })
        .then(data=>{
            console.log(data)
            setSuccess(1);    
            setPlaceOfjourney('');    
            setTripTypeId(null);
            setTripSubtypeId(null);
            setStateId(null);
           
        })
        .catch(err=>{
            console.log(err.message);
        });
        
    }



    return (
        <div className="place_of_journey_block">

            {success && <p>Data added successfully</p>}
            <State_Input_Component setStateId={setStateId}/>
            {state_Id && <Trip_Type_Input_Component state_Id={state_Id} setTripTypeId={setTripTypeId}/>}
            {state_Id && trip_type_Id && <Trip_Subtype_Input_Component state_Id={state_Id} trip_type_Id={trip_type_Id} setTripSubtypeId={setTripSubtypeId}/>}
            {state_Id && trip_type_Id && trip_subtype_Id && <input className="input is-primary" type="text" placeholder="Place_of_journey" value={place_of_journey} onChange={(e)=>setPlaceOfjourney(e.target.value)}/>}
            {state_Id && trip_type_Id && trip_subtype_Id && place_of_journey && <div className="buttons"> <button className="button is-primary" onClick={handleClick}>Add</button></div>}

        </div>
    );
}
 
export default Place_of_journey;