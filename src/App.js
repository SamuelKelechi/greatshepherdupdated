import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./Components/Header/HeaderComponent";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Signup from "./Components/StudentSign/Signup";
import Admission from "./Components/Admission/Admission";
import Contact from "./Components/Contact/Contact";
import StudentDash from "./Components/DashboardComp/StudentDash";
import AdminDash from "./Components/DashboardComp/AdminDash";
import { GlobalProvider } from "./Components/Global/GlobalContext";
import AdminSignUp from "./Components/DashboardComp/AdminSignUp";

function App() {
	return (
		<>
			<GlobalProvider>
				<Router>
					<HeaderComponent />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/signup' element={<Signup />} />
						<Route path='/admission' element={<Admission />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/studentDashboard' element={<StudentDash />} />
						<Route path='/adminSignup' element={<AdminSignUp />} />
						<Route path='/adminDashboard' element={<AdminDash />} />
					</Routes>
					<Footer />
				</Router>
			</GlobalProvider>
		</>
	);
}

export default App;
