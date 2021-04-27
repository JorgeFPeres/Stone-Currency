import React from 'react'
import styled from 'styled-components'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import { green, grey } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'
import SyncAltIcon from '@material-ui/icons/SyncAlt'

const GreenRadio = withStyles({
  root: {
    color: grey[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color='default' {...props} />)

const CurrencyCard = () => {
  const [value, setValue] = React.useState('female')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Wrapper>
      <div className='form-container'>
        <div>
          <h2>Dólar</h2>
          <form action=''>
            <input
              type='text'
              className='forms'
              value=''
              placeholder='$ 1.00'
            />
          </form>
        </div>
        <div>
          <h2>Taxa do Estado</h2>
          <form action=''>
            <input type='text' className='forms' placeholder='0%' />
          </form>
        </div>
      </div>
      <div>
        <h2>Tipo de Compra</h2>
        <FormControl component='fieldset'>
          <RadioGroup
            row
            aria-label='gender'
            name='gender1'
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value='female'
              control={<GreenRadio />}
              label={<p className='radio-font'>Dinheiro</p>}
            />
            <FormControlLabel
              value='male'
              control={<GreenRadio />}
              label={<p className='radio-font'>Cartão</p>}
            />
          </RadioGroup>
        </FormControl>
      </div>
      <button className='btn'>
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

  .forms {
    padding: 15px;
    margin-right: 1.5rem;
    margin-top: 12px;
    width: 168px;
    height: 56px;
    border: 1px solid #d7e0eb;
    border-radius: 4px;
    filter: var(--shadow);
    ::placeholder {
      opacity: 0.5;
    }
  }

  .radio-font {
    padding-top: 1px;
    font-size: 12px;
    line-height: 24px;
  }

  button {
    margin-top: 25px;

    span {
      padding: 7px;
    }
  }

  }
`

export default CurrencyCard
