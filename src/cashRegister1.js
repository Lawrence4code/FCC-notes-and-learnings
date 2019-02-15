const convertedToDollar = [
  { name: 'HUNDRED', value: 100 },
  { name: 'TWENTY', value: 20 },
  { name: 'TEN', value: 10 },
  { name: 'FIVE', value: 5 },
  { name: 'ONE', value: 1 },
  { name: 'QUARTER', value: 0.25 },
  { name: 'DIME', value: 0.1 },
  { name: 'NICKEL', value: 0.05 },
  { name: 'PENNY', value: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  let payBack = cash - price;
  let status = '';
  let change = [];

  // reduce to calculate sum in cid
  const totalCID = cid.reduce((acc, cur) => {
    acc += cur[1];
    return acc;
  }, 0);

  // reverse cid
  let cidRev = cid.reverse();

  // new cid
  const newCID = convertedToDollar.reduce((acc, cur, i) => {
    if (payBack >= cur.value) {
      let currentValue = 0;
      while (payBack >= cur.value && cidRev[i][1] >= cur.value) {
        console.log(currentValue);
        currentValue += cur.value;
        payBack -= cur.value;
        payBack = Math.round(payBack * 100) / 100;
        currentValue = Math.round(currentValue * 100) / 100;
        console.log(cidRev[i][1]);
        console.log(cur.value);
        console.log(currentValue);
        cidRev[i][1] -= cur.value;
      }
      acc.push([cur.name, currentValue]);
      return acc;
    }

    return acc;
  }, []);

  // statements check
  if (totalCID === payBack) {
    status = 'CLOSED';
    change = newCID;
  } else if (totalCID > payBack) {
    status = 'OPEN';
    change = newCID;
  } else if (totalCID < payBack) {
    status = 'INSUFFICIENT_FUNDS';
    change = [];
  }

  return { status: status, change: change };
}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
  ])
);
