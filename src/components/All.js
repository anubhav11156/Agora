/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import {SectionData} from '../CategorySectionData'
import CategorySection from '../components/CategorySection'
import Footer from './Footer'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";

import { useMoralis } from 'react-moralis'
import { useState } from 'react'
// import { contractAddress, contractAbi } from '../config'
import { contractAddress } from "../address.js";
import { contractAbi } from "../config";
import axios from "axios";
import { useEffect } from 'react'


function All() {

  // -------------------- Fetching Nfts from Contract

  const [ nfts, setNfts ] = useState([]);
  // price name remaining cover category
  const [ musicNfts, setMusicNfts ] = useState([]);
  const [ animationNfts, setAnimationNfts ] = useState([]);
  const [ ebooksNfts, setEbooksNfts ] = useState([]);
  const [ artNfts, setArtNfts ] = useState([]);
  const [ podcastNfts, setPodcastNfts ] = useState([]);
  const [ articlesNfts, setArticleNfts ] = useState([]);
  const [ filmsNfts, setFilmsNfts ] = useState([]);
  const [ educationNfts, setEducationNfts ] = useState([]);

  const { Moralis, isAuthenticated } = useMoralis();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getNftData()
  }, [])

  useEffect(() => {
    getNftData()
  }, [loaded])

  async function getNftData() {
    await Moralis.enableWeb3();
    // this is for fetching the nft data form the smart contract as an array
    let options = {
      contractAddress: contractAddress,
      functionName: 'fetchStore',
      abi: contractAbi.abi,
      params: {},
    }

    const data = await Moralis.executeFunction(options);
    const nftsArr = await Promise.all(
      data.map(async (i) => {
          let options = {
            contractAddress: contractAddress,
            functionName: 'uri',
            abi: contractAbi.abi,
            params: {
              tokenId: i.tokenId.toString()
            },
          }
          const tokenUri = await Moralis.executeFunction(options);
          const meta = await axios.get(tokenUri);
          // console.log(meta.data.contentURI)
          let price = Moralis.Units.FromWei(i.price);
          let nft = {
              price,
              tokenId: i.tokenId.toNumber(),
              name: meta.data.name,
              remaining: i.supplyleft.toNumber(),
              cover: meta.data.coverImageURI,
              category: i.category
          };
          return nft;
      })
      );
      console.log('nft array is : ', nftsArr);
      setNfts(nftsArr);
      filterNFts();
    }
    
  function filterNFts() {
    nfts.map( (nft) => {
      if (nft.category === "Music") {
        setMusicNfts(oldArray => [...oldArray, nft]);
      }
      if (nft.category === "Animation") {
        setAnimationNfts(oldArray => [...oldArray, nft]);
      }
      if (nft.category === "Ebooks") {
        setEbooksNfts(oldArray => [...oldArray, nft]);
      }
      if (nft.category === "Art") {
        setArtNfts(oldArray => [...oldArray, nft]);
      }
      if (nft.category === "Podcast") {
        setPodcastNfts(oldArray => [...oldArray, nft]);
      }
      if (nft.category === "Articles") {
        setArticleNfts(oldArray => [...oldArray, nft]);
      }
      if (nft.category === "Films") {
        setFilmsNfts(oldArray => [...oldArray, nft]);
      }
      if (nft.category === "Education") {
        setEducationNfts(oldArray => [...oldArray, nft]);
      }
    })
    setLoaded(true);
  }

  // getNftData();
  // --------------------


  let settings = {
    dots: false,
    infinite: true,
    speed: 580,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  }

  // if (loaded == true && !nfts.length)
    return (
      <Container>
        <Banner>
          <Carousel {...settings}>
            <Slide1>
              <Top>
              </Top>
              <Bottom>
                <Description>
                  <div className="text">
                    <p>Discover, buy, and sell your digital product as <span><a href="https://ethereum.org/en/developers/docs/standards/tokens/erc-1155/" target="_blank">ERC-1155</a></span> token.</p>
                  </div>
                  <div className="image">
                    <img src="/images/test2.png" />
                  </div>
                </Description>
              </Bottom>
            </Slide1>
            <Slide2>
              <Top>
              </Top>
              <Bottom>
                <Description>
                  <div className="text">
                    <p>Discover, buy, and sell your digital product as <span><a href="https://ethereum.org/en/developers/docs/standards/tokens/erc-1155/" target="_blank">ERC-1155</a></span> token.</p>
                  </div>
                  <div className="image">
                    <img src="/images/test2.png" />
                  </div>
                </Description>
              </Bottom>
            </Slide2>
          </Carousel>
        </Banner>

        <Content>
            <Element name="music" className="music-section">
              <div className="insideContainer">
                <CategorySection
                  data={SectionData[0]}
                  items={musicNfts}
                />
              </div>
                {/* {console.log(nfts[0])} */}
              {/* <button onClick={getNftData}>getNftData</button> */}
              {/* <button onClick={filterNFts}>filterNFts</button>/ */}
            </Element>
            <Element name="animation" className="animation-section">
              <div className="insideContainer">
                <CategorySection
                  data={SectionData[1]}
                  items={animationNfts}
                />
              </div>
            </Element>
            <Element name="ebooks" className="ebooks-section">
              <div className="insideContainer">
                <CategorySection
                  data={SectionData[2]}
                  items={ebooksNfts}
                />
              </div>
            </Element>
            <Element name="art" className="art-section">
              <div className="insideContainer">
                <CategorySection
                  data={SectionData[3]}
                  items={artNfts}
                />
              </div>
            </Element>
            <Element name="podcast" className="podcast-section">
              <div className="insideContainer">
                <CategorySection
                  data={SectionData[4]}
                  items={podcastNfts}
                />
              </div>
            </Element>
            <Element name="articles" className="articles-section">
              <div className="insideContainer">
                <CategorySection
                  data={SectionData[5]}
                  items={articlesNfts}
                />
              </div>
            </Element>
            <Element name="films" className="films-section">
              <div className="insideContainer">
                <CategorySection
                  data={SectionData[6]}
                  items={filmsNfts}
                />
              </div>
            </Element>
            <Element name="education" className="education-section">
              <div className="insideContainer">
                <CategorySection
                  data={SectionData[7]}
                  items={educationNfts}
                />
              </div>
            </Element>
        </Content>

        <Footer />
      </Container>
    )

}

export default All

const Container=styled.div`
  z-index: 2;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const Banner=styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 605px;
  border-bottom: 1px solid black;
`
const Carousel=styled(Slider)`
  height: 605px;
  width: 100%;
`
const Slide1=styled.div`
  background-color: rgba(254, 212, 0, 255);
  height: 605px;
  display: flex;
`
const Slide2=styled.div`
  background-color: red;
  height: 605px;
  display: flex;
`
const Top=styled.div`
  height: 105px;
`

const Bottom=styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const Description=styled.div`
  width: 1140px;
  display: flex;

  .text {
    flex: 1.6;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-family: Mabry-medium;
      font-size: 60px;
      letter-spacing: 4px;
      line-height: 80px;
      color: rgba(10, 10, 10, 1);
    }

    a {
      color: black;
      text-decoration-thickness: 1px;
      text-underline-offset: 8px;
      text-decoration-color: black;
      transition: all 0.25s;

      &:hover {
        text-decoration-color: grey;

      }
    }

  }

  .image {
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
    }
  }

`
const Content=styled.div`
  height: 7700px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  .music-section,
  .animation-section,
  .ebooks-section,
  .design-section,
  .art-section,
  .podcast-section,
  .articles-section,
  .films-section,
  .education-section {
    flex:1;
    display:flex;
    justify-content: center;
    border-bottom: 1px solid black;
    padding-top: 10px;
    padding-bottom: 10px;

    .insideContainer {
      width: 1140px;
      display: flex;
      justify-content: center;
    }
  }

`
