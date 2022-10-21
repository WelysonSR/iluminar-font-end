import { TextInput } from "../components/TextInput";
import { Heading } from "../components/Heading";
import { Envelope, LockKey } from "phosphor-react";
import { Text } from "../components/Text";
import { Logo } from "../Logo";
import { Checkbox } from "../components/Checkbox";
import { Button } from "../components/Button";

export function Login() {
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center text-black flex-col gap-10">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="xs" className="mt-[-20px]">Página de Funcionário!</Heading>
      </header>
      <form className="flex flex-col gap-4 items-stretch w-full max-w-[300px]">
        <label htmlFor="email" id="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type='email' id="email" placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" id="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <LockKey />
            </TextInput.Icon>
            <TextInput.Input type='password' id="password" placeholder="********" />
          </TextInput.Root>
        </label>
        
        <label htmlFor="remember" id='remamber' className="flex items-center gap-2">
          <Checkbox id='remamber' />
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