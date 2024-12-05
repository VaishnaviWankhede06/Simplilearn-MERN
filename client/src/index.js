import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './index.css';
import App from './App';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
   
  <div >
   <Routes>
    <Route path="/" element={<App />} />
        
    
        
      
       
        
     </Routes>
  </div>
  </Router>
);


