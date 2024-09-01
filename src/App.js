import React from 'react';
import Home from './Components/Home';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import Back from './Components/Back';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='' element={<Outlet />}>
      <Route path="/" element={<Home />} />
      <Route path="/More Info" element={<Back />} />
    </Route>
  ))

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
