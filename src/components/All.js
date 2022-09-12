import React from 'react'
import styled from 'styled-components'

function All() {
    return (
        <Container>
          <Top>
          </Top>
          <Bottom>
            <Description>
              <div className="text">
                <p>Discover, buy, and sell your digital product as <span><a href="https://ethereum.org/en/developers/docs/standards/tokens/erc-1155/" target="_blank">ERC-1155</a></span> token.</p>
              </div>
              <div className="image">
                <img src="/images/test2.png" />
              </div>
            </Description>
          </Bottom>
        </Container>
    )
}

export default All

const Container=styled.div`
  height: 605px;
  width: 100%;
  background-color: rgba(254, 212, 0, 255);
  display: grid;
  grid-template-rows: 85px 1fr;
`

const Top=styled.div`
  font-size: 40px;
`

const Bottom=styled.div`
  display: flex;
  justify-content: center;
`

const Description=styled.div`
  width: 1140px;
  display: flex;

  .text {
    flex: 1.6;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-family: Mabry-medium;
      font-size: 60px;
      letter-spacing: 4px;
      line-height: 80px;
      color: rgba(10, 10, 10, 1);
    }

    a {
      color: black;
      text-decoration-thickness: 1px;
      text-underline-offset: 8px;
      text-decoration-color: black;
      transition: all 0.25s;

      &:hover {
        text-decoration-color: grey;

      }
    }

  }

  .image {
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
    }
  }

`
