import { transformRawNumber } from '../utils/helpers'
import showAlert from '../utils/Alert'
import {
  GET_CURRENCY_ERROR,
  GET_CURRENCY_SUCCESS,
  GET_DOLAR,
  GET_FEE,
  CASH_SELECTED,
  CARD_SELECTED,
  CALCULATE_EXCHANGE,
  CLEAR_STATES,
  ALERT_EMPTY_FORM,
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
      return { ...state, showResults: false, model_error: true }
    }
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
  if (action.type === CLEAR_STATES) {
    return {
      ...state,
      dolar: 0,
      fee: 0,
      isCash: true,
      showResults: false,
    }
  }

  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default currency_reducer
