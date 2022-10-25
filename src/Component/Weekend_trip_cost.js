import { useEffect, useState } from "react";
import State_Input_Component from "./INPUT_COMPONENTS/State_Input_Component";
import Trip_Type_Input_Component from "./INPUT_COMPONENTS/Trip_Type_Input_Component";
import Trip_Subtype_Input_Component from "./INPUT_COMPONENTS/Trip_Subtype_Input_Component";
import Place_Of_Journey_Input_Component from './INPUT_COMPONENTS/Place_Of_Journey_Input_Component';
import axios from 'axios';


const Weekend_trip_cost = () => {


    const [state_Id,setStateId]=useState(null);
    const[trip_type_Id,setTripTypeId]=useState(null);
    const [trip_subtype_Id,setTripSubtypeId]=useState(null);
    const[place_of_journey_Id,setPlaceOfJourneyId]=useState(null);
    const [seater_room,setSeaterRoom]=useState('');
    const [cost,setCost]=useState(0);
    const [success,setSuccess]=useState(0);


    const handleClick=(e)=>{

        console.log(state_Id,trip_type_Id,trip_subtype_Id,place_of_journey_Id,seater_room,cost);

        e.preventDefault();
        const url='http://localhost:8000/admin/sub_routes/cost_related_routes/weekend_trips_cost/post_cost_of_a_weekend_trip';
        
        const body={

            'state_Id':state_Id,
            'trip_type_Id':trip_type_Id,
            'trip_subtype_Id':trip_subtype_Id,
            'place_of_journey_Id':place_of_journey_Id,
            'seater_room':seater_room,
            'cost':cost

        };
      
        const config={
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
               
            },

        };

        axios.post(url,body,config)
        .then(result=>{
            setSuccess(1);  
            setCost(0);
            setSeaterRoom('');  
            setPlaceOfJourneyId(null);    
            setTripTypeId(null); 
            setTripSubtypeId(null);
            setStateId(null);
            console.log(result.data);
        })
        .catch(err=>{
            console.log(err.message);
        });
        
    }



    return (
        <div className="weekend_trip_cost_block">

            {success && <p>Data added successfully</p>}
            <State_Input_Component setStateId={setStateId}/>
            {state_Id && <Trip_Type_Input_Component state_Id={state_Id} setTripTypeId={setTripTypeId}/>}
            {state_Id && trip_type_Id && <Trip_Subtype_Input_Component state_Id={state_Id} trip_type_Id={trip_type_Id} setTripSubtypeId={setTripSubtypeId}/>}
            {state_Id && trip_type_Id && trip_subtype_Id &&<Place_Of_Journey_Input_Component state_Id={state_Id} trip_type_Id={trip_type_Id} trip_subtype_Id={trip_subtype_Id} setPlaceOfJourneyId={setPlaceOfJourneyId}/>}
            {state_Id && trip_type_Id && trip_subtype_Id && place_of_journey_Id && <div className="select">
                    <select onChange={(e)=>setSeaterRoom(e.target.value)}>
                        <option value="2-Seater">2-Seater</option>
                        <option value="4-Seater">4-Seater</option>                      
                    </select>
            </div>}

            {state_Id && trip_type_Id && trip_subtype_Id && place_of_journey_Id && <input className="input is-primary" type="number" placeholder="Enter Cost" value={cost} onChange={(e)=>setCost(e.target.value)}/>}
            {state_Id && trip_type_Id && trip_subtype_Id && place_of_journey_Id && <div className="buttons"> <button className="button is-primary" onClick={handleClick}>Add</button></div>}

        </div>
    );
}
 
export default Weekend_trip_cost;