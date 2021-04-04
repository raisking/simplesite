import React from 'react'
import { NavLink } from 'react-router-dom';
import web from '../src/images/p.jpeg'
import Common from './Common'

const About = () => {
    return (
        <>
            <Common name='Welcome to about page' imagsrc={web} visit='/contact' btname='Contact now' />
        </>

    )
}

export default About;
