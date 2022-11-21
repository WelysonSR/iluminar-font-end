interface TableDuoProps {
  referente: string;
  valor: string;
}

export function TableDuo({ referente, valor }: TableDuoProps) {

  return (
    <div className="rounded border-2 border-brown-600 flex text-center">
      <p className="bg-gold-900 w-[70px] h-[40px] font-semibold pt-[9px]">{referente}</p>
      <p className="bg-gold-100 w-[70px] h-[40px] pt-[9px]">{valor}</p>
    </div>
  )
}