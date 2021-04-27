import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const Header = () => {
  const currentDate = format(new Date(), " dd 'de' MMMM yyyy", { locale: ptBR })
  const currentHour = format(new Date(), 'HH:mm')

  return (
    <Wrapper>
      <div className='container-logo'>
        <img src={logo} alt='stone' className='logo' />
        <div className='container-currency'>
          <div className='underline'></div>
          <h2 className='currency'>Currency</h2>
        </div>
      </div>
      <div className='date-container'>
        <h2 className='date'>
          {currentDate} <span>|</span> {currentHour} UTC
        </h2>
        <p className='morning-star'>
          Dados de câmbio disponibilizados pela Morningstar.
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  position: absolute;
  width: 538px;
  left: 64px;
  top: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    margin: 0 15px;
  }

  .container-logo {
    height: 81px;
  }
  .logo {
    margin-top: 10px;
    width: 163px;
    height: 43.2px;
  }
  .container-currency {
    display: flex;
    justify-content: space-between;
  }
  .underline {
    margin-top: 4px;
    width: 83px;
    height: 4px;
    background: var(--clr-green);
    opacity: 0.32;
  }
  .currency {
    color: var(--clr-green);
  }

  .date-container {
    display: flex;
    flex-direction: column;

    .morning-star {
      color: var(--clr-mediumgray2);
    }
    .date {
      color: var(--clr-darkgray2);
      margin: 8px 0px;
    }
  }
  @media screen and (max-width: 600px) {
     {
      flex-direction: column;
      align-items: flex-start;
      height: 140px;
      width: 330px;
    }
  }
`

export default Header
