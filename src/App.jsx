import React from 'react'
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Marito Baracus"}/>
    </>
  )
}

export default App