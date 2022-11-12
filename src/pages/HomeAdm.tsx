import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from '../components/Header';
import { requestUsers } from "../services/requests";

interface IUser {
  id: number;
  firstName: string;
  lestName: string;
  email: string;
  role: string;
  cpf: string;
  phone: string;
}

export function HomeAdm () {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      const { role, token } = JSON.parse(localStorage.getItem('user') || '');
      if (role === 'employee' || role === '') throw new Error();
      const getUsers = async () => {
        const users = await requestUsers(token);
        const newUsers = users.filter((user: IUser) => user.role === 'employee')
        setUsers(newUsers);        
      }
      getUsers();
    } catch(err) {
      return navigate('/');
    }
  }, []);
  
  return (
    <section className="flex flex-col items-center">
      <Header />

      <div className="bg-gold-100 border-2 rounded border-brown-600 w-[410px] h-[746px] mt-[60px]">
        <div className="flex">
          <Link
            to="/homeadm"
            className="w-[205px] text-center text-md font-semibold"
          >
            Funcionários
          </Link>
          <Link
            to="/cadastrar"
            className="bg-gold-500 border-2 rounded border-brown-600 w-[205px] text-center text-md mt-[-2px] mr-[-2px] font-semibold"
          >
            Novo funcionário
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-semibold mt-[18px]">Lista de Funcionários</p>
          <div className="bg-gold-500 rounded mt-[16px] w-[394px] h-[405px]">

            <p className="font-semibold mt-[14px] ml-[20px]"># <span className="ml-[40px]">Nome</span></p>

            <div className="w-[376px] mt-[12px] ml-[9px] rounded border-2 border-brown-600"></div>

            <ol className="list-decimal mt-[12px] ml-[35px]">
              {
                users.map(({id, firstName, lestName}) => (
                  <li
                    key={id}
                    className="mt-[2px]"
                  >
                    {`${firstName} ${lestName}`}
                  </li>
                ))
              }
            </ol>
          </div>
        </div>
        
      </div>
    </section>
  )
}