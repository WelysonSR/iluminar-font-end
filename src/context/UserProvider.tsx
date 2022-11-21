import { ReactNode } from 'react';
import UserContext from './UserContext';

interface UserConstxtProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserConstxtProps) {
  const context: any = { }
  
  return (
    <UserContext.Provider value={ context }>
      {children}
    </UserContext.Provider>
  );
}