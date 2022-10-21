import { createContext } from 'react'

const context = createContext({})

const PokemonsContext = ({ children, providedValues }) => {
  return (
     <context.Provider value={providedValues}>
       {children}
     </context.Provider>
  )
}

export { PokemonsContext }
