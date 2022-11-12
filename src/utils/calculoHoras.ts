const date = new Date();

// interface IBh {
//   bancoHora: string;
//   data: string;
//   dia: string;
//   horaEntrada: string;
//   horaSaida: string;
//   transporte: number;
//   userId: number;
// }

export const calculoHorasDia = (entrada: string, saida: string) => {
  const [eH, eM] = entrada.split(':');
  const [sH, sM] = saida.split(':');

  const horas = Number(sH) - Number(eH);
  const minutos = Number(sM) - Number(eM);

  if(minutos < 0) {
    return `${horas - 1}:${60 + minutos}`;
  }

  return minutos === 0 || minutos < 10
    ? `${horas}:0${minutos}`
    : `${horas}:${minutos}`;
}

export const calculoAlmoco = (saida: string, entrada: string) => {
  const [eH, eM] = entrada.split(':');
  const [sH, sM] = saida.split(':');

  const horas = Number(eH) - Number(sH);
  const minutos = Number(eM) - Number(sM);

  if(minutos < 0) {
    return `${horas - 1}:${60 + minutos}`;
  }

  return minutos === 0 || minutos < 10
    ? `${horas}:0${minutos}`
    : `${horas}:${minutos}`;
}

export const horaAtual = () => {
  const horas = date.getHours();
  const minutos = date.getMinutes();

  if (minutos < 10) {
    return `${horas}:0${minutos}`;
  }
  return `${horas}:${minutos}`;
}

export const diaDataAtual = () => {
  const semana = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
  return {
    dia: semana[date.getDay()],
    data: date.toLocaleDateString()
  }
}

export const calculoBhMesAnterior = (info: object[]) => {
  const [_dia, mes, _ano] = date.toLocaleDateString().split('/');

  const cauculo = info.reduce((acc, bh: any) => {
    const [_bhDia, bhMes, _bhAno] = bh.data.split('/');

    if (Number(mes) - 1 === Number(bhMes)) {
      const [bhH, bhM] = bh.bancoHora.split(':');
      const [accH, accM] = acc.split(':');
      const minutos = Number(accM) + Number(bhM);
      const horas = Number(accH) + Number(bhH);
      if (minutos < 10) {
        return `${horas}:0${minutos}`;
      }

      if(minutos >= 60) {
        return `${horas + 1}:${minutos - 60}`;
      }
      return `${horas}:${minutos}`;
    }

    return acc;
  }, '00:00');

  return cauculo;
}

export const calculoBhMesAtual = (info: object[]) => {
  const [_dia, mes, _ano] = date.toLocaleDateString().split('/');

  const cauculo = info.reduce((acc, bh: any) => {
    const [_bhDia, bhMes, _bhAno] = bh.data.split('/');

    if (Number(mes) === Number(bhMes)) {
      const [bhH, bhM] = bh.bancoHora.split(':');
      const [accH, accM] = acc.split(':');
      const minutos = Number(accM) + Number(bhM);
      const horas = Number(accH) + Number(bhH);
      if (minutos < 10) {
        return `${horas}:0${minutos}`;
      }

      if(minutos >= 60) {
        return `${horas + 1}:${minutos - 60}`;
      }
      return `${horas}:${minutos}`;
    }

    return acc;
  }, '00:00');

  return cauculo;
}

export const somaBh = (mesAn: string, mesAt: string) => {
  const [eH, eM] = mesAn.split(':');
  const [sH, sM] = mesAt.split(':');

  const minutos = Number(eM) + Number(sM);
  const horas = Number(eH) + Number(sH);

  if (minutos < 10) {
    return `${horas}:0${minutos}`;
  }

  if(minutos >= 60) {
    return `${horas + 1}:${minutos - 60}`;
  }
  return `${horas}:${minutos}`;
}