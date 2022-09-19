import React, {useState, useEffect }from 'react'
import styled from 'styled-components'
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/micah';
import Publish from './Publish'

function Dashboard() {

  const avatar = createAvatar( style, {
    dataUri: true,
    seed: "0x22b6Dd4D6d818e2Ebce3D2E009A249F8FbF4e965"
  });

  const [isPublishClicked, setIsPublishClicked] = useState(false);
  const [isProducClicked, setIsProductClicked] = useState(false);
  const [isInventoryClicked, setIsInventoryClicked] = useState(false);

  const publishHandle = () => {
    console.log('u clicked publish button');
    setIsPublishClicked(true);
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
                <div className="address">0x22b6Dd4D6d818e2Ebce3D2E009A249F8FbF4e965</div>
              </div>
            </div>
            <div className="options-section">
              <button className="publish-button" onClick={publishHandle}>Publish</button>
              <button className="products-button">Products</button>
              <button className="inventory-button">Inventory</button>
            </div>
          </SideBar>
          <MainSection>
            <div className="welcome-div">
              <p>Hi there, Welcome to agora</p>
            </div>
            <Publish />
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
    flex:1;
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
    margin-top: 30px;
    flex: 2.2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    .publish-button,
    .products-button,
    .inventory-button {
      cursor: pointer;
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
