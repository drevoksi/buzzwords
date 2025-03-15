import { useState } from "react";
import './Frontend.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Subway } from './pages/subwaySurfers'


export default function Frontend() {
    return  (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/subway-surfers" element={<Subway/>}/>
            </Routes>
        </Router>
    )
}