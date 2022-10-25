import { useEffect, useState } from "react";
import State_Input_Component from "./INPUT_COMPONENTS/State_Input_Component";
import Trip_Type_Input_Component from "./INPUT_COMPONENTS/Trip_Type_Input_Component";

const Trip_subtype = () => {
   
    const [state_Id,setStateId]=useState(null);
    const[trip_type_Id,setTripTypeId]=useState(null);
    const[trip_subtype,setTripSubtype]=useState('');
    const [success,setSuccess]=useState(0);


    const handleClick=()=>{

        fetch('http://localhost:8000/admin/sub_routes/trip_details_related_routes/trip_subtypes/add_trip_subtype/'+trip_subtype+'/'+trip_type_Id+'/'+state_Id,{
            method:'POST'
        })
        .then(result=>{
            return result.json();
        })
        .then(data=>{
            console.log(data)
            setSuccess(1);        
            setTripTypeId(null);
            setTripSubtype('');
            setStateId(null);
           
        })
        .catch(err=>{
            console.log(err.message);
        });
        
    }



    return (
        <div className="trip_subtype_block">

            {success && <p>Data added successfully</p>}
            <State_Input_Component setStateId={setStateId}/>
            {state_Id && <Trip_Type_Input_Component state_Id={state_Id} setTripTypeId={setTripTypeId}/>}
            {state_Id && trip_type_Id && <input className="input is-primary" type="text" placeholder="Trip_subtype" value={trip_subtype} onChange={(e)=>setTripSubtype(e.target.value)}/>}
            {state_Id && trip_type_Id && trip_subtype && <div className="buttons"> <button className="button is-primary" onClick={handleClick}>Add</button></div>}

        </div>
    );
}
 
export default Trip_subtype;