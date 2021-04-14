import React from 'react'

//components
import Nav from '../components/Nav'
import Search from '../components/Search'
import Alert from '../components/Alert'


//Styles
import styled from 'styled-components'

//location
import {useLocation} from 'react-router-dom'



const Navigation = () => {

//Location
const { pathname } = useLocation();

if (pathname  === '/' ) {
    return <>
    <NavbarContainer>
        <Nav />
        <Alert />
        <Search />
    </NavbarContainer>
    </>
} else {
    return ( 
        <>
        <NavbarContainer>
            <Nav />
        </NavbarContainer>
        </>
    )
}


}

export default Navigation

const NavbarContainer = styled.div`
     background: black;
     position: sticky;
     top: 0;
     width: 100%;
     z-index: 20;
`