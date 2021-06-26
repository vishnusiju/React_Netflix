
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {Action, Originals} from './Urls'
// import axios from 'axios'
import './App.css'

function App() {
 
  return (
    
    <div>
        
        <div>
             <NavBar/>
             <Banner/>
             <RowPost url={Originals} title="Netflix Originals"/>
             <RowPost url={Action} title="Action" isSmall/>
        </div>
    </div>
    
  );
}

export default App;
