import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";

export function HomeFunsionario () {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const { role } = JSON.parse(localStorage.getItem('user') || '');
      if (role === 'boss' || role === '') throw new Error();
    } catch(err) {
      return navigate('/');
    }
  });

  return (
    <section>
      <Header />
      <h1>Home Funsionario</h1>
    </section>
  )
}