import logo from './logo.svg';
import './App.css';
import Register from './Component/Register/Sign-up'
import Login from './Component/Register/Login'
import Forget from './Component/Register/forgetPassword'
import Home from './Component/Com-1/Home'
import Product from './Component/Com-1/Products'
import Productdetails from './Component/Com-1/ProductDetails';
import Updateproduct from './Component/Com-1/update';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Dashbord from './Component/Com-1/Dashbord';
import Map from './Component/Com-1/Map';
import Upload from './Component/Com-2/uploade';


function App() {
  return(
    <>
    <div className="App">

<Upload/>

    {/* <Router>
          <Routes>
        <Route path='/forget' element = {<Forget/>}/>
        <Route path='/signup' element = {<Register/>}/>
        <Route path='/' element = {<Login/>}/>
        <Route path='/home' element = {<Home/>} />
        <Route path='/product' element = {<Product/>} />
        <Route path='/viewProduct' element = {<Productdetails/>} />
        <Route path='/update' element = {<Updateproduct/>} />
        <Route path='/dash' element = {<Dashbord/>} />
        <Route path='/map' element = {<Map/>} />
      </Routes>
    </Router> */}
    </div>
    </>
  )



  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
