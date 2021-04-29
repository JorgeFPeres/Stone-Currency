import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { CurrencyProvider } from './context/currency_context'

ReactDOM.render(
  <CurrencyProvider>
    <App />
  </CurrencyProvider>,
  document.getElementById('root')
)
