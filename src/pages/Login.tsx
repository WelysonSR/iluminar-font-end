import { FormEvent, useState } from "react";
import { TextInput } from "../components/TextInput";
import { Heading } from "../components/Heading";
import { Envelope, LockKey } from "phosphor-react";
import { Text } from "../components/Text";
import { Logo } from "../Logo";
import { Checkbox } from "../components/Checkbox";
import { Button } from "../components/Button";
import { Alert } from "@mui/material";
import { requestLogin } from '../services/requests';
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);
  const navigate = useNavigate();
  
  const logar = async (event: FormEvent) => {
    event.preventDefault();
    setFailedLogin(false);
    try {
      const response = await requestLogin('/user/login', { email, password, checked });
      if (!response) throw new Error();
      localStorage.setItem('user', JSON.stringify(response));
      if (response.role === 'boss') {
        return navigate("/homeadm");
      }
      return navigate("/homefunsionario");
    } catch (err) {
      setFailedLogin(true);
    }
  }

  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center text-black flex-col gap-10">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="xs" className="mt-[-20px]">Página de Funcionário!</Heading>
      </header>
      {
        failedLogin ? (
          <Alert variant="outlined" severity="warning">
            E-mail ou senha invalida!
            Tente novamente.
          </Alert>
        ) : null
      }
      <form onSubmit={ logar } className="flex flex-col gap-4 items-stretch w-full max-w-[300px]">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type='email'
              id="email"
              placeholder="Digite seu e-mail"
              value={ email }
              onChange={ ({target}) => setEmail(target.value) }
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <LockKey />
            </TextInput.Icon>
            <TextInput.Input
              type='password'
              id="password"
              placeholder="********"
              value={ password }
              onChange={ ({target}) => setPassword(target.value) }
            />
          </TextInput.Root>
        </label>
        
        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox
            id="remember"
            onCheckedChange={() => setChecked(!checked)}
          />
          <Text size="sm">
            Lembrar-me de mim por 9H
          </Text> 
        </label>

        <Button type="submit">Logar</Button>
      </form>

      <footer className='flex flex-col items-center gap-4'>
        <Text asChild size='sm'>
          <a href="#" className='text-gray-400 underline hover:text-brown-600'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
          <a href="#" className='text-gray-400 underline hover:text-brown-600'>Não possui conta? Solicite ao ADM</a>
        </Text>
      </footer>
    </div>
  )
}