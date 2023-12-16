import React, {useState} from 'react'
import Rotas from './routes'
import {db} from './services/firebaseConnection';


const App = () => {
  return (
    <div>
        <Rotas/>
    </div>
  )
}

export default App