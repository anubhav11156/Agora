import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'
function Products() {
    return (
        <Container>
          <div className="heading">
            <div className="icon-div">
              <img src="/images/product-logo.png" />
            </div>
            <div className="text-div">
              <p className="title">Products</p>
              <p className="description">All the items created by you.</p>
            </div>
          </div>
          <ProductList>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ProductList>
        </Container>
    )
}

export default Products

const Container = styled.div`
  margin-top: 40px;
  padding-left: 60px;
  height: auto;
  .heading {
    width: 1000px;
    height: 80px;
    margin-bottom: 25px;
    border: 1px solid black;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 201, 0, 1);

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

const ProductList=styled.div`
  width: 950px;
  min-height: 800px;
  border: 1px dashed black;
  border-radius: 8px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
`
