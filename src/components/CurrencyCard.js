import React from 'react'
import styled from 'styled-components'
import Input from './Form'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import SyncAltIcon from '@material-ui/icons/SyncAlt'
import { useCurrencyContext } from '../context/currency_context'

import { GreenRadio } from '../utils/helpers'

const CurrencyCard = () => {
  const {
    onChangeDolar,
    onChangeFee,
    setIsCash,
    setIsCard,
    handleSubmit,
    isCash,
    dolar,
    fee,
  } = useCurrencyContext()

  return (
    <Wrapper>
      <div className='form-container'>
        <div>
          <h2>Dólar</h2>
          <Input money value={dolar} onChange={onChangeDolar} />
        </div>
        <div>
          <h2>Taxa do Estado</h2>
          <Input value={fee} onChange={onChangeFee} />
        </div>
      </div>
      <div>
        <h2>Tipo de Compra</h2>
        <FormControl component='fieldset'>
          <RadioGroup row aria-label='MoneyOrCard' name='MoneyOrCard'>
            <FormControlLabel
              checked={isCash}
              control={<GreenRadio />}
              label={<p className='radio-font'>Dinheiro</p>}
              onChange={setIsCash}
            />
            <FormControlLabel
              checked={!isCash}
              control={<GreenRadio />}
              label={<p className='radio-font'>Cartão</p>}
              onChange={setIsCard}
            />
          </RadioGroup>
        </FormControl>
      </div>
      <button
        className={`${!dolar || !fee ? 'btn btn-disable' : 'btn '}`}
        type='submit'
        onClick={handleSubmit}
      >
        <SyncAltIcon fontSize={'small'} /> <span />
        Converter
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  left: 64px;
  top: 250px;

  .form-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 32px;
  }

  .radio-font {
    padding-top: 10px;
    font-size: 12px;
    line-height: 24px;
  }

  button {
    margin-top: 25px;

    span {
      padding: 7px;
    }
  }

  .btn-disable {
    cursor: default;
  }
  .btn-disable:hover {
    background: var(--clr-mediumgray2);
  }

  @media screen and (max-width: 600px) {
    top: 300px;
    left: 20px;
    top: 240px;
  }
`

export default CurrencyCard
