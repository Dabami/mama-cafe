import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/home/Home'


export function App() {

	return (
		<Routes>
			<Route path='/mama-cafe/' element={<Home />}></Route>
		</Routes>
	)
}
