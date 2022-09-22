/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
// import { contractAddress, contractAbi } from '../config'
import { contractAddress } from "../address.js";
import { contractAbi } from "../config";
import { useMoralis } from 'react-moralis'
import web3modal from "web3modal";
import { ethers } from "ethers";


function SectionCard(prop) {

  // if user is authenticated then execute by option else say to connect wallet
  async function buy() {
      const modal = new web3modal({
          network: "mumbai",
          cacheProvider: true,
      });
      const connection = await modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
          contractAddress,
          contractAbi.abi,
          signer
      );
      const price = ethers.utils.parseUnits(prop.price.toString(), "ether");
      const transaction = await contract.buy(prop.tokenId, {
          value: price,
          gasLimit: 1000000,
      });
      await transaction.wait();
  }

    return (
        <Container>
          <BgImage>
            <img className="coverImg" src={prop.cover}/>
            {/* {console.log(prop.cover)} */}
          </BgImage>
          <Detail>
            <div className="title-div">
              <p>{prop.name}</p>
            </div>
            <div  className="middle">
              <div className="left">
                <p className="price-text">Price</p>
                <div className="matic">
                  <div className="logo-div">
                    <img src="images/polygon-color.png" />
                  </div>
                  <div className="amount-div">
                    <p>{prop.price}</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <p className="remaining-text">Remaining</p>
                <div className="token-status">
                  {prop.remaining}
                </div>
              </div>
            </div>
            <BuyButton onClick={buy}>Buy Now</BuyButton>
          </Detail>
          <div className="tokenId-div">
            <p># {prop.tokenId}</p>
          </div>
        </Container>
    )
}

export default SectionCard

const Container=styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 360px;
  height: 535px;
  border: 1px solid black;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  
  flex-direction: column;
  overflow: hidden;
  position: relative;

  &:hover {
    box-shadow: 4px 4px 0px black;
  }

  &:hover .coverImg {
    transform: scale(1.08);
  }

  .tokenId-div {
    position: absolute;
    top: 10px;
    left: 10px;
    height: 25px;
    min-width: 63px;
    border-radius: 4px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      margin: 0;
      font-family: Mabry-medium;
      font-size: 16px;
      color: white;
    }
  }
`

const BgImage=styled.div`
  height: 330px;
  display:flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  overflow: hidden;

  .coverImg {
    width: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }

`

const Detail=styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;

  .title-div {
    margin-top: 5px;
    height: 75px;
    display: flex;
    justify-content: start;
    align-items: center;

    p {
      line-height: 28px;
      font-family: Mabry-Regular;
      font-size: 22px;
    }
  }

  .middle {
    height: 55px;
    display: flex;

    .left {
      flex:1.3;

      .price-text {
        margin:0;
        font-family: Mabry-Regular;
        font-size: 15.5px;
      }

      .matic {
        margin-top: 6px;
        height: 30px;
        display: flex;


        .logo-div {

          width: 30px;
          display: flex;
          align-items: center;
          justify-contet: start;

          img {
            width: 20px;
          }
        }

        .amount-div{
          flex:1;
          display: flex;
          align-items: center;

          p {
            font-family: Arial;
            font-weight: bold;
            font-size: 18px;
            color: rgb(31, 33, 34);
          }
        }
      }


    }

    .right {
      flex:1;
      display: flex;
      flex-direction: column;
      align-items: end;

      .remaining-text {
        margin:0;
        font-family: Mabry-Regular;
        font-size: 15.5px;
      }

      .token-status {
        margin-top: 6px;
        height: 30px;
        display: flex;
        width: 50px;
        align-items: center;
        justify-content: end;
        font-family: Arial;
        font-weight: bold;
        font-size: 18px;
        color: black;
      }

    }
  }

`

const BuyButton=styled.button`
  margin-top: 10px;
  height: 40px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  color: white;
  background-color: black;
  font-size: 18px;
  box-shadow: 0px 0px 0px black;
  transition: background-color 0.15s, opacity 0.15s;

  &:hover {
    background-color: rgba(255,100,234,255);
    color: black;
  }

  &:active {
    opacity: 0.8;
  }
`
