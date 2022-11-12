export const calculoTraspoetMes = (info: any) => {
  const total = info.reduce((acc: number, value: any) => {
    return acc + value.transporte;
  }, 0);
  return total.toFixed(2);
}
