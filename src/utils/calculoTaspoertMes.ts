import { date } from './calculoHoras';

export const calculoTraspoetMes = (info: any) => {
  const [_dia, mes, _ano] = date.toLocaleDateString().split('/');

  const total = info.reduce((acc: number, value: any) => {
    const [_bhDia, bhMes, _bhAno] = value.data.split('/');
    if (Number(mes) === Number(bhMes)) {
      return acc + value.transporte;
    }
    return acc
  }, 0);
  return total.toFixed(2);
}
