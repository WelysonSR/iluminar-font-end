import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from '../components/Header';
import { requestUserId, requestUsers } from "../services/requests";
import { calculoBhMesAnterior, calculoBhMesAtual, somaBh } from "../utils/calculoHoras";
import { calculoTraspoetMes } from "../utils/calculoTaspoertMes";

interface IUser {
  id: number;
  firstName: string;
  lestName: string;
  email: string;
  role: string;
  cpf: string;
  phone: string;
}

export function HomeAdm() {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [users, setUsers] = useState([]);

  const [userName, setUserName] = useState('');
  const [bhMesAnterior, setBhMesAnterior] = useState('');
  const [bhMesAtual, setBhMesAtual] = useState('');
  const [bhTotal, setBhTotal] = useState('');
  const [transporteMes, setTransporteMes] = useState(0);

  useEffect(() => {
    try {
      const { role, token } = JSON.parse(localStorage.getItem('user') || '');
      setToken(token);
      if (role === 'employee' || role === '') throw new Error();
      const getUsers = async () => {
        const users = await requestUsers(token);
        const newUsers = users.filter((user: IUser) => user.role === 'employee')
        setUsers(newUsers);
      }
      getUsers();
    } catch (err) {
      return navigate('/');
    }
  }, []);

  const préVisualizacao = async (id: number) => {
    const { response } = await requestUserId('/user/user', id, token);

    setUserName(response.firstName);
    setBhMesAnterior(calculoBhMesAnterior(response.dailyControl));
    setBhMesAtual(calculoBhMesAtual(response.dailyControl));
    setTransporteMes(calculoTraspoetMes(response.dailyControl));
  }

  useEffect(() => {
    setBhTotal(somaBh(bhMesAnterior, bhMesAtual));
  }, [bhMesAnterior, bhMesAtual])

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

            <ol className="list-decimal list-outside mt-[12px] ml-[35px]">
              {
                users.map(({ id, firstName, lestName }) => (
                  <li
                    key={id}
                    className="mt-[2px] cursor-pointer"
                    onClick={() => préVisualizacao(id)}
                  >
                    {`${firstName} ${lestName}`}
                  </li>
                ))
              }
            </ol>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="font-semibold mt-[18px]">Pré visualização de funcionário</p>

          <div className="bg-gold-500 rounded mt-[16px] w-[394px] h-[185px] flex justify-between">
            <div className="ml-[20px]">
              <p className="mt-[14px]">{`Nome: ${userName}`}</p>
              <p className="mt-[4px]">{`BH Mês Anterior: ${bhMesAnterior}`}</p>
              <p className="mt-[4px]">{`BH Mês Atual: ${bhMesAtual}`}</p>
              <p className="mt-[4px]">{`BH Total: ${bhTotal}`}</p>
              <p className="mt-[4px]">{`Transporte diário: R$ 9,60`}</p>
              <p className="mt-[4px]">{`Transporte do mês: R$ ${transporteMes}`}</p>
            </div>
            <button
              type="button"
              className="bg-brown-800 font-semibold mt-[14px] mr-[12px] rounded w-[100px] h-[48px]"
            >
              Visualizar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}