import React, {useState, useEffect }from 'react'
import styled from 'styled-components'
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/micah';
import Publish from './Publish'
import Products from './Products'
import Inventory from './Inventory'
import { useLocation } from 'react-router-dom'

function Dashboard() {


  // use useLocation and extract state from the parms which was passed from the homepage
  const {state} = useLocation();
  const accountAddress = state.accountAddress;
  console.log(accountAddress);

  const avatar = createAvatar( style, {
    dataUri: true,
    seed: `${accountAddress}`
  });

  const [isPublishClicked, setIsPublishClicked] = useState(true);
  const [isProducClicked, setIsProductClicked] = useState(false);
  const [isInventoryClicked, setIsInventoryClicked] = useState(false);

  const publishHandle = () => {
    setIsProductClicked(false);
    setIsInventoryClicked(false);
    setIsPublishClicked(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const productHandle = () => {
    setIsInventoryClicked(false);
    setIsPublishClicked(false);
    setIsProductClicked(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const inventoryHandle = () => {
    setIsProductClicked(false);
    setIsPublishClicked(false);
    setIsInventoryClicked(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
    return (
        <Container>
          <SideBar>
            <div className="profile-section" >
              <div className="profile-avatar">
                <div className="avatar-div">
                  <img src={avatar} alt="avatar"/>
                </div>
              </div>
              <div className="address-div">
                <div className="address">{accountAddress}</div>
              </div>
            </div>
            <div className="options-section">
              <div className="publish-button" onClick={publishHandle}
                style={{
                  color: isPublishClicked ? 'rgba(255,100,234,255)' : ''
                }}
                >
                <div className="icon-div">
                  <img src="/images/publish-sidebar.png" />
                </div>
                <p>Publish</p>
              </div>
              <div className="products-button" onClick={productHandle}
                style={{
                  color: isProducClicked ? 'rgba(255,100,234,255)' : ''
                }}
              >
                <div className="icon-div">
                  <img src="/images/product-sidebar.png" />
                </div>
                <p>Products</p>
              </div>
              <div className="inventory-button" onClick={inventoryHandle}
                style={{
                  color: isInventoryClicked ? 'rgba(255,100,234,255)' : ''
                }}
              >
                <div className="icon-div">
                  <img src="/images/inventory-sidebar.png" />
                </div>
                <p>Inventory</p>
              </div>
            </div>
          </SideBar>
          <MainSection>
            <div className="welcome-div">
              <p>Hi there, Welcome to agora</p>
            </div>
            { isPublishClicked &&
              <Publish />
            }
            { isProducClicked &&
              <Products />
            }
            { isInventoryClicked &&
              <Inventory />
            }
          </MainSection>
        </Container>
    )
}

export default Dashboard

const Container=styled.div`
  width: 100%;
  height: 150vh;
  position: relative;
  background-color: rgba(244,245,240,255);
`

const SideBar=styled.div`
  z-index: 1;
  position: fixed;
  top: 68px;
  bottom: 0px;
  width: 260px;
  background-color: black;
  display:flex;
  flex-direction: column;
  border-right: 1px solid black;

  .profile-section {
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    border-bottom: 1px solid grey;

    .profile-avatar {
      flex: 1.8;
      display: flex;
      justify-content: center;
      align-items: center;

      .avatar-div {
        margin-top: 70px;
        width: 120px;
        height: 120px;
        border-radius: 110px;
        border: 2px solid black;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255,100,234,255);

        img {
          margin-top: 20px;
          width: 85%;
        }
      }
    }

    .address-div {
      padding-top: 15px;

      flex: 1;

      .address {
        margin-top: 8px;
        margin-left: auto;
        margin-right: auto;
        background-color: orange;
        padding-top: 6px;
        padding-bottom: 4px;
        padding-left: 9px;
        padding-right: 9px;
        border-radius: 20px;
        font-family: Mabry-Regular;
        font-size: 15px;
        width: 180px;
        position: relative;

        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        cursor: pointer;
      }
    }

  }

  .options-section {
    margin-top: 10px;
    flex: 2.2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    overflow: hidden;

    .publish-button,
    .products-button,
    .inventory-button {
      display: flex;
      align-items: center;
      width: 100%;
      cursor: pointer;
      color: white;
      height: 50px;
      padding-left: 34px;
      border-bottom: 1px solid grey;
      transition: color 0.25s;

      &:hover {
        color:rgba(255,100,234,255);
      }

      .icon-div {
        height: 20px;
        width: 20px;
        margin-right: 5px;
        opacity: 0.86;
        img {
          width: 100%;
        }
      }
      p {
        margin: 0;
        margin-top: 3px;
        font-family: Mabry-Regular;
        font-size: 17px;
      }
    }
  }
`

const MainSection=styled.div`
  position: absolute;
  left: 260px;
  right: 0px;
  top: 68px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

  .welcome-div {
    display: flex;
    width: 100%;
    justify-content: start;
    align-items: center;
    height: 150px;
    padding-left: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.62);
    p {
      font-family: Mabry-Regular;
      font-size: 50px;
    }

  }
`
