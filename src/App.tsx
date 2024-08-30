import Navbar from "./components/core/Navbar"
import Main from "./components/core/Main"
import Footer from "./components/core/Footer"

export default function App() {
	return (
		<div className="flex flex-col h-screen">
			<Navbar />
			<Main />
			<Footer />
		</div>
	)
}
