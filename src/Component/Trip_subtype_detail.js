import { useEffect, useState } from "react";
import State_Input_Component from "./INPUT_COMPONENTS/State_Input_Component";
import Trip_Type_Input_Component from "./INPUT_COMPONENTS/Trip_Type_Input_Component";
import Trip_Subtype_Input_Component from "./INPUT_COMPONENTS/Trip_Subtype_Input_Component";
import axios from 'axios';


const Trip_subtype_detail = () => {


    const [state_Id,setStateId]=useState(null);
    const[trip_type_Id,setTripTypeId]=useState(null);
    const [trip_subtype_Id,setTripSubtypeId]=useState(null);
    const [file,setFile]=useState();
    const [success,setSuccess]=useState(0);


    const handleClick=(e)=>{
        e.preventDefault();
        const url='http://localhost:8000/admin/sub_routes/trip_details_related_route/trip_subtypes_detail/add_trip_subtype_detail';
        const formData=new FormData();
        formData.append('detail_pdf',file);
        formData.append('fileName',file.name);
        formData.append('state_Id',state_Id);
        formData.append('trip_type_Id',trip_type_Id);
        formData.append('trip_subtype_Id',trip_subtype_Id);
        const config={
            headers:{
                "Content-Type":"multipart/form-data"
               
            },

        };

        axios.post(url,formData,config)
        .then(response=>{
            setSuccess(1);
            setStateId(null);
            setTripTypeId(null);
            setTripSubtypeId(null);
            console.log(response.data)
        })
        .catch(err=>{
            console.log(err.message);
        });
        
    }



    return (
        <div className="trip_subtype_detail_block">

            {success && <p>Data added successfully</p>}
            <State_Input_Component setStateId={setStateId}/>
            {state_Id && <Trip_Type_Input_Component state_Id={state_Id} setTripTypeId={setTripTypeId}/>}
            {state_Id && trip_type_Id && <Trip_Subtype_Input_Component state_Id={state_Id} trip_type_Id={trip_type_Id} setTripSubtypeId={setTripSubtypeId}/>}
            {state_Id && trip_type_Id && trip_subtype_Id && <input className="input is-primary" type="file" placeholder="Trip_subtype_detail" onChange={(e)=>setFile(e.target.files[0])}/>}
            {state_Id && trip_type_Id && trip_subtype_Id && <div className="buttons"> <button className="button is-primary" onClick={handleClick}>Add</button></div>}

        </div>
    );
}
 
export default Trip_subtype_detail;