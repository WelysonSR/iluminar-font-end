import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { FormAddresses } from "../components/FormAddresses";
import { FormUser } from "../components/FormUser";
import { Header } from "../components/Header";
import { requestRegisterAddress, requestRegisterUser } from "../services/requests";

export function FormAdm() {
  const [user, setUser] = useState({});
  const [address, setAddress] = useState({});

  const cadastrar = async (event: FormEvent) => {
    event.preventDefault();
    const { token } = JSON.parse(localStorage.getItem('user') || '');    
    const {userId} = await requestRegisterUser('user/creat', user, token);
    const newAddress = await requestRegisterAddress('/address', { ...address, userId}, token);
    if(userId && newAddress) {
      alert('Usuário criado com sucesso!')
    }
  }

  return (
    <section className="flex flex-col items-center">
      <Header />
      <div className="bg-gold-100 border-2 rounded border-brown-600 w-[410px] h-[746px] mt-[60px]">
        <div className="flex">
          <Link
            to="/homeadm"
            className="bg-gold-500 border-2 rounded border-brown-600 w-[205px] text-center text-md mt-[-2px] ml-[-2px] font-semibold"

          >
            Funcionários
          </Link>
          <Link
            to="/cadastrar"
            className="w-[205px] text-center text-md font-semibold"
          >
            Novo funcionário
          </Link>
        </div>

        <form onSubmit={cadastrar} method="post" className="flex flex-col items-center">
          <FormUser onSetUser={setUser} />
          <FormAddresses onSetAddress={setAddress} />
          <button
            type="submit"
            className="bg-gold-900 font-semibold mt-[12px] rounded w-[300px] h-[48px]"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  )
}