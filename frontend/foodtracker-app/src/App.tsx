import { Routes, Route } from "react-router-dom"
import { SignIn } from "./pages/SignIn/SignIn"
import { SignUp } from "./pages/SignUp/SignUp"

import './App.css'


const App = () => {

  return (
    <Routes>
      <Route index element={< SignIn />}/>
      <Route path="auth" element={< SignUp />}/>
    </Routes>
  )
}

export default App
