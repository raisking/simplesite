import React from 'react'
// import { NavLink } from 'react-router-dom';
// import web from '../src/images/img2.svg'
import web from '../src/images/p.jpeg'
import Common from './Common'

const Home = () => {
    return (
        <>

            <Common name='Grow your business with ' imagsrc={web} visit='/service' btname='Get started' />

        </>

    )
}

export default Home;
