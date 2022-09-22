import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
          <div className="agora">
            <div className="text-container">
              <p className="my-agora">agora</p>
              <p className="text">Agora is a decentralized platform to sell digital products as an ERC-1155 token.
                We built agora by taking inspiration from gumroad. Project is still under devlopment, this is just the first iteration.
              </p>
            </div>
          </div>
          <a href="https://github.com/anubhav11156/agora"className="source-code-div" target="_blank">
            <div>
              <img src="/images/github-logo.png"/>
            </div>
            <p>Source Code</p>
          </a>
          <div className="contributor-1">
            <div className="main-container">
              <div className="image-div">
                <div className="profile-pic-div">
                  <img src="/images/anubhav-profile.jpg" />
                </div>
              </div>
              <div className="name-div">
                <p>Anubhav Kumar</p>
                <p>anubhav11697@gmail.com</p>
                <p>3rd year college student</p>
              </div>
              <div className="social-handle-div">
                <div className="handles">
                  <a href="https://discordapp.com/users/769844243236913155" target="_blank">
                    <img src="/images/discord-logo.png" />
                  </a>
                </div>
                <div className="handles">
                  <a href="https://www.behance.net/thermal_ice" target="_blank">
                    <img src="/images/behance-logo.png" />
                  </a>
                </div>
                <div className="handles">
                  <a href="https://www.linkedin.com/in/anubhav-kumar-8749871b8/" target="_blank">
                    <img src="/images/linkedin-logo.png" />
                  </a>
                </div>
                <div className="handles">
                  <a href="https://github.com/anubhav11156" target="_blank">
                    <img src="/images/github-logo.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="contributor-2">
            <div className="main-container">
              <div className="image-div">
                <div className="profile-pic-div">
                  <img src="/images/profile-ansh.jpeg" />
                </div>
              </div>
              <div className="name-div">
                <p>Ansh Saxena</p>
                <p>anshspvt@gmail.com</p>
                <p>2nd year college student</p>
              </div>
              <div className="social-handle-div">
                <div className="handles">
                  <a href="https://discordapp.com/users/586437795900424227" target="_blank">
                    <img src="/images/discord-logo.png" />
                  </a>
                </div>
                <div className="handles">
                  <a href="https://twitter.com/anshstwt" target="_blank">
                    <img src="/images/twitter-logo.png" />
                  </a>
                </div>
                <div className="handles">
                  <a href="https://www.linkedin.com/in/anshss/" target="_blank">
                    <img src="/images/linkedin-logo.png" />
                  </a>
                </div>
                <div className="handles">
                  <a href="https://github.com/anshss" target="_blank">
                    <img src="/images/github-logo.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
    )
}

export default Footer

const Container=styled.div`
  margin-top: -60px;
  height: 410px;
  background-color: black;
  color: white;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .agora {
    padding-bottom: 20px;
    padding-left: 20px;
    flex:2.2;
    display: flex;
    justify-content: start;
    align-items: end;
    height: 100%;

    .text-container {
      height: 190px;
      width: 100%;
      display: flex;
      flex-direction: column;
      width: 600px;

      .my-agora {
        margin: 0;
        margin-top: -5px;
        font-family: Mabry-medium;
        font-size: 88px;
        color: rgb(231, 223, 223);
      }

      .text {
        margin: 0;
        margin-top: 20px;
        font-family: Mabry-Regular;
        font-size: 17px;
        height: 80px;
        color: rgba(172, 170, 171, 0.92);
        width: 95%;
      }


    }
  }

  .contributor-1,
  .contributor-2 {
    flex:1;
    height: 100%;
    display: flex;
    justify-content: end;

    .main-container {
      height: 100%;
      width: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .image-div {
        height: 180px;
        width: 100%;
        display: flex;
        justify-content: center;

        .profile-pic-div {
          margin-top: 55px;
          height: 110px;
          width: 110px;
          border-radius: 70px;
          background-color: red;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 4px solid rgba(35, 160, 148, 1);
          img {
            width: 110px;
          }

        }
      }

      .name-div {
        margin-top: 10px;
        height: 100px
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
        p {
          margin: 0;
          margin-top: 8px;
          display:block;
          font-family: Mabry-Regular;
          font-size: 16px;
          color: grey;
          letter-spacing: 1px;
        }
      }

      .social-handle-div {
        flex: 1;
        width: 100%;
        display: flex;
        justify-content: center;

        .handles {
          margin-top: 40px;
          margin-right: 20px;
          width: 30px;
          height: 30px;
          img {
            width: 100%;
          }
          transition: all 0.25s;
        }
        .handles:hover {
          scale: 1.15;
        }
        }
    }

  }

  .contributor-1 {

  }

  .contributor-2 {
    flex:1;
    height: 100%;
    display: flex;
    justify-content: start;
  }

  .source-code-div {
    text-decoration: none;
    color: white;
    width: 160px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: color 0.15s;

    &:hover  {
      color: rgba(255,100,234,255);
    }

    div {
      margin-left: -5px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 35px;

      img {
        width: 28px;
      }
    }

    p {
      font-family: Mabry-Regular;
      font-size: 16px;
      margin-left: 5px;
    }
  }
`
