/* eslint-disable eqeqeq */
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useMoralis } from 'react-moralis'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

function Header() {

  // for login and logout
  const [loginStatus, setLoginStatus] = useState(false);
  const [loginText, setLoginText] = useState("Login");
  const [flag, setFlag] = useState(0); // this is used so that login occurs only once.

  const {
    authenticate,
    isAuthenticated,
    logout
  } = useMoralis();

  const authenticateFunction = async () => {
    await authenticate({
      provider: "web3Auth",
      clientId: "BEKdZ7Wk_JPGM_MbJcYrFk0HMqOzQ0W_-40hzCXJv3H2KINDeMfpW--J-BOTYSBEbQcVr_oaqpY-yNlk-9On88c",
      chainId: "0x13881",
      signingMessage:"agora authentication"
    })
      .then(function (user) {
        console.log(user.get("ethAddress"));
      })
      .catch(function (error) {
        console.log("error is" ,error);
      });
  }

  const loginHandler = async () => {
    if(isAuthenticated == false){
      // login
      await authenticateFunction();
    }
    else if(isAuthenticated == true ){
      logout();
      setLoginText("Login");
      setFlag(0);
      toast.success("Logged Out", {
      position: toast.POSITION.TOP_CENTER
      });
    }
  };

  useEffect(() => {
    if(isAuthenticated && flag==0){
      setLoginText("Logout");
      toast.success("Logged In", {
        position: toast.POSITION.TOP_CENTER
      });
      setFlag(1);
    }
  });

    return (
        <Container>
          <div className="left">
            <div className="logo-div">
              <p>agora</p>
            </div>
          </div>
          <Menu>
            <div className="menu-wrapper">
              <div className="features-div">
                <p>
                  Features
                  <div className="bar"></div>
                </p>
              </div>
              <div className="dashboard-div">
                <Link to="/dashboard">
                  <p>
                    Dashboard
                    <div className="bar"></div>
                  </p>
                </Link>
              </div>
            </div>
          </Menu>
          <Login onClick={loginHandler}>
            {loginText}
          </Login>
          <ToastContainer
            autoClose={1000}
            hideProgressBar={true}
          />
        </Container>
    )

  }




export default Header

const Container=styled.div`
  position: fixed;
  z-index: 10;
  height: 68px;
  width: 100%;
  border-bottom: 2px solid black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left{
    margin-left: 20px;
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65px;

    p {
      padding-bottom: 2px;
      font-family: Mabry-bold;
      font-size: 50px;
      cursor: pointer;
    }
  }


`
const Menu=styled.div`
  flex: 1;
  display: flex;
  justify-content: end;

  .menu-wrapper {
    margin-right: 40px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    .features-div,
    .dashboard-div {
      flex: 1;
      font-family: Mabry-Light;
      font-size: 18px;
      display: flex;
      justify-content: center;

      a {
        color: black;
        text-decoration: none;
      }
      p {
        margin: 0;
        cursor: pointer;
        position: relative;
      }

      p .bar {
        margin-top: 2px;
        position: absolute;
        height: 1.3px;
        width: 100%;
        background-color: black;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }

      p:hover .bar {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }

`
const Login=styled.div`
  height: 68px;
  border-left: 2px solid black;
  display: flex;
  width: 170px;
  justify-content: center;
  align-items: center;
  font-family:  Mabry-Regular;
  font-size: 19px;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: rgba(255,100,234,255);
  }
`
