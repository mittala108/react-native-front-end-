import { useEffect, useState } from "react";

const Place_Of_Journey_Input_Component = ({state_Id,trip_type_Id,trip_subtype_Id,setPlaceOfJourneyId}) => {

    const [place_of_journeyData,setPlaceOfJourneyData]=useState([]);

    useEffect(()=>{

        fetch('http://localhost:8000/admin/sub_routes/trip_details_related_routes/places_of_journey/get_all_places_of_journey_based_on_a_trip_subtype/'+trip_subtype_Id)
        .then(res=>{
            return res.json();
        })
        .then(data=>{

            console.log(data.data);

            setPlaceOfJourneyData(data.data);

        })
        .catch(err=>{
            console.log(err.message);
        });

    },[state_Id,trip_type_Id,trip_subtype_Id])


    return (  
        <div className="place_of_journey_input_component">

            <div className="select">
                <select onChange={(e)=>setPlaceOfJourneyId(e.target.value)}>
                <option>Choose Place_of_Journey</option>
                    {place_of_journeyData.map((data)=>(

                        <option value={data._id} key={data._id}>{data.place_of_journey}</option>

                    ))}
                    
                </select>
            </div>

        </div>
    );
}
 
export default Place_Of_Journey_Input_Component;