import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { Button } from "./components/ui/button"
import { Route, Routes } from "react-router-dom"
import { AuthCallbackPage } from "./pages/AuthCallback/AuthCallback"
import HomePage from "./pages/Home/Home"
import MainLayout from "./layout/MainLayout"
import ChatPage from "./pages/ChatPage/ChatPage"
function App() {
  return (
    <>
      <Routes>
      <Route path="/"element=<HomePage/>/>
      <Route path="/auth-callback" element=<AuthCallbackPage/>/>
      <Route element={<MainLayout />}>
					<Route path='/' element={<HomePage />} />
					<Route path='/chat' element={<ChatPage />} />
				</Route>
      </Routes>
    </>
  )
}

export default App
