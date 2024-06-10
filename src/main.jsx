import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FirebaseProvider } from './Context/Firebase.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </React.StrictMode>,
)