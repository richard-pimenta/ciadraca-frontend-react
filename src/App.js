import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router-dom";
import  NavbarComponent  from "./Components/Navbar/NavbarComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
          <NavbarComponent />
       
      </BrowserRouter>
    </div>
  );
}

export default App;
