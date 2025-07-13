import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SharedLayout from '../sharedlayout/SharedLayout'
import Home from '../pages/Home'

export default function MainLayout() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<SharedLayout/>}>
              <Route index element={<Home />}/>
          </Route>
      </Routes>
    </BrowserRouter>
    
  )
}
