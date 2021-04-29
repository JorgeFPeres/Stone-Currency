import { transformRawNumber } from '../utils/helpers'
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
    return { ...state, currency_error: true }
  }
  if (action.type === GET_DOLAR) {
    const rawNumber = Number(transformRawNumber(action.payload)) / 100
    const dolar = Number(rawNumber.toFixed(2))
    return { ...state, dolar, isformDolarEmpty: false }
  }
  if (action.type === GET_FEE) {
    const rawNumber = Number(transformRawNumber(action.payload)) / 10
    const fee = Number(rawNumber.toFixed(1))
    return { ...state, fee, isformFeeEmpty: false }
  }
  if (action.type === CASH_SELECTED) {
    return { ...state, isCash: true }
  }
  if (action.type === CARD_SELECTED) {
    return { ...state, isCash: false }
  }
  if (action.type === CALCULATE_EXCHANGE) {
    const { isCash, dolar, fee, currencyValue } = state
    if (!dolar || !fee) {
      alert('Preencha o valor e a taxa e tente novamente!!!')
      return { ...state, showResults: false }
    }
    if (dolar > 10000000 || fee > 100) {
      alert(
        'Ensira um valor menor!!! \nLimite dolar: 10.000.000 \nLimite taxa:100%'
      )
      return { ...state, showResults: false, dolar: 0, fee: 0 }
    } else {
      if (isCash) {
        const feeValue = dolar * (fee / 100)
        const IOFValue = 0.011
        const realsemimposto = (dolar + feeValue) * currencyValue
        const converted = realsemimposto * (1 + IOFValue)
        return { ...state, converted, showResults: true }
      }
      if (!isCash) {
        const feeValue = dolar * (fee / 100)
        const IOFValue = 0.064
        const realsemimposto = (dolar + feeValue) * currencyValue
        const converted = realsemimposto * (1 + IOFValue)
        return { ...state, converted, showResults: true }
      }
    }
  }
  if (action.type === SHOW_ALERT) {
    return { ...state }
  }

  if (action.type === CLEAR_STATES) {
    return {
      ...state,
      dolar: 0,
      fee: 0,
      isCash: true,
      showResults: false,
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default currency_reducer
