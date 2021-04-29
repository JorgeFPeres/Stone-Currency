import React from 'react'
import CurrencyCard from '../components/CurrencyCard'
import Header from '../components/Header'
import ResultCard from '../components/ResultCard'
import Elipses from '../components/Elipses'
import { useCurrencyContext } from '../context/currency_context'

function Home() {
  const { showResults } = useCurrencyContext()

  return (
    <>
      <Header />
      {!showResults ? <CurrencyCard /> : <ResultCard />}
      <Elipses />
    </>
  )
}

export default Home
