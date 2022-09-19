import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import All from '../components/All'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";

function Home() {

  const allClickHandle = () => {
    scroll.scrollToTop({
      duration: 800,
      delay: 100,
      smooth: true
    });
  }

  const musicClickHandle = () => {
    scroller.scrollTo('music', {
      duration: 600,
      delay: 100,
      smooth: true,
    });
  }

  const animationClickHandle = () => {
    scroller.scrollTo('animation', {
      duration: 600,
      delay: 100,
      smooth: true
    });
  }

  const ebooksClickHandle = () => {
    scroller.scrollTo('ebooks', {
      duration: 600,
      delay: 100,
      smooth: true
    });
  }

  const artClickHandle = () => {
    scroller.scrollTo('art', {
      duration: 600,
      delay: 100,
      smooth: true
    });
  }

  const podcastClickHandle = () => {
    scroller.scrollTo('podcast', {
      duration: 600,
      delay: 100,
      smooth: true
    });
  }

  const articlesClickHandle = () => {
    scroller.scrollTo('articles', {
      duration: 600,
      delay: 100,
      smooth: true
    });
  }

  const filmsClickHandle = () => {
    scroller.scrollTo('films', {
      duration: 600,
      delay: 100,
      smooth: true
    });
  }

  const educationClickHandle = () => {
    scroller.scrollTo('education', {
      duration: 600,
      delay: 100,
      smooth: true
    });
  }

    return (
        <Container>
          <ButtonWrapper>
            <Buttons>
              <div className="all-div" id="all">
                <button onClick={allClickHandle}>All</button>
              </div>
              <Link className="music-div" id="music" >
                <button onClick={musicClickHandle}>Music</button>
              </Link>
              <Link className="animation-div" id="animationLink">
                <button onClick={animationClickHandle}>Animation</button>
              </Link>
              <Link className="ebooks-div" id="design">
                <button onClick={ebooksClickHandle}>Ebooks</button>
              </Link>
              <Link className="art-div" id="art">
                <button onClick={artClickHandle}>Art & Drawing</button>
              </Link>
              <Link className="podcast-div" id="podcast">
                <button onClick={podcastClickHandle}>Podcast</button>
              </Link>
              <Link className="articles-div" id="articles">
                <button onClick={articlesClickHandle}>Articles</button>
              </Link>
              <Link className="films-div" id="films">
                <button onClick={filmsClickHandle}>Films</button>
              </Link>
              <Link className="education-div" id="education">
                <button onClick={educationClickHandle}>Education</button>
              </Link>
            </Buttons>
          </ButtonWrapper>
          <All id="all-div"/>
        </Container>
    )
}

export default Home

const Container=styled.div`
  padding-top: 68px;
  background-color: rgba(255, 255, 255, 0.79);
  width: 100%;
  height:auto;
  overflow-x: hidden;
  background-color: rgba(244,245,240,255);
`
const ButtonWrapper=styled.div`
  position:fixed;
  margin-top: 20px;
  height: 65px;
  width: 100%;
  z-index: 5;
`
const Buttons=styled.div`
  background-color: yellow;
  margin-left: auto;
  margin-right: auto;
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
        box-shadow: 3px 3px 0px black;
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
        box-shadow: 3px 3px 0px black;
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
        box-shadow: 3px 3px 0px black;
      }
    }
  }

`
