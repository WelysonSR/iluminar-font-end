import { useEffect, useState } from "react";

interface IPropsUser {
  onSetUser: (info: object) => void;
  onSetClear: (info: boolean) => void;
  onClear: boolean;
}

export function FormUser({ onSetUser, onSetClear, onClear }: IPropsUser) {
  const [firstName, setFirstName] = useState('');
  const [lestName, setLestName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('SouIlumin@r2022');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    if(onClear){
      setFirstName('');
      setLestName('');
      setEmail('');
      setCpf('');
      setPhone('');
      setRole('');
      onSetClear(false);
    }
  }, [onClear]);

  useEffect(() => {
    onSetUser({ firstName, lestName, email, password, cpf, phone, role })
  }, [firstName, lestName, email, password, cpf, phone, role,]);

  return (
    <div>
      <p className="font-semibold mt-[18px] text-center">Formulário de cadastro</p>
      <div className="bg-gold-500 rounded mt-[16px] w-[394px] h-[276px]">
        <input
          type="text"
          name="firstName"
          value={firstName}
          placeholder="  *Nome"
          onChange={({ target }) => setFirstName(target.value)}
          className="w-[194px] h-[48px] rounded mt-[9px] ml-[2px]"
          required
        />
        <input
          type="text"
          name="lestName"
          value={lestName}
          placeholder="  *Sobrenome"
          onChange={({ target }) => setLestName(target.value)}
          className="w-[194px] h-[48px] rounded mt-[9px] ml-[2px]"
          required
        />
        <input
          type="text"
          name="cpf"
          value={cpf}
          placeholder="  CPF"
          onChange={({ target }) => setCpf(target.value)}
          className="w-[194px] h-[48px] rounded mt-[9px] ml-[2px]"
        />
        <input
          type="text"
          name="phone"
          value={phone}
          placeholder="  Telefone"
          onChange={({ target }) => setPhone(target.value)}
          className="w-[194px] h-[48px] rounded mt-[9px] ml-[2px]"
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="  *Digite o e-mail"
          onChange={({ target }) => setEmail(target.value)}
          className="w-[390px] h-[48px] rounded mt-[9px] ml-[2px]"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="  ********"
          onChange={({ target }) => setPassword(target.value)}
          className="w-[194px] h-[48px] rounded mt-[9px] ml-[2px]"
          required
        />
        <select
          name="role"
          value={role}
          onChange={({ target }) => setRole(target.value)}
          className="w-[194px] h-[48px] rounded mt-[9px] ml-[2px]"
          required
        >
          <option value="" disabled={true}>Cargo</option>
          <option value="boss">Lider</option>
          <option value="employee">Funsionario</option>
        </select>
        <p
          className="text-center text-xs font-semibold"
        >
          OBS: Orientar funcionário alterar a senha no primeiro acesso!
          Senha padrão: SouIlumin@r2022
        </p>
      </div>
    </div>
  )
}