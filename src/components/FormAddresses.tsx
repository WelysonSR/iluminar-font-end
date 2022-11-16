export function FormAddresses() {
  return (
    <div>
      <p className="font-semibold mt-[18px] text-center">Endereço</p>
      <div className="bg-gold-500 rounded mt-[16px] w-[394px] h-[255px]">
        <input
          type="text"
          name=""
          // value=""
          placeholder="  Rua"
          className="w-[390px] h-[48px] rounded mt-[12px] ml-[2px]"
        />
        <input
          type="text"
          name=""
          // value=""
          placeholder="  Complemento"
          className="w-[390px] h-[48px] rounded mt-[12px] ml-[2px]"
        />
        <input
          type="text"
          name=""
          // value=""
          placeholder="  Cidade"
          className="w-[194px] h-[48px] rounded mt-[12px] ml-[2px]"
        />
        <input
          type="text"
          name=""
          // value=""
          placeholder="  Estado"
          className="w-[194px] h-[48px] rounded mt-[12px] ml-[2px]"
        />
        <input
          type="text"
          name=""
          // value=""
          placeholder="  CEP"
          className="w-[194px] h-[48px] rounded mt-[12px] ml-[2px]"
        />
        <input
          type="text"
          name=""
          // value=""
          placeholder="  UF"
          className="w-[194px] h-[48px] rounded mt-[12px] ml-[2px]"
        />
      </div>
    </div>
  )
}