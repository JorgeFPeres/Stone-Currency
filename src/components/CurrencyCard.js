import React from 'react'
import styled from 'styled-components'
import Input from './InputForm'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import SyncAltIcon from '@material-ui/icons/SyncAlt'
import { useCurrencyContext } from '../context/currency_context'

import { GreenRadio } from '../utils/helpers'

const CurrencyCard = () => {
  const {
    getDolar,
    getFee,
    setIsCash,
    setIsCard,
    handleSubmit,
    isCash,
    inputDolar,
    stateFee,
    currencyError,
  } = useCurrencyContext()

  if (currencyError) {
    return (
      <Wrapper>
        <h1>Desculpe 😕</h1>
        <h2>Estamos com problemas em nossos servidores</h2>
        <p>Tente novamente em alguns instantes.</p>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <div className='form-container'>
        <div>
          <h2>Dólar</h2>
          <Input money value={inputDolar} onChange={getDolar} />
        </div>
        <div>
          <h2>Taxa do Estado</h2>
          <Input value={stateFee} onChange={getFee} />
        </div>
      </div>
      <div>
        <h2>Tipo de Compra</h2>
        <FormControl component='fieldset'>
          <RadioGroup row>
            <FormControlLabel
              checked={isCash}
              control={<GreenRadio />}
              label={<p className='label-radio'>Dinheiro</p>}
              onChange={setIsCash}
            />
            <FormControlLabel
              checked={!isCash}
              control={<GreenRadio />}
              label={<p className='label-radio'>Cartão</p>}
              onChange={setIsCard}
            />
          </RadioGroup>
        </FormControl>
      </div>
      <button
        className={`${!inputDolar || !stateFee ? 'btn btn-disable' : 'btn '}`}
        type='submit'
        onClick={handleSubmit}
      >
        <SyncAltIcon fontSize={'small'} /> <span />
        Converter
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  position: absolute;
  left: 64px;
  top: 250px;

  .form-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 32px;
  }

  .label-radio {
    padding-top: 2px;
    font-size: 12px;
  }

  .btn-disable {
    cursor: default;
    background: var(--clr-mediumgray2);
  }

  .btn {
    margin-top: 25px;
    span {
      padding: 7px;
    }
  }

  @media screen and (max-width: 600px) {
    left: 20px;
    top: 220px;
    .form-container {
      flex-direction: column;
      div {
        margin-top: 10px;
      }
    }
  }
  h1 {
    font-size: 44px;
    color: var(--clr-green);
    :nextsi ;
  }
  h1 ~ h2 {
    margin-top: 20px;
  }
  p {
    margin-top: 5px;
    color: var(--clr-mediumgray);
  }
`

export default CurrencyCard
