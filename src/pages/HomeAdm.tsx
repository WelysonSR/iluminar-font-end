import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Header } from '../components/Header';

export function HomeAdm () {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const { role } = JSON.parse(localStorage.getItem('user') || '');
      if (role === 'employee' || role === '') throw new Error();
    } catch(err) {
      return navigate('/');
    }
  });

  return (
    <section>
      <Header />
      <h1>Home ADM</h1>
    </section>
  )
}