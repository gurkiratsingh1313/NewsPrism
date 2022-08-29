import './App.css';

import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import React, {useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

const App = ()=> {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)

  return <div>
  <Router>
      <NavBar/>
      <LoadingBar
      height={3}
        color='#f11946'
        progress={progress}
        
      />
    <Routes>
      <Route exact path="/" element={ <News  setProgress={setProgress}  apiKey={apiKey}   key="general"  country="in" category="general"/>} />
      <Route exact path="/newsapp" element={ <News  setProgress={setProgress}  apiKey={apiKey}   key="general"  country="in" category="general"/>} />
      <Route exact path="/sports" element={ <News  setProgress={setProgress}  apiKey={apiKey}   key="sports"  country="in" category="sports"/>} />
      <Route exact path="/science" element={ <News  setProgress={setProgress}  apiKey={apiKey}   key="science"  country="in" category="science"/>} />
      <Route exact path="/entertainment" element={ <News  setProgress={setProgress}  apiKey={apiKey}   key="entertainment"  country="in" category="entertainment"/>} />
      <Route exact path="/business" element={ <News  setProgress={setProgress}  apiKey={apiKey}   key="business"  country="in" category="business"/>} />
      <Route exact path="/technology" element={ <News  setProgress={setProgress}  apiKey={apiKey}   key="technology"  country="in" category="technology"/>} />
    </Routes>
  </Router>
  </div>
  
}

export default App;
