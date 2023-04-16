import React from 'react'
import ReactDOM from 'react-dom/client'
import {Auth0Provider} from "@auth0/auth0-react"
import { BrowserRouter } from 'react-router-dom'
import { UserPortfolioProvider} from './components/utils/UserPortfolioContext'
import App from './App'

const domain = import.meta.env.VITE_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <UserPortfolioProvider>
      <App />
      </UserPortfolioProvider>
    </Auth0Provider>
  </BrowserRouter>
)
