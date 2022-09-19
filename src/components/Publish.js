import React, { useState } from 'react'
import styled from 'styled-components'

function Publish() {

  const [formInput, setFormInput] = useState({
    name:"",
    price:"",
    category:"",
    supply:"",
    coverImage: null,
    content: null
  });

  console.log(formInput);
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
                  <div className="typeCard">
                    <div className="icon-div">
                      <img src="/images/animation-logo.png"/>
                    </div>
                    <div className="text-div">
                      <p>Animation</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="typeCard">
                    <div className="icon-div">
                      <img src="/images/music-logo.png"/>
                    </div>
                    <div className="text-div">
                      <p>Music</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="typeCard">
                    <div className="icon-div">
                      <img src="/images/ebook-logo.png"/>
                    </div>
                    <div className="text-div">
                      <p>Ebooks</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="typeCard">
                    <div className="icon-div">
                      <img src="/images/podcast-logo.png"/>
                    </div>
                    <div className="text-div">
                      <p>Podcast</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="typeCard">
                    <div className="icon-div">
                      <img src="/images/education-logo.png"/>
                    </div>
                    <div className="text-div">
                      <p>Education</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="typeCard">
                    <div className="icon-div">
                      <img src="/images/films-logo.png"/>
                    </div>
                    <div className="text-div">
                      <p>Films</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="typeCard">
                    <div className="icon-div">
                      <img src="/images/art-logo.png"/>
                    </div>
                    <div className="text-div">
                      <p>Drawing</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="typeCard">
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
                  <button>
                    <div>
                      <img src="/images/upload-white.png" />
                    </div>
                    <p>Upload Image</p>
                    </button>
                </div>
              </div>
              <div className="content-div">
                <p>Content</p>
                <div className="dotted-div">
                  <button>
                    <div>
                      <img src="/images/upload-white.png" />
                    </div>
                    <p>Upload File</p>
                  </button>
                </div>
              </div>
            </Upload>
            <MintButton>
              Publish & Mint
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
      font-size: 17px;
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
            background-color: white;
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
        font-size: 17px;
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
      font-size: 17px;
    }

    .dotted-div {
      background-color: lightgreen;
      width: 100%;
      height: 200px;
      border: 1px dashed black;
      border-radius: 4px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        cursor: pointer;
        width: 190px;
        height: 45px;
        border: none;
        color: white;
        background-color: black;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.15s;

        &:hover {
          opacity: 0.9;
        }

        &:active {
          opacity: 0.8;
        }

        div {
          height: 100%;
          width: 30px;
          margin-right: 10px;

          img {
            margin-top: 5px;
            width: 32px;
          }
        }

        p {
          font-family: Mabry-Regular;
          font-size: 17px;
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
  font-size: 17px;
  transition: all 0.15s;

  &:hover {
    background-color:  rgba(255,100,234,255);
    color: black;
  }

  &:active {
    opacity: 0.85;
  }
`
