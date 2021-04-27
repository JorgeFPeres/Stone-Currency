import React from 'react'
import styled from 'styled-components'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const ResultCard = () => {
  return (
    <Wrapper>
      <button className='btn'>
        <span>
          <ArrowBackIcon fontSize={'small'} />{' '}
        </span>
        Voltar
      </button>
      <div className='result-container'>
        <h2>O resultado do cálculo é</h2>
        <h1>R$ 240,56</h1>
      </div>
      <div>
        <p>Compra no dinheiro e taxa de 5.3%</p>
        <p>Cotação do dólar: $1,00 = R$ 5,20</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  left: 64px;
  top: 250px;

  button {
    padding: 16px 26px;
    color: var(--clr-darkgray2);
    background: var(--clr-white);
    border: 1px solid #d7e0eb;
    :hover {
      color: white;
      background: var(--clr-green);
      span {
        opacity: 1;
      }
    }

    span {
      margin-top: 2px;
      padding-right: 10px;
      opacity: 0.6;
    }
  }
  .result-container {
    padding: 32px 0;
    h2 {
      font-size: 20px;
    }
    h1 {
      font-size: 64px;
      color: var(--clr-green);
    }
  }
  p {
    margin-bottom: 20px;
    color: var(--clr-mediumgray);
  }
  @media screen and (max-width: 600px) {
     {
      top: 300px;
    }
  }
`

export default ResultCard
