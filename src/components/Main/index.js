import React from 'react';
import { Routes, Route} from "react-router-dom";
import Layout from '../Layout';
import Home from '../Home';
import App from '../App/Index';
import DataBase from '../DataBase';
import NoMatch from '../Nomattch/NoMatch';
import Dialog from '../Dialog';


export default function Main() {
  return <div>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/app" element={<App />} />
        <Route path="/database" element={<DataBase />}/>
        <Route path="/dialog" element={<Dialog />}/>
        <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
  </div>;
}
