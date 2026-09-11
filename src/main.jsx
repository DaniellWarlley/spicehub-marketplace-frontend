import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import {router} from './app/providers/router/routerProvider.jsx'
import Auth from './features/auth/Auth'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Georgian";
    src: url("/fontes/Noto_Sans_Georgian/static/NotoSansGeorgian-Medium.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Inter";
    src: url("/fontes/Inter/static/Inter_18pt-Medium.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  *{
    margin: 0;
    padding: 0;
  }
  h1{
    font-family: "Poppins", sans-serif;
  }
  p,label {
    font-family: "Inter", sans-serif;
  }
`
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </StrictMode>
)
