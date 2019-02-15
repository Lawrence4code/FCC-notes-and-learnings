console.log('cash register');

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

  const cidObj = cid.map(cur => {
    const newObj = { name: cur[0], value: cur[1] };
    return newObj;
  });

  let cidObjRev = cidObj.reverse();

  let newCID = [];

  convertedToDollar.reduce((acc, cur, i) => {
    console.log(payBack.toFixed(2));
    if (payBack >= cur.value && cidObjRev[i].value !== 0) {
      if (payBack >= cidObjRev[i].value && cidObjRev[i].value !== 0) {
        payBack =
          payBack.toFixed(2) - Math.round(cidObjRev[i].value).toFixed(2);
        newCID.push([cidObjRev[i].name, cidObjRev[i].value]);
      } else {
        let a = 0;
        while (payBack > a && payBack < cidObjRev[i].value) {
          a += convertedToDollar[i].value;
        }

        payBack = payBack - (a - convertedToDollar[i].value);
        newCID.push([
          convertedToDollar[i].name,
          (a - convertedToDollar[i].value).toFixed(2)
        ]);
      }
    }
    return acc;
  }, []);

  console.log(newCID);

  const totalCID = cid.reduce((acc, cur) => {
    acc += cur[1];
    return acc;
  }, 0);

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

// should return { status: "OPEN", change: [["QUARTER", 0.5]] }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function checkCashRegister(price, cash, cid) {
//   let payBack = cash - price;
//   let status = '';

//   let newCID = [];

//   for (let i in convertedToDollar) {
//     while (payBack > convertedToDollar[i].value) {
//       newCID.push(convertedToDollar[i]);
//       payBack -= convertedToDollar[i].value;
//     }
//   }
//   console.log(newCID);

//   const totalCID = cid.reduce((acc, cur) => {
//     acc += cur[1];
//     return acc;
//   }, 0);

//   if (totalCID === payBack) {
//     status = 'CLOSED';
//   } else if (totalCID > payBack) {
//     status = 'OPEN';
//     return 'got money';
//   } else if (totalCID < payBack) {
//     status = 'INSUFFICIENT_FUNDS';
//   }

//   return { status: status };
// }

// console.log(
//   checkCashRegister(3.26, 100, [
//     ['PENNY', 1.01],
//     ['NICKEL', 2.05],
//     ['DIME', 3.1],
//     ['QUARTER', 4.25],
//     ['ONE', 90],
//     ['FIVE', 55],
//     ['TEN', 20],
//     ['TWENTY', 60],
//     ['ONE HUNDRED', 100]
//   ])
// );
