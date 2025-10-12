import { BrowserRouter ,Routes,Route} from "react-router";
//import './App.css';

import Homes from "./component/Home";
import TestForm from "./component/Paitent";
import Navber from "./component/Navber/Navber";


function App() {


  return (

    <div className="App-header">

     
      <BrowserRouter>
      <Navber/>
        <Routes>
          <Route path="/home" element={<Homes/>}/>
          <Route path="/login" element={<TestForm/>}/>
        </Routes>
      </BrowserRouter>

    </div>
    
  );
}

export default App;

