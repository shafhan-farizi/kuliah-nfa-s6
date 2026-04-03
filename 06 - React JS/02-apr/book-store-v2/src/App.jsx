import { BrowserRouter, Route, Routes } from 'react-router'
import "./App.css";
import Home from './Pages';
import Book from './Pages/Book';
import Teams from './Pages/Team';
import Contacts from './Pages/Contact';
import Register from './Pages/Auth/Register';
import Login from './Pages/Auth/Login';

function App() {
	return (
		<div className="container d-flex flex-column min-vh-100">
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path='books' element={<Book />} />
					<Route path='teams' element={<Teams />} />
					<Route path='contacts' element={<Contacts />} />
					<Route path='register' element={<Register />} />
					<Route path='login' element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
