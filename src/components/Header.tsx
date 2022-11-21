import { Iconeluminar } from './Iconeluminar';
import { IconePerfil } from './IconePerfil';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import '../styles/menu.css';
import { useNavigate } from 'react-router';

export function Header() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/');
  }

  return (
    <section className="flex justify-center">
      <div className="flex items-center justify-between mt-[18px] w-[386px]">
        <Iconeluminar />

        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="" aria-label="Customise options">
            <IconePerfil />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
              <DropdownMenu.Item className="DropdownMenuItem">
                <button className="RightSlot" onClick={() => logout() }>Sair</button>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>

        </DropdownMenu.Root>
      </div>
    </section>
  )
}