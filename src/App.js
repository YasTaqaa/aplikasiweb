import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Lat1 = lazy(() => import('./Lat1'));
const Lat2 = lazy(() => import('./Lat2'));
const Lat3 = lazy(() => import('./Lat3'));
const Lat4 = lazy(() => import('./Lat4'));
const Lat5 = lazy(() => import('./Lat5'));
const Lat6 = lazy(() => import('./Lat6'));
const Lat7 = lazy(() => import('./Lat7'));
const Lat8 = lazy(() => import('./Lat8'));

const App = () => (

   <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Lat1" element={<Lat1 />} />
        <Route path="/Lat2" element={<Lat2 />} />
        <Route path="/Lat3" element={<Lat3 />} />
        <Route path="/Lat4" element={<Lat4 />} />
        <Route path="/Lat5" element={<Lat5 />} />
        <Route path="/Lat6" element={<Lat6 />} />
        <Route path="/Lat7" element={<Lat7 />} />
        <Route path="/Lat8" element={<Lat8 />} />
      </Routes>
    </Suspense>
   </Router> 
  );

export default App;