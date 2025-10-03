import { Routes, Route } from "react-router-dom"
import { SignIn } from "./pages/SignIn/SignIn"
import { SignUp } from "./pages/SignUp/SignUp"
import { Main } from "./pages/Main/Main"
import { AuthPagesLayout } from "./layout"


const App = () => {
  return (
    <Routes>
      <Route path="auth" element={< AuthPagesLayout />}>
        <Route index element={< SignIn />}/>
        <Route path="register" element={< SignUp />}/>
      </Route>
      <Route path="main" element={< Main />}/>
    </Routes>
  )
}

export default App
