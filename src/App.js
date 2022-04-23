import './App.css';
import Home from './Components/Home';
import Categories from './Components/Categories';
import Auth from './Components/Auth';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import { useState } from 'react';
import { auth } from "./firebase-config"
import { onAuthStateChanged} from "firebase/auth";


// function App() {
//   return (
//     <Authentication> </Authentication>
//   );
// }
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';



function App() {

	const [user, setUser] = useState(null);
	onAuthStateChanged(auth, (currentUser) => {
	setUser(currentUser);
})
	return (
		<Router>
		<Nav/>
		<Routes>

			{!user && (
				<>
				<Route path='/' element={<Auth />} />
				<Route path='/Signup' element={< Signup/>}></Route>
				<Route path='/Signin' element={< Signin/>}></Route>
				</>
			)}
			{user && (
				//other routes
				<>
				<Route path='/' element={< Home />}></Route>
				<Route path='/outer' element={< Categories name="Outer"/>}></Route>
				<Route path='/top' element={< Categories name="Top"/>}></Route>
				<Route path='/bottom' element={< Categories name="Bottom"/>}></Route>
				<Route path='/accessories' element={< Categories name="Accessories"/>}></Route>
				<Route path='/dresses' element={< Categories name="Dresses"/>}></Route>
				<Route path='/shoes' element={< Categories name="Shoes"/>}></Route> 
				</>
			)}
			</Routes>





				
				{/* <Route path='/' element={< Auth/>}></Route>
				<Route path='/Signup' element={< Signup/>}></Route>
				<Route path='/Signin' element={< Signin/>}></Route>

				<Route path='/' element={< Home />}></Route>
				<Route path='/outer' element={< Categories name="Outer"/>}></Route>
				<Route path='/top' element={< Categories name="Top"/>}></Route>
				<Route path='/bottom' element={< Categories name="Bottom"/>}></Route>
				<Route path='/accessories' element={< Categories name="Accessories"/>}></Route>
				<Route path='/dresses' element={< Categories name="Dresses"/>}></Route>
				<Route path='/shoes' element={< Categories name="Shoes"/>}></Route> */}

			
		</Router>
)
}


export default App;
