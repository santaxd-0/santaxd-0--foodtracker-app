import { Routes, Route } from "react-router-dom"
import { SignIn } from "./pages/SignIn/SignIn"
import { SignUp } from "./pages/SignUp/SignUp"
import { AuthPagesLayout } from "./layout"


const App = () => {
  return (
    <Routes>
      <Route path="auth" element={< AuthPagesLayout />}>
        <Route index element={< SignIn />}/>
        <Route path="register" element={< SignUp />}/>
      </Route>
    </Routes>
  )
}

export default App
