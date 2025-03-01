import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { Button } from "./components/ui/button"
import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home/Home"
import { AuthCallbackPage } from "./pages/AuthCallback/AuthCallback"

function App() {
  return (
    <>
      <Routes>
      <Route path="/"element=<HomePage/>/>
      <Route path="auth-callback" element=<AuthCallbackPage/>/>
      </Routes>
    </>
  )
}

export default App
