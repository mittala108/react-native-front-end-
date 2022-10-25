import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import './App.css';
import Trip_subtype from './Component/Trip_subtype';
import Place_of_journey from './Component/Place_of_journey';
import Date_of_journey from './Component/Date_of_journey';
import Trip_subtype_detail from './Component/Trip_subtype_detail';
import Weekend_trip_cost from "./Component/Weekend_trip_cost";


function App() {
  return (

    <Router>
      <div className="App">
        <div className="navbar">
          

        </div>

        <div className="body">

          <div className="columns">
              <div className="column is-one-quarter">
                <h1 style={{backgroundColor:"blue"}}>...Trip_type_details...</h1>
                <aside className="menu">                 
                  <ul className="menu-list">
                    <li style={{backgroundColor:"red"}}><Link to="/trip_subtype">Trip_subtype</Link></li>
                    <li style={{backgroundColor:"red"}}><Link to="/place_of_journey">Place_of_journey</Link></li>
                    <li style={{backgroundColor:"red"}}><Link to="/date_of_journey">Date_of_journey</Link></li>
                    <li style={{backgroundColor:"red"}}><Link to="/trip_subtype-detail">Trip_subtype_detail</Link></li>
                  </ul>
                </aside>

                <h1 style={{backgroundColor:"blue"}}>...Cost Related Details...</h1>
                  
                <aside className="menu">     
                  <ul className="menu-list">
                    <li style={{backgroundColor:"red"}}><Link to="/weekend_trip_cost">Wekend_Trip_Cost</Link></li>
                  </ul>
                  </aside>

                
              </div>

              <div className="column">             
                <Routes>               
                  <Route exact path="/trip_subtype" element={<Trip_subtype/>}></Route>
                  <Route exact path="/place_of_journey" element={<Place_of_journey/>}></Route>
                  <Route exact path="/date_of_journey" element={<Date_of_journey/>}></Route>
                  <Route exact path="/trip_subtype-detail" element={<Trip_subtype_detail/>}></Route>
                  <Route exact path="/weekend_trip_cost" element={<Weekend_trip_cost/>}></Route>
                </Routes>
              </div>           
          </div>
        </div>                 
      </div>
    </Router>
       
    
 
    
  );
}

export default App;
