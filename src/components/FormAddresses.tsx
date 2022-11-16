import { useEffect, useState } from "react"

interface IPropsAddress {
  onSetAddress: (info: object) => void;
}

export function FormAddresses({onSetAddress}: IPropsAddress) {
  const [logradouro, setLogradouro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');

  useEffect(() => {
    const getCep = async () => {
      try {
        const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const result = await data.json();
        if(!result.erro) {
          setLogradouro(result.logradouro);
          setComplemento(result.complemento);
          setBairro(result.bairro);
          setLocalidade(result.localidade);
          setUf(result.uf);
        };
      } catch (err) {
        console.log(err);
      }
    }

    if(cep.length === 8) getCep();

    onSetAddress({logradouro, complemento, bairro, localidade, cep, uf})
  }, [logradouro, complemento, bairro, localidade, cep, uf]);

  return (
    <div>
      <p className="font-semibold mt-[18px] text-center">Endereço</p>
      <div className="bg-gold-500 rounded mt-[16px] w-[394px] h-[255px]">
        <input
          type="text"
          name="logradouro"
          value={logradouro}
          placeholder="  Rua"
          onChange={({target}) => setLogradouro(target.value)}
          className="w-[390px] h-[48px] rounded mt-[12px] ml-[2px]"
        />
        <input
          type="text"
          name="complemento"
          value={complemento}
          placeholder="  Complemento"
          onChange={({target}) => setComplemento(target.value)}
          className="w-[390px] h-[48px] rounded mt-[12px] ml-[2px]"
        />
        <input
          type="text"
          name="bairro"
          value={bairro}
          placeholder="  Bairro"
          onChange={({target}) => setBairro(target.value)}
          className="w-[194px] h-[48px] rounded mt-[12px] ml-[2px]"
        />
        <input
          type="text"
          name="localidade"
          value={localidade}
          placeholder="  Estado"
          onChange={({target}) => setLocalidade(target.value)}
          className="w-[194px] h-[48px] rounded mt-[12px] ml-[2px]"
        />
        <input
          type="text"
          name="cep"
          value={cep}
          placeholder="  CEP"
          onChange={({target}) => setCep(target.value)}
          className="w-[194px] h-[48px] rounded mt-[12px] ml-[2px]"
        />
        <input
          type="text"
          name="uf"
          value={uf}
          placeholder="  UF"
          onChange={({target}) => setUf(target.value)}
          className="w-[194px] h-[48px] rounded mt-[12px] ml-[2px]"
        />
      </div>
    </div>
  )
}