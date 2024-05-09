import React from 'react'
import { AppContext} from './App_Context'

const App_State = (props) => {
  return (
    <AppContext.Provider value={{
        
    }}>
        {props.children}
    </AppContext.Provider>
  )
}

export default App_State