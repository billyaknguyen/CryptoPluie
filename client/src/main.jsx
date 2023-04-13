import React from 'react'
import ReactDOM from 'react-dom/client'
import {Auth0Provider} from "@auth0/auth0-react"
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const domain = import.meta.env.VITE_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider 
    domain={domain}
    clientId={clientId}
    redirectUri = {window.location.origin}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Auth0Provider>
)
