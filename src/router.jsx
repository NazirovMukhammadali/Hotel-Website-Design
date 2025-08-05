import React from 'react'
import Homecomponent from './home';
import Roomscomponent from './rooms';
import Facelitiescomponent from './facelities';
import Contactcomponent from './contact';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
function RouterComponent() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Homecomponent />} />
                <Route path='/rooms' element={<Roomscomponent />} />
                <Route path='/facelities' element={<Facelitiescomponent />} />
                <Route path='/contact' element={<Contactcomponent />} />
            </Routes>
        </>
    );
}

export default RouterComponent