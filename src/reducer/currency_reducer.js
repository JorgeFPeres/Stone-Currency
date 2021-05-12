import {
  transformRawNumber,
  formatPrice,
  transformNumber,
} from '../utils/helpers'

import {
  GET_CURRENCY_ERROR,
  GET_CURRENCY_SUCCESS,
  GET_DOLAR,
  GET_FEE,
  CASH_SELECTED,
  CARD_SELECTED,
  CALCULATE_EXCHANGE,
  CLEAR_STATES,
  SHOW_ALERT,
} from '../utils/actions'

const currency_reducer = (state, action) => {
  if (action.type === GET_CURRENCY_SUCCESS) {
    return { ...state, currencyValue: action.payload }
  }
  if (action.type === GET_CURRENCY_ERROR) {
    return { ...state, currencyError: true }
  }
  if (action.type === GET_DOLAR) {
    const rawNumber = Number(transformRawNumber(action.payload)) / 100
    const dolarNumber = Number(rawNumber.toFixed(2))
    const inputDolar = `$ ${rawNumber
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,')}`

    return { ...state, inputDolar, isformDolarEmpty: false, dolarNumber }
  }
  if (action.type === GET_FEE) {
    const rawNumber = Number(transformRawNumber(action.payload)) / 10
    const stateFee = `% ${rawNumber.toFixed(1)}`
    const stateFeeDolar = Number(rawNumber.toFixed(1))
    return { ...state, stateFee, isformFeeEmpty: false, stateFeeDolar }
  }
  if (action.type === CASH_SELECTED) {
    return { ...state, isCash: true }
  }
  if (action.type === CARD_SELECTED) {
    return { ...state, isCash: false }
  }
  if (action.type === CALCULATE_EXCHANGE) {
    const { isCash, dolarNumber, stateFeeDolar, currencyValue } = state
    if (!dolarNumber || !stateFeeDolar) {
      alert('Preencha o valor e a taxa e tente novamente!!!')
      return { ...state, showResults: false }
    }
    if (dolarNumber > 10000000 || stateFeeDolar > 100) {
      alert(
        'Ensira um valor menor!!! \nLimite dolar: 10.000.000 \nLimite taxa:100%'
      )
      return { ...state, showResults: false, dolarNumber: 0, stateFeeDolar: 0 }
    } else {
      const dolarWithTax = dolarNumber + dolarNumber * (stateFeeDolar / 100)
      const IOFValue = isCash ? 0.011 : 0.064
      const realNoTax = dolarWithTax * currencyValue
      const realWithTax = formatPrice(realNoTax * (1 + IOFValue))
      return {
        ...state,
        realWithTax,
        realNoTax,
        dolarWithTax,
        showResults: true,
      }
    }
  }
  if (action.type === SHOW_ALERT) {
    return { ...state }
  }

  if (action.type === CLEAR_STATES) {
    return {
      ...state,
      inputDolar: '',
      dolarNumber: 0,
      stateFee: '',
      stateFeeDolar: 0,
      isCash: true,
      showResults: false,
      realNoTax: 0,
      dolarWithTax: 0,
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default currency_reducer
