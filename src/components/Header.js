import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        {/* <span className="logo"><img src={logo} alt="" /></span> */}
        <h1><span style={{fontSize:".8em", color:"lightgrey"}}>Mgr. Ing. </span>Tomáš Nováček</h1>
        <p>Psycholog, kouč a psychoterapeut.</p>
    </header>
)

export default Header
