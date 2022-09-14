import React from 'react'
import styled from 'styled-components'

function Music() {
    return (
        <Container>
          <div className="Heading">
            <div className="icon-div">
              <img src="/images/art-logo.png" />
            </div>
            <div className="text-div">
              <p className="title">Art & Drawing</p>
              <p className="description">From paint brushes to your own arts, sell and buy anything!</p>
            </div>
          </div>
          <div className="card-div">this div is for the cards</div>
        </Container>
    )
}

export default Music

const Container=styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  margin-top: 165px;

  .Heading {
    width: 100%;
    height: 130px;
    border: 1px solid black;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(144, 168, 237, 1);

    .icon-div {
      width: 80px;
      display: flex;
      justify-content: center;
      margin-left: 30px;

      img {
        width: 95%;
      }
    }

    .text-div {
      flex: 1;
      margin-left: 35px;

      .title {
        margin: 0;
        font-family: Mabry-medium;
        font-size: 40px;
      }

      .description {
        margin-top: 15px;
        margin-bottom: 0;
        font-family: Mabry-Regular;
        font-size: 20px;
      }
    }
  }

  .card-div {
    flex:1;
    margin-bottom: 5px;
    width: 100%;
  }
`
