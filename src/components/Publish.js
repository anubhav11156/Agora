/* eslint-disable no-unused-vars */
import React, { useState, CSSProperties } from 'react'
import styled from 'styled-components'
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js';
import { ToastContainer, toast } from 'react-toastify';
import BarLoader from "react-spinners/BarLoader";
import { useMoralis } from 'react-moralis';
// import { contractAddress, contractAbi } from '../config'
import { contractAddress } from "../address.js";
import { contractAbi } from "../config";
import web3modal from "web3modal";
import { ethers } from "ethers";

function Publish() {

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const [isLoadingBarOfCoverActive, setIsLoadingBarOfCoverActive] = useState(false);
  const [isLoadingBarOfContentActive, setIsLoadingBarOfContentActive] = useState(false);

  const [formInput, setFormInput] = useState({
    name:"",
    price:"",
    category:"",
    supply:"",
    coverImageURI:"",
    contentURI:""
  });

  async function upload() {
  }

  console.log(formInput);

  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const [isMusicActive, setIsMusicActive] = useState(false);
  const [isEbooksActive, setIsEbooksActive] = useState(false);
  const [isPodcastActive, setIsPodcastActive] = useState(false);
  const [isEducationtActive, setIsEducationActive] = useState(false);
  const [isFilmsActive, setIsFilmsActive] = useState(false);
  const [isDrawingActive, setIsDrawingActive] = useState(false);
  const [isArticlesActive, setIsArticlesActive] = useState(false);

  const animationClickHandle = () => {
    setIsMusicActive(false);
    setIsEbooksActive(false);
    setIsPodcastActive(false);
    setIsEducationActive(false);
    setIsFilmsActive(false);
    setIsDrawingActive(false);
    setIsArticlesActive(false);
    setIsAnimationActive(true);
    setFormInput({
      ...formInput,
      category: 'animation'
    })
  }

  const musicClickHandle = () => {
    setIsAnimationActive(false);
    setIsEbooksActive(false);
    setIsPodcastActive(false);
    setIsEducationActive(false);
    setIsFilmsActive(false);
    setIsDrawingActive(false);
    setIsArticlesActive(false);
    setIsMusicActive(true);
    setFormInput({
      ...formInput,
      category: 'music'
    })
  }

  const ebooksClickHandle = () => {
    setIsAnimationActive(false);
    setIsMusicActive(false);
    setIsPodcastActive(false);
    setIsEducationActive(false);
    setIsFilmsActive(false);
    setIsDrawingActive(false);
    setIsArticlesActive(false);
    setIsEbooksActive(true);
    setFormInput({
      ...formInput,
      category: 'ebooks'
    })
  }

  const podcastClickHandle = () => {
    setIsAnimationActive(false);
    setIsMusicActive(false);
    setIsEbooksActive(false);
    setIsEducationActive(false);
    setIsFilmsActive(false);
    setIsDrawingActive(false);
    setIsArticlesActive(false);
    setIsPodcastActive(true);
    setFormInput({
      ...formInput,
      category: 'podcast'
    })
  }

  const educationClickHandle = () => {
    setIsAnimationActive(false);
    setIsMusicActive(false);
    setIsEbooksActive(false);
    setIsPodcastActive(false);
    setIsFilmsActive(false);
    setIsDrawingActive(false);
    setIsArticlesActive(false);
    setIsEducationActive(true);
    setFormInput({
      ...formInput,
      category: 'education'
    })
  }

  const filmsClickHandle = () => {
    setIsAnimationActive(false);
    setIsMusicActive(false);
    setIsEbooksActive(false);
    setIsPodcastActive(false);
    setIsEducationActive(false);
    setIsDrawingActive(false);
    setIsArticlesActive(false);
    setIsFilmsActive(true);
    setFormInput({
      ...formInput,
      category: 'films'
    })
  }

  const drawingClickHandle = () => {
    setIsAnimationActive(false);
    setIsMusicActive(false);
    setIsEbooksActive(false);
    setIsPodcastActive(false);
    setIsEducationActive(false);
    setIsFilmsActive(false);
    setIsArticlesActive(false);
    setIsDrawingActive(true);
    setFormInput({
      ...formInput,
      category: 'art'
    })
  }

  const articlesClickHandle = () => {
    setIsAnimationActive(false);
    setIsMusicActive(false);
    setIsEbooksActive(false);
    setIsPodcastActive(false);
    setIsEducationActive(false);
    setIsFilmsActive(false);
    setIsDrawingActive(false);
    setIsArticlesActive(true);
    setFormInput({
      ...formInput,
      category: 'aritcles'
    })
  }


  /* --------code for uploading data to filecoin-------- */

  function getAccessToken () {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGQ4NzhFNjQ1NkUwYzUyYzE2RDI5ODI0MWUzNzA1MWY0NDgyM2Q1MTUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjM2MTU3ODEyMTksIm5hbWUiOiJGb3IgbXkgcHJvamVjdCJ9.4p3tWCPEz4FA9kO9M6-JvrNVyQorsVWXCvJ89ByoWx4'
  }

  function makeStorageClient () {
    return new Web3Storage({ token: getAccessToken() })
  }

  const coverHandle = async () => {
    const fileInput = document.getElementById('cover');
    const filePath = fileInput.files[0].name;
    setIsLoadingBarOfCoverActive(true);
    const coverCID = await uploadToIPFS(fileInput.files);

    setFormInput({
      ...formInput,
      coverImageURI: `https://ipfs.io/ipfs/${coverCID}/${filePath}`
    })
  }

  const contentHandle = async () => {
    const fileInput = document.getElementById('content');
    const filePath = fileInput.files[0].name;
    setIsLoadingBarOfContentActive(true);
    const contentCID = await uploadToIPFS(fileInput.files);

    setFormInput({
      ...formInput,
      contentURI: `https://ipfs.io/ipfs/${contentCID}/${filePath}`
    })
  }

  const uploadToIPFS = async (files) => {
    const client = makeStorageClient()
    const cid = await client.put(files)
    setIsLoadingBarOfCoverActive(false);
    setIsLoadingBarOfContentActive(false);
    toast.success("Uploaded to IPFS", {
      position: toast.POSITION.TOP_CENTER
    });
    return cid
  }

  /* ---------------------------------------------------- */


  /*--------Here write the code for minting the NFT--------*/

  const { Moralis } = useMoralis();

  const mintToken = async () => {
    // write the mint logic
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
  const price = ethers.utils.parseEther(formInput.price);
  const publish = await contract.createToken(formInput.contentURI, formInput.supply, price, formInput.category, {
      gasLimit: 1000000,
  });
  await publish.wait();
  }

  /*------------------------------------------------------*/
    return (
        <Container>
          <div className="heading">
            <div className="icon-div">
              <img src="/images/publish-logo.png" />
            </div>
            <div className="text-div">
              <p className="title">Publish & Mint</p>
              <p className="description">Make some selections, fill in some boxes, and make your NFT live in minutes.</p>
            </div>
          </div>
          <PublishForm>
            <div className="name-div">
              <p>Name</p>
              <input name="name" onChange={
                  (prop) => setFormInput({
                    ...formInput,
                    name: prop.target.value
                  })
                } placeholder="Name of the product" required/>
            </div>
            <div className="type-div">
              <p>Type</p>
              <div className="category-container">
                <div>
                  <div className="typeCard"
                    onClick={animationClickHandle}
                    style={{
                      backgroundColor: isAnimationActive ? 'rgba(35, 160, 148, 1)' : '',
                      boxShadow: isAnimationActive ? '2px 2px 0px black' : ''
                    }}
                    >
                    <div className="icon-div">
                      <img src="/images/animation-logo.png"/>
                    </div>
                    <div className="text-div">
                      <p>Animation</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="typeCard"
                    onClick={musicClickHandle}
                    style={{
                      backgroundColor: isMusicActive ? 'rgba(35, 160, 148, 1)' : '',
                      boxShadow: isMusicActive ? '2px 2px 0px black' : ''
                    }}
                    >
                    <div className="icon-div">
                      <img src="/images/music-logo.png"/>
                    </div>
                    <div className="text-div">
                      <p>Music</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="typeCard"
                    onClick={ebooksClickHandle}
                    style={{
                      backgroundColor: isEbooksActive ? 'rgba(35, 160, 148, 1)' : '',
                      boxShadow: isEbooksActive ? '2px 2px 0px black' : ''
                    }}
                    >
                    <div className="icon-div">
                      <img src="/images/ebook-logo.png"/>
                    </div>
                    <div className="text-div">
                      <p>Ebooks</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="typeCard"
                    onClick={podcastClickHandle}
                    style={{
                      backgroundColor: isPodcastActive ? 'rgba(35, 160, 148, 1)' : '',
                      boxShadow: isPodcastActive ? '2px 2px 0px black' : ''
                    }}
                    >
                    <div className="icon-div">
                      <img src="/images/podcast-logo.png"/>
                    </div>
                    <div className="text-div">
                      <p>Podcast</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="typeCard"
                    onClick={educationClickHandle}
                    style={{
                      backgroundColor: isEducationtActive ? 'rgba(35, 160, 148, 1)' : '',
                      boxShadow: isEducationtActive ? '2px 2px 0px black' : ''
                    }}
                    >
                    <div className="icon-div">
                      <img src="/images/education-logo.png"/>
                    </div>
                    <div className="text-div">
                      <p>Education</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="typeCard"
                    onClick={filmsClickHandle}
                    style={{
                      backgroundColor: isFilmsActive ? 'rgba(35, 160, 148, 1)' : '',
                      boxShadow: isFilmsActive ? '2px 2px 0px black' : ''
                    }}
                    >
                    <div className="icon-div">
                      <img src="/images/films-logo.png"/>
                    </div>
                    <div className="text-div">
                      <p>Films</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="typeCard"
                    onClick={drawingClickHandle}
                    style={{
                      backgroundColor: isDrawingActive ? 'rgba(35, 160, 148, 1)' : '',
                      boxShadow: isDrawingActive ? '2px 2px 0px black' : ''
                    }}
                    >
                    <div className="icon-div">
                      <img src="/images/art-logo.png"/>
                    </div>
                    <div className="text-div">
                      <p>Drawing</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="typeCard"
                    onClick={articlesClickHandle}
                    style={{
                      backgroundColor: isArticlesActive ? 'rgba(35, 160, 148, 1)' : '',
                      boxShadow: isArticlesActive ? '2px 2px 0px black' : ''
                    }}
                    >
                    <div className="icon-div">
                      <img src="/images/articles-logo.png"/>
                    </div>
                    <div className="text-div">
                      <p>Articles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="price-copy-div">
              <div className="price-div">
                <p>Price</p>
                <input name="price" onChange={
                    (prop) => setFormInput({
                      ...formInput,
                      price: prop.target.value
                    })
                  } placeholder="2 MATIC" required/>
              </div>
              <div className="copies-div">
                <p>Copies</p>
                <input name="copies" onChange={
                    (prop) => setFormInput({
                      ...formInput,
                      supply: prop.target.value
                    })
                  } placeholder="1" required/>
              </div>
            </div>
            <Upload>
              <div className="cover-div">
                <p>Cover Image</p>
                <div className="dotted-div">
                  <div className="top">
                    <input className="uploadCover" type="file" id="cover" onChange={coverHandle}/>
                  </div>
                  <div className="bottom">
                    {isLoadingBarOfCoverActive &&
                      <BarLoader color="#000000" />
                    }
                  </div>
                </div>
              </div>
              <div className="content-div">
                <p>Content</p>
                <div className="dotted-div">
                  <div className="top">
                    <input className="uploadContent" type="file" id="content" onChange={contentHandle}/>
                  </div>
                  <div className="bottom">
                    {isLoadingBarOfContentActive &&
                      <BarLoader color="#000000" />
                    }
                  </div>
                </div>
              </div>
            </Upload>
            <MintButton onClick={mintToken}>
              Mint Token
            </MintButton>
          </PublishForm>
        </Container>

    )
}

export default Publish

const Container=styled.div`
  margin-top: 40px;
  padding-left: 60px;
  height: 100vh;

  .heading {
    width: 1000px;
    height: 80px;
    margin-bottom: 25px;
    border: 1px solid black;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(35, 160, 148, 1);

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

const PublishForm=styled.div`
  width: 1000px;
  height: 830px;
  border: 1px solid black;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .name-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 30px;
    padding-left: 30px;
    width: 100%;
    height: 120px;

    p {
      font-family: Mabry-Regular;
      font-size: 18px;
    }
    input {
      width: 910px;
      height: 25px;
      border: 1px solid black;
      border-radius: 4px;
      font-family: Mabry-Regular;
      font-size: 16px;
      padding: 10px 16px;
    }
  }

  .type-div {
    height: 235px;
    padding-left: 30px;
    padding-right: 30px;

    p {
      font-family: Mabry-Regular;
      font-size: 18px;
      margin-bottom: 6px;
    }

    .category-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      row-gap: 10px;
      column-gap: 10px;

      div {
        height: 90px;
        display: flex;
        justify-content: center;

        .typeCard {
          margin-top: 15px;
          width: 190px;
          height: 60px;
          border-radius: 4px;
          display: flex;
          border: 1px solid black;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0px 0px 0px black;

          &:hover{
            background-color: rgba(35, 160, 148, 1);
            box-shadow: 2px 2px 0px black;
          }

          .icon-div {
            width: 60px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              width: 40px;
            }
          }

          .text-div {
            margin-top: -8px;
            flex:1;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            p {
              margin-right: 10px;
              font-family: Mabry-medium;
              font-size: 20px;
            }

          }

        }

      }

    }
  }

  .price-copy-div {
    padding-right: 30px;
    padding-left: 30px;
    height: 110px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .price-div {
      display: flex;
      flex-direction: column;
      padding-right: 30px;
      p {
        font-family: Mabry-Regular;
        font-size: 18px;
      }
      input {
        width: 370px;
        height: 25px;
        border: 1px solid black;
        border-radius: 4px;
        font-family: Mabry-Regular;
        font-size: 16px;
        padding: 10px 45px;
        background: url('/images/polygon-black.png') no-repeat left;
        background-size: 25px;
        background-color: white;
        background-position: 10px;
      }
    }

    .copies-div {
      display: flex;
      flex-direction: column;
      padding-right: 10px;
      p {
        font-family: Mabry-Regular;
        font-size: 17px;
      }
      input {
        width: 415px;
        height: 25px;
        border: 1px solid black;
        border-radius: 4px;
        font-family: Mabry-Regular;
        font-size: 16px;
        padding: 10px 16px;
    }
  }

`

const Upload=styled.div`
  padding-right: 30px;
  padding-left: 30px;
  height: 280px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;

  .cover-div,
  .content-div {
    display: flex;
    flex-direction: column;

    p {
      font-family: Mabry-Regular;
      font-size: 18px;
    }

    .dotted-div {
      width: 100%;
      height: 200px;
      border: 1px dashed black;
      border-radius: 4px;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

        .top {
          flex:1.5;
          display: flex;
          align-items: end;
        }

        .bottom {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;

        }
        .uploadCover,
        .uploadContent {
          width: 240px;
          height: 35px;
          border-radius: 5px;
          font-family: Mabry-Regular;
          font-size: 15px;
          border: 1px solid black;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }

        .uploadCover::-webkit-file-upload-button,
        .uploadContent::-webkit-file-upload-button {
          width: 100px;
          height: 35px;
          border: 1px solid black;
          border-radius: 3px;
          cursor: pointer;
          margin-right: 10px;
          font-family: Mabry-Regular;
          background-color: black;
          color: white;
          font-size: 15px;


          &:hover {
            opacity: 0.9;
          }

          &:active {
            opacity: 0.85;
          }
        }

    }
  }

`

const MintButton=styled.button`
  margin-top: 5px;
  margin-right: 30px;
  margin-left: 30px;
  height:  50px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  font-family: Mabry-Regular;
  color: white;
  background-color: black;
  font-size: 18px;
  transition: all 0.15s;

  &:hover {
    background-color:rgba(35, 160, 148, 1);
    color: black;
  }

  &:active {
    opacity: 0.85;
  }
`
