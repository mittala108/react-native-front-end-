import { useEffect, useState } from "react";

const Trip_Type_Input_Component = ({state_Id,setTripTypeId})=> {

    const [trip_typeData,setTripTypeData]=useState([]);


    useEffect(()=>{

        fetch('http://localhost:8000/admin/sub_routes/trip_details_related_routes/trip_types/get_all_trip_type_which_belong_to_a_particular_state_Id/'+state_Id)
        .then(res=>{
            return res.json();
        })
        .then(data=>{

            console.log(data.data);

            setTripTypeData(data.data);

        })
        .catch(err=>{
            console.log(err.message);
        });

    },[state_Id])

   


    return ( 

        <div className="trip_type_input_component">

                <div className="select">
                    <select onChange={(e)=>setTripTypeId(e.target.value)}>
                    <option>Choose trip_type</option>
                        {trip_typeData.map((data)=>(

                            <option value={data._id} key={data._id}>{data.trip_type}</option>

                        ))}
                        
                    </select>
                </div>

        </div>
     );
}
 
export default Trip_Type_Input_Component;