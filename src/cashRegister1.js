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
  if (totalCID < payBack) {
    return {
      status: 'INSUFFICIENT_FUNDS',
      change: []
    };
  }
  if (totalCID === payBack) {
    return {
      status: 'CLOSED',
      change: cid
    };
  }
  // reverse cid
  let cidRev = cid.reverse();

  // new cid
  const newCID = convertedToDollar.reduce((acc, cur, i) => {
    if (payBack >= cur.value) {
      let currentValue = 0;
      while (payBack >= cur.value && cidRev[i][1] >= cur.value) {
        currentValue += cur.value;
        payBack -= cur.value;
        payBack = Math.round(payBack * 100) / 100;
        currentValue = Math.round(currentValue * 100) / 100;

        cidRev[i][1] -= cur.value;
      }
      acc.push([cur.name, currentValue]);
      return acc;
    }

    return acc;
  }, []);
  let count = 0;
  let index = 0;
  newCID.map((val, i) => {
    // console.log(val, i)
    if (val[1] > 0) {
      count++;
      index = i;
    }
  });
  console.log(count, newCID[index]);
  if (count === 1) {
    if (newCID[index][1] < payBack) {
      return {
        status: 'INSUFFICIENT_FUNDS',
        change: []
      };
    }
  }
  // statements check
  if (totalCID > payBack) {
    status = 'OPEN';
    change = newCID;
  }
  console.log(newCID.length);

  return { status: status, change: change };
}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 1],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
  ])
);

console.log(
  checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
  ])
);
