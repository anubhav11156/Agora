import React from 'react'
import styled from 'styled-components'
import InventoryCard from './InventoryCard'

function Inventory() {
    return (
      <Container>
        <div className="heading">
          <div className="icon-div">
            <img src="/images/collection-1.png" />
          </div>
          <div className="text-div">
            <p className="title">Inventory</p>
            <p className="description">Your token collection</p>
          </div>
        </div>
        <InventoryList>
          <InventoryCard />
          <InventoryCard />
          <InventoryCard />
          <InventoryCard />
        </InventoryList>
      </Container>
    )
}

export default Inventory

const Container=styled.div`
  margin-top: 40px;
  padding-left: 60px;
  height: auto;

  .heading {
    width: 1000px;
    height: 80px;
    margin-bottom: 25px;
    border: 1px solid black;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(144, 168, 237, 1);

    .icon-div {
      width: 53px;
      display: flex;
      justify-content: center;
      margin-left: 20px;

      img {
        width: 95%;
      }
    }

    .text-div {
      flex: 1;
      margin-left: 25px;

      .title {
        margin: 0;
        font-family: Mabry-medium;
        font-size: 26px;
      }

      .description {
        margin-top: 12px;
        margin-bottom: 0;
        font-family: Mabry-Regular;
        font-size: 17px;
      }
    }
  }

`

const InventoryList=styled.div`
  width: 950px;
  min-height: 800px;
  border: 1px dashed black;
  border-radius: 8px;
  padding: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 22px;
  row-gap: 35px;
`
