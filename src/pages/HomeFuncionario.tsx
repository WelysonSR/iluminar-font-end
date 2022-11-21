import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { TableDuo } from '../components/TableDuo';
import { UserProvider } from '../context/UserProvider';

export function HomeFunsionario() {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const { role } = JSON.parse(localStorage.getItem('user') || '');
      if (role === 'boss' || role === '') throw new Error();
    } catch (err) {
      return navigate('/');
    }
  });

  return (
    <UserProvider>
      <section className="flex flex-col items-center w-[428px] ml-auto mr-auto border-2 border-brown-600">
        <Header />
        <div className="w-[416px] mt-[60px] flex justify-between">
          <TableDuo referente={'VT'} valor={'57.60'} />
          <TableDuo referente={'BH'} valor={'00:10'} />
        </div>
      </section>
    </UserProvider>
  )
}