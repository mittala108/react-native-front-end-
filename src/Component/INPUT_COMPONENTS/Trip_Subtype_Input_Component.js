import { useEffect, useState } from "react";

const Trip_Subtype_Input_Component = ({state_Id,trip_type_Id,setTripSubtypeId})=> {

    const [trip_subtypeData,setTripSubtypeData]=useState([]);


    useEffect(()=>{

        fetch('http://localhost:8000/admin/sub_routes/trip_details_related_routes/trip_subtypes/get_all_trip_subtypes_based_on_a_particular_trip_type/'+trip_type_Id)
        .then(res=>{
            return res.json();
        })
        .then(data=>{

            console.log(data.data);

            setTripSubtypeData(data.data);

        })
        .catch(err=>{
            console.log(err.message);
        });

    },[state_Id,trip_type_Id])

   


    return ( 

        <div className="trip_subtype_input_component">

                <div className="select">
                    <select onChange={(e)=>setTripSubtypeId(e.target.value)}>
                    <option>Choose trip_subtype</option>
                        {trip_subtypeData.map((data)=>(

                            <option value={data._id} key={data._id}>{data.trip_subtype}</option>

                        ))}
                        
                    </select>
                </div>

        </div>
     );
}
 
export default Trip_Subtype_Input_Component;