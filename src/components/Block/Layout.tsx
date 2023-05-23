import React from 'react'
import Header from './header'
import { Outlet } from 'react-router-dom'

import styled from 'styled-components'

function Layout() {
  return (
    <Container>
        <Header />
        
        <Outlet/>
       <footer/>
    </Container>
  )
}

export default Layout

const Container = styled.div`

    background-image: url('./assets/bgwave.svg');
    height: 100vh;
    background-repeat: no-repeat;
    width: 100%;
    overflow: hidden;
    background-size: contain;
    margin-left: -1px;
`