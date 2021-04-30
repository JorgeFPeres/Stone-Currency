import React from 'react'
import styled from 'styled-components'

const Elipses = () => {
  return (
    <Wrapper>
      <div className='elipse-container'>
        <div className='elipse circle1'></div>
        <div className='elipse circle2'></div>
        <div className='elipse circle3'></div>
        <div className='elipse circle4'></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 377px;
  left: calc(100% - 418px);

  .elipse-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .elipse {
    position: absolute;
    border-radius: 50%;
    box-sizing: border-box;
  }

  .circle1 {
    width: 36px;
    height: 36px;
    background: #00ab63;
  }
  .circle2 {
    width: 104px;
    height: 104px;
    border: 4px solid #008b57;
    border-radius: 50%;
    opacity: 0.2;
  }
  .circle3 {
    width: 213px;
    height: 213px;
    opacity: 0.7;
    border: 4px solid #008b57;
  }
  .circle4 {
    width: 310px;
    height: 310px;
    opacity: 0.2;
    border: 4px solid #008b57;
  }

  @media screen and (max-width: 992px) {
    article {
      display: none;
    }
  }
`

export default Elipses
