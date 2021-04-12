import React from 'react'

//components
import Nav from '../components/Nav'
import Search from '../components/Search'
import Alert from '../components/Alert'


//Styles
import styled from 'styled-components'

const Navigation = () => {
    return (
        <>
        <NavbarContainer>
            <Nav />
            <Alert />
            <Search />
        </NavbarContainer>
        </>
    )
}

export default Navigation

const NavbarContainer = styled.div`
     background: black;
     position: sticky;
     top: 0;
     width: 100%;
     z-index: 10;
`