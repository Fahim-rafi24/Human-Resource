import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// react router
import { RouterProvider } from 'react-router-dom'
import router from './Route'
import UserContext from './Context/UserContext'







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext>
      <RouterProvider router={router} />
    </UserContext>
  </StrictMode>,
)
