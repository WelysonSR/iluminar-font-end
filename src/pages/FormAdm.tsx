import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { FormAddresses } from "../components/FormAddresses";
import { FormUser } from "../components/FormUser";
import { Header } from "../components/Header";

export function FormAdm() {
  const cadastrar = (event: FormEvent) => {
    event.preventDefault();
    console.log('Clicado');
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
          <FormUser />
          <FormAddresses />
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