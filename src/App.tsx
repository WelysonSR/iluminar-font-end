import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import './styles/global.css';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}
