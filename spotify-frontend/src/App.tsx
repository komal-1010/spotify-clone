import { Route, Routes } from "react-router-dom";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import MainLayout from "./layout/MainLayout";
import { Toaster } from "react-hot-toast";
import NotFoundPage from "./pages/404/NotFoundPage";
import HomePage from "./pages/Home/Home";
import { AuthCallbackPage } from "./pages/AuthCallback/AuthCallback";
import AlbumPage from "./pages/album/AlbumPage";
import ChatPage from "./pages/ChatPage/ChatPage";

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/sso-callback'
					element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"} />}
				/>
				<Route path='/auth-callback' element={<AuthCallbackPage />} />
				{/* <Route path='/admin' element={<AdminPage />} /> */}

				<Route element={<MainLayout />}>
					<Route path='/' element={<HomePage />} />
					<Route path='/chat' element={<ChatPage />} />
					<Route path='/albums/:albumId' element={<AlbumPage />} />
					{/* <Route path='*' element={<NotFoundPage />} /> */}
				</Route>
			</Routes>
			<Toaster />
		</>
	);
}

export default App;
