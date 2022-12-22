
import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
HashRouter as Router,
Routes,
Route,
} from "react-router-dom";


const App = ()=> {

  const [progress,setProgress] = useState(10)
 

    return (
      <Router  >
          <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
     <Navbar/>
     <Routes>
     <Route exact path="/"  element={<News bar={setProgress} key="general" pagesize={13} country="in" category="general"/> }></Route>
     <Route  path="/sports"  element={<News bar={setProgress} key="sports" pagesize={13} country="in" category="sports"/> }></Route>
     <Route  path="/business"  element={<News bar={setProgress} key="business" pagesize={13} country="in" category="business"/> }></Route>
     <Route  path="/entertainment"  element={<News bar={setProgress} key="entertainment"pagesize={13} country="in" category="entertainment"/> }></Route>
     <Route  path="/science" element={<News bar={setProgress} key="science"  pagesize={13} country="in" category="science"/> }></Route>
     <Route  path="/health"  element={<News bar={setProgress} key="health" pagesize={13} country="in" category="health"/> }></Route>
     <Route  path="/general"  element={<News bar={setProgress} key="general"pagesize={13} country="in" category="general"/> }></Route>
     <Route  path="/technology" element={<News bar={setProgress} key="technology"  pagesize={13} country="in" category="technology"/> }></Route>
     </Routes>
     </Router>
     
    )
   
}

export default App





