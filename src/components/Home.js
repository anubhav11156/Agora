import React from 'react'
import styled from 'styled-components'
import All from '../components/All'

function Home() {
    return (
        <Container>
          <Banner>
            <Buttons>
              <div className="all-div">
                <button>All</button>
              </div>
              <div className="music-div">
                <button>Music</button>
              </div>
              <div className="animation-div">
                <button>Animation</button>
              </div>
              <div className="ebooks-div">
                <button>Ebooks</button>
              </div>
              <div className="design-div">
                <button>Design</button>
              </div>
              <div className="art-div">
                <button>Art & Drawing</button>
              </div>
              <div className="podcast-div">
                <button>Podcast</button>
              </div>
              <div className="articles-div">
                <button>Articles</button>
              </div>
              <div className="films-div">
                <button>Films</button>
              </div>
              <div className="education-div">
                <button>Education</button>
              </div>
            </Buttons>
            <All />
          </Banner>
        </Container>
    )
}

export default Home

const Container=styled.div`
  padding-top: 68px;
  background-color: rgba(255, 255, 255, 0.79);
  width: 100%;
  height: 1200px;
  display: flex;
  justify-content: center;
`
const Banner=styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 605px;
  border-bottom: 1px solid black;
`


const Buttons=styled.div`
  position: absolute;
  top: 30px;
  z-index: 5;
  height: 57px;
  width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 17px;

  .all-div,
  .music-div,
  .video-div,
  .art-div,
  .animation-div,
  .ebooks-div,
  .podcast-div,
  .education-div,
  .articles-div,
  .films-div,
  .design-div {

    display: flex;
    justify-content: center;
    width: 220px;

    button {
      border: none;
      background: none;
      cursor: pointer;
      font-size: 15.5px;
      font-family: Mabry-Regular;
      padding: 9px 13px 9px 13px;
      transition: margin-bottom 0.1s, margin-right 0.1s;

      &:hover {
        border: 1px solid black;
        border-radius: 25px;
        background-color: white;
        box-shadow: 4px 4px 0px black;
        margin-bottom: 5px;
        margin-right: 5px;
      }
    }
  }

  .art-div {
    display: flex;
    justify-content: center;
    width: 300px;
    button {
      border: none;
      background: none;
      cursor: pointer;
      font-size: 15.5px;
      font-family: Mabry-Regular;
      padding: 9px 13px 9px 13px;


      &:hover {
        border: 1px solid black;
        border-radius: 25px;
        background-color: white;
        box-shadow: 4px 4px 0px black;
      }
    }
  }

  .all-div {
    margin-left: 5px;
    display: flex;
    width: 120px;

    button {
      border: none;
      background: none;
      cursor: pointer;
      font-size: 15.5px;
      font-family: Mabry-Regular;
      padding: 9px 13px 9px 13px;


      &:hover {
        border: 1px solid black;
        border-radius: 25px;
        background-color: white;
        box-shadow: 4px 4px 0px black;
      }

      &:focus {
        border: 1px solid black;
        border-radius: 25px;
        background-color: white;
      }

    }
  }

`
