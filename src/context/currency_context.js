import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducer/currency_reducer'
import { api } from '../services/api'
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

const initialState = {
  isFormEmpty: true,
  currencyValue: 0,
  converted: 0,
  isCash: true,
  dolar: 0,
  fee: 0,
  showResults: false,
  model_error: false,
  alert: { show: false, msg: '' },
}

const CurrencyContext = React.createContext()

export const CurrencyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchCurrency = async () => {
    try {
      const { data } = await api.get()
      const currencyValue = parseFloat(data.USDBRL.bid)
      dispatch({ type: GET_CURRENCY_SUCCESS, payload: currencyValue })
    } catch (error) {
      dispatch({ type: GET_CURRENCY_ERROR })
    }
  }

  useEffect(() => {
    fetchCurrency()
  }, [])

  const onChangeDolar = (value) => {
    dispatch({ type: GET_DOLAR, payload: value })
  }

  const onChangeFee = (value) => {
    dispatch({ type: GET_FEE, payload: value })
  }

  const setIsCash = () => {
    dispatch({ type: CASH_SELECTED })
  }
  const setIsCard = () => {
    dispatch({ type: CARD_SELECTED })
  }

  const handleSubmit = () => {
    dispatch({ type: CALCULATE_EXCHANGE })
  }

  const clearState = () => {
    dispatch({ type: CLEAR_STATES })
  }

  return (
    <CurrencyContext.Provider
      value={{
        ...state,
        onChangeDolar,
        onChangeFee,
        setIsCash,
        setIsCard,
        handleSubmit,
        clearState,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}
// make sure use
export const useCurrencyContext = () => {
  return useContext(CurrencyContext)
}
