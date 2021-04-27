import React, { useEffect, useState } from 'react'
import CurrencyCard from '../components/CurrencyCard'
import Header from '../components/Header'
import ResultCard from '../components/ResultCard'
import Elipses from '../components/Elipses'
import { api } from '../services/api'

function Home() {
  const [currentDolar, setCurrentDolar] = useState('')
  console.log(currentDolar)

  async function fetchCurrency() {
    try {
      const { data } = await api.get()
      const currentValue = Number(data.USDBRL.bid)
      setCurrentDolar(currentValue)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchCurrency()
  }, [])

  return (
    <>
      <Header />
      <CurrencyCard />
      <Elipses />
    </>
  )
}

export default Home
