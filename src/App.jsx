import { useState } from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import LogIn from './pages/login/LogIn';
import Registration from './pages/resistration/Registration';



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<LogIn/>}/>
        <Route path='/registration' element={<Registration/>}/>
      </Route>
    )
  );
  

  return (
    <>
      <RouterProvider
      router={router}
      />
    </>
  )
}

export default App
