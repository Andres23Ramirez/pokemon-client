import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App/App'
import reportWebVitals from './reportWebVitals'
import { QueryClient, QueryClientProvider } from 'react-query'
import queryConfig from './reactQueryConfig'

const root = ReactDOM.createRoot(document.getElementById('root'))
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 50000,
      // query options
    },
  },
})

root.render(
  <QueryClientProvider config={queryConfig} client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
