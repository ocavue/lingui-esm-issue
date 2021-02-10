import React, { useState } from 'react'
import './App.css'

import { i18n } from "@lingui/core"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      hello
      i18n: {`${i18n}`}
    </div>
  )
}

export default App
