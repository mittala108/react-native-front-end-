import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const State_Input_Component = ({setStateId})=> {

    const [Data1,setData]=useState([]);




    useEffect(()=>{

        fetch('http://localhost:8000/admin/sub_routes/trip_details_related_routes/states/get_all_states_stored_in_database')
        .then(res=>{
            return res.json();
        })
        .then((data)=>{

            setData(data.data);
            console.log(data.data);
            console.log(Data1);

        })
        .catch((err)=>{
            console.log('dskjdfsksdhk');
            console.log(err.message);
        });

    },[])

   


    return ( 

        <div className="state_input_component">


                <div className="select">
                    <select onChange={(e)=>setStateId(e.target.value)}>

                    <option>Choose State</option>

                        {Data1.map((data)=>(

                            <option value={data._id} key={data._id}>{data.state}</option>

                        ))}
                        
                    </select>
                </div>

        

               

        </div>
     );
}
 
export default State_Input_Component;