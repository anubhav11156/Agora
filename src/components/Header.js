/* eslint-disable eqeqeq */
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useMoralis, useMoralisWeb3Api } from 'react-moralis'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/micah';
import { useLocation, useNavigate} from 'react-router-dom'

function Header() {

  // this get the current path
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // for login and logout
  const [accountAddress, setAccountAddress] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [loginText, setLoginText] = useState("Login");
  const [flag, setFlag] = useState(0); // this is used so that login occurs only once.

  // useEffect(() => {
  //   setAccountAddress(JSON.parse(window.sessionStorage.getItem('accountAddress')));
  // }, []);
  //
  // useEffect(() => {
  //   window.sessionStorage.setItem('accountAddress', accountAddress);
  // },[accountAddress]);

  const {
    authenticate,
    isAuthenticated,
    logout,
    Moralis
  } = useMoralis();

  const authenticateFunction = async () => {
    await authenticate({
      provider: "web3Auth",
      clientId: "BEKdZ7Wk_JPGM_MbJcYrFk0HMqOzQ0W_-40hzCXJv3H2KINDeMfpW--J-BOTYSBEbQcVr_oaqpY-yNlk-9On88c",
      chainId: "0x13881",
      signingMessage:"agora authentication"
    })
      .then(function (user) {
        // console.log(user.get("ethAddress"));
        setAccountAddress(user.get("ethAddress"));
        // console.log(accountAddress);
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
      if(pathname=="/dashboard"){
        logout();
        setLoginText("Login");
        setFlag(0);
        toast.success("Logged Out", {
        position: toast.POSITION.TOP_CENTER
        });
        navigate('/');
      }else{
        logout();
        setLoginText("Login");
        setFlag(0);
        toast.success("Logged Out", {
        position: toast.POSITION.TOP_CENTER
        });
      }

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

  /*--------------getAccountBalance--------------*/
  const Web3Api = useMoralisWeb3Api();
  const fetchNativeBalance = async () => {
    const options = {
      chain: "mumbai",
      address: `${accountAddress}`
    };
    const Balance = await Web3Api.account.getNativeBalance(options); // this returns an object
    let balance = Number(Moralis.Units.FromWei(`${Balance.balance}`,18)).toFixed(2);
    // console.log('balance in MATIC ',balance);
    setAccountBalance(balance);
  };
  fetchNativeBalance();
  /*---------------------------------------------*/

  const avatar = createAvatar( style, {
    dataUri: true,
    seed: `${accountAddress}`
  });

  const stateToPass = {
    accountAddress: accountAddress
  }

  // this is for when use clikc on dashboard but is not logged in
  const dashboardHandle = () => {
    toast.info("Login to proceed", {
      position: toast.POSITION.TOP_CENTER
    });
  }
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

                { isAuthenticated ? <Link to="/dashboard" state={stateToPass}>
                  <p>
                    Dashboard
                    <div className="bar"></div>
                  </p>
                  </Link> :
                  <p onClick={dashboardHandle}>
                    Dashboard
                    <div className="bar"></div>
                  </p>
               }
              </div>
            </div>
          </Menu>
          { isAuthenticated &&
            <OnLoggedIn>
              <div className="balance">
                <div className="icon-div">
                  <img src="/images/polygon-color.png"/>
                </div>
                <p>{accountBalance}</p>
              </div>
              <div className="identity">
                <div className="profile-div">
                  <img src={avatar} alt="avatar"/>
                </div>
                <div className="address-div">
                  <p>{accountAddress}</p>
                </div>
              </div>
            </OnLoggedIn>
          }

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

const OnLoggedIn=styled.div`
  width: 370px;
  height: 100%;
  display: flex;
  align-items: center;

  .balance {
    width: 110px;
    height: 40px;
    display: flex;
    justify-content:start;
    align-items: center;
    border: 1px solid black;
    border-radius: 8px;
    margin-right: 20px;
    cursor: pointer;

    .icon-div {
      width: 50px;
      height: 100%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 25px;
      }

    }
    p {
      padding-top: 2px;
      font-family: Mabry-medium;
      font-size: 18px;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  .identity {
    width: 215px;
    height: 40px;
    display: flex;
    justify-content:start;
    align-items: center;
    border: 1px solid black;
    border-radius: 8px;
    cursor: pointer;

    .profile-div {
      margin-left: 9px;
      margin-right: 15px;
      width: 30px;
      height: 30px;
      background-color: rgba(255,100,234,255);
      border-radius: 25px;
      border: 1px solid black;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        margin-top: 5px;
        width: 90%;
      }
    }
    .address-div {
      p {
        background-color: orange;
        height: 17px;
        width: 125px;
        padding-left: 9px;
        padding-right: 8px;
        padding-top: 5px;
        border-radius: 20px;
        font-family: Mabry-Regular;

        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }


`
