import { Routes, Route } from 'react-router-dom';
import { FormAdm } from './pages/FormAdm';
import { HomeAdm } from './pages/HomeAdm';
import { HomeFunsionario } from './pages/HomeFuncionario';
import { Login } from './pages/Login';
import './styles/global.css';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/homeadm" element={<HomeAdm />} />
      <Route path="/homefunsionario" element={<HomeFunsionario />} />
      <Route path="/cadastrar" element={<FormAdm />} />
    </Routes>
  )
}
