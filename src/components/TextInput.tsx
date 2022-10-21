import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gold-100 w-full focus-within:ring-2 ring-brown-900'>
      {props.children}
    </div>
  )
};

TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-brown-500">
      {props.children}
    </Slot>
  )
};

TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {};

function TextInputInput (props: TextInputInputProps) {
  return (
      <input
        className="bg-gold-100 flex-1 text-brown-500 text-xs placeholder:text-brown-500 outline-none"
        {...props}
      />
  )
};

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}