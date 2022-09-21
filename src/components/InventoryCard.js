import React from 'react'
import styled from 'styled-components'
import { saveAs } from "file-saver";

function InventoryCard() {

  const downloadHandle = () => {
    // const name = fileName;
    // const URL = fileURL;
    // saveAs(URL, name);
  }

    return (
        <Container>
          <div className="imageContainer">
            <img className="coverImg" src="/images/profile-1.jpg" />
          </div>
          <div className="tokenDetail">
            <div className="name">
              <p>Battery Park </p>
            </div>
            <div className="price-category-tokenType">
              <div className="price">
                <div className="icon-div">
                  <img src="/images/polygon-black.png"/>
                </div>
                <p>70</p>
              </div>
              <div className="category">
                <p>Education</p>
              </div>
              <div className="tokenType">
                <p>Non-Fungible</p>
              </div>
            </div>
            <div className="download" onClick={downloadHandle}>
              <p>Download</p>
            </div>
          </div>
          <div className="tokneID">
            <p># 1</p>
          </div>
        </Container>
    )
}

export default InventoryCard

const Container=styled.div`
  height: 400px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:hover{
    box-shadow: 3px 3px 0px black;
  }

  &:hover .coverImg {
    transform: scale(1.06);
  }

  .imageContainer {
    width: 100%;
    height: 230px;
    overflow: hidden;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;

    .coverImg {
      width: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }
  }

  .tokenDetail {
    flex: 1;
    width: 280px;
    display: flex;
    flex-direction: column;

    .name {
      width: 100%;
      height: 55px;
      display: flex;
      align-items: center;
      overflow: hidden;
      margin-bottom: 23px;

      p {
        margin: 0;
        font-family: Mabry-Regular;
        font-size: 20px;
      }
    }

    .price-category-tokenType {
      width: 100%;
      display: flex;
      height: 30px;
      box-sizing: border-box;
      border: 1px solid black;
      border-radius: 3px;

      .price {
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;

        .icon-div {
          margin-right: 10px;
          width: 20px;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 18px;
          }
        }

        p {
          margin-top: 19px;
          font-family: Mabry-Regular;
          font-size: 17px;
        }

      }

      .category {
        flex:1.2;
        border-left: 1px solid black;
        border-right: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          margin-top: 19px;
          font-family: Mabry-Regular;
          font-size: 17px;
        }
      }

      .tokenType {
        flex: 1.2;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          font-family: Mabry-Regular;
          font-size: 14px;
        }
      }
    }

    .download {
      margin-top: 12px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      border-radius: 3px;
      background-color: black;
      color: white;
      font-family: Mabry-Regular;
      transiton: opacity 0.25s;
      &:hover {
        background-color: rgba(144, 168, 237, 1);
        color: black;
      }

      &:active {
        opacity: 0.8;
      }
    }
  }

  .tokneID {
    position: absolute;
    top: 7px;
    left: 7px;
    border-radius: 3px;
    height: 22px;
    width: 65px;
    background-color: black;

    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-family: Mabry-medium;
      font-size: 14px;
      color: white;
    }
  }
`
