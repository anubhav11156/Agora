import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
          
        </Container>
    )
}

export default Header

const Container=styled.div`
  position: fixed;
  z-index: 10;
  height: 65px;
  width: 100%;
  background-color: lightblue;
  border-bottom: 1px solid black;
  font-family: Mabry-Regular;
  font-size: 23px;

  display: flex;
  align-items: center;
`
