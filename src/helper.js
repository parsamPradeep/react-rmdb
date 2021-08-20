export const calcTime = time => {
  const hour = Math.floor(time / 60);
  const min = time % 60;
  return `${hour}h ${min}m`;
};

export const convertMoney = money => {
  const formatter = new Intl.NumberFormat('es-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });
  return formatter.format(money);
};
