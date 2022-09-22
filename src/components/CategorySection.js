import React, { useRef } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionCard from '../components/SectionCard'


function CategorySection(props) {

  const data = props.data;
  const nft = props.items;
  const NFTs = nft.map( (token, i) => {
    return (
      <SectionCard
        tokenId={token.tokenId}
        cover={token.cover}
        name={token.name}
        price={token.price}
        remaining={token.remaining}
      />
    )
  })

  const sliderRef = useRef(null);
  console.log(sliderRef);
  const next = () => sliderRef.current.slickNext();
  const prev = () => sliderRef.current.slickPrev();

  // let SliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 850,
  //   arrows: false,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   autoplay: false,
  //   autoplaySpeed: 4000
  // }

  if (!nft) return null
    return (
        <Container>
          <Heading bgColor={data.bgColor}>
            <div className="icon-div">
              <img src={data.iconPath} />
            </div>
            <div className="text-div">
              <p className="title">{data.heading}</p>
              <p className="description">{data.overview}</p>
            </div>
          </Heading>
          <ProductSection>
            <div className="buttons-div">
              <div  className="prev-div">
                <button className="prev-button" onClick={prev}>
                  <img src="/images/left-arrow.png" />
                </button>
              </div>
              <div className="next-div">
                <button className="next-button" onClick={next}>
                  <img src="/images/left-arrow.png" />
                </button>
              </div>
            </div>

              <Slider ref={sliderRef}
                slidesToShow={NFTs.length}
                slidesToScroll={1}
                dots={true}
              >
              {NFTs}
              </Slider>

          </ProductSection>
        </Container>
    )
}

export default CategorySection

const Container=styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  margin-top: 165px;
`

const Heading=styled.div`
  width: 100%;
  height: 130px;
  margin-bottom: -5px;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${ props => props.bgColor};

  .icon-div {
    width: 80px;
    display: flex;
    justify-content: center;
    margin-left: 30px;

    img {
      width: 95%;
    }
  }

  .text-div {
    flex: 1;
    margin-left: 35px;

    .title {
      margin: 0;
      font-family: Mabry-medium;
      font-size: 40px;
    }

    .description {
      margin-top: 15px;
      margin-bottom: 0;
      font-family: Mabry-Regular;
      font-size: 20px;
    }
  }

`

const ProductSection=styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  width: 100%;

  .buttons-div {
    margin-bottom: 7px;
    height: 35px;
    display: flex;
    justify-content: end;
    align-items: center;


    .prev-div {
      height: 100%;
      width: 100px;
      display: flex;
      justify-content: end;
      align-items: center;

      .prev-button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 35px;
        width: 40px;
        border: 1px solid black;
        border-radius: 2px;
        cursor: pointer;
        transition:background-color 0.1s, opacity 0.1s;

        &:hover {
          background-color: rgba(35, 160, 148, 1);
        }

        &:active {
          opacity: 0.8;
        }

        img {
          width: 27px;
        }
      }
    }

    .next-div {
      height: 100%;
      width: 70px;
      display: flex;
      justify-content: end;
      align-items: center;

      .next-button {
        height: 35px;
        width: 40px;
        border: 1px solid black;
        border-radius: 2px;
        cursor: pointer;
        transition:background-color 0.1s, opacity 0.1s;

        &:hover {
          background-color: rgba(255,100,234,255);
        }

        &:active {
          opacity: 0.8;
        }

        img {
          width: 27px;
          transform: rotate(180deg);
        }
      }
    }


  }

  .slider-div {
    
  }
`
