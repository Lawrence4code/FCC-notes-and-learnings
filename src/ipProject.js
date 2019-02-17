const matches = require('./matches.json');

const deliveries = require('./deliveries.json');

// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

// Plot the number of matches played per year of all the years in IPL.

function matchPlayedByYear(matches) {
  // error mesage in case no arguments passed
  if (!matches) {
    return 'Please pass match details to get the result.';
  }

  return matches.reduce((acc, cur) => {
    if (acc.hasOwnProperty(cur.season)) {
      acc[cur.season] = acc[cur.season] + 1;
    } else {
      acc[cur.season] = 1;
    }
    return acc;
  }, {});
}

console.log(matchPlayedByYear(matches));

// ------------------------------------------------------------------------------------------------------------------------ //

function winningStatsForTeamByYear(matches) {
  // error mesage in case no arguments passed
  if (!matches) {
    return 'Please pass match details to get the result.';
  }

  return matches.reduce((acc, cur) => {
    if (!acc[cur.season]) {
      acc[cur.season] = {};
      acc[cur.season][cur.winner] = 1;
    } else {
      if (!acc[cur.season][cur.winner]) {
        acc[cur.season][cur.winner] = 1;
      } else {
        acc[cur.season][cur.winner] = acc[cur.season][cur.winner] + 1;
      }
    }
    return acc;
  }, {});
}

// ------------------------------------------------------------------------------------------------------------------------ //

// For the year 2016 plot the extra runs conceded per team.

function extraRunsConcededPerTeam(year) {
  return matches.reduce((acc, cur) => {
    deliveries.map(ele => {
      if (ele.match_id == cur.id && cur.season == year) {
        if (acc.hasOwnProperty(ele['bowling_team'])) {
          acc[ele.bowling_team] += Number(ele.extra_runs);
        } else {
          acc[ele.bowling_team] = Number(ele.extra_runs);
        }
      }
    });
    return acc;
  }, {});
}

console.log(extraRunsConcededPerTeam(2016));

// ------------------------------------------------------------------------------------------------------------------------ //

// console.log(winningStatsForTeamByYear(matches));

// var allmatch = matches.reduce(function(ac, cr){
//     if(ac[cr.season] == undefined)
//     {
//             ac[cr.season]={};
//             ac[cr.season][cr.winner]=1;
//     }
//     else
//     {
//         if(ac[cr.season][cr.winner] == undefined)
//         {
//             ac[cr.season][cr.winner]=1;
//         }
//         else
//         {
//             ac[cr.season][cr.winner] = ac[cr.season][cr.winner]+1;
//         }
//     }
//     return ac;
// },{});

// console.log(allmatch);

// function extraRunsConcededPerTeam(year) {

//   return matches.reduce((acc, cur) => {
//     deliveries.map(ele => {
//       if (ele.match_id == cur.id && cur.season == year) {
//         if (acc.hasOwnProperty(ele.bowling_team)) {
//           acc[ele.bowling_team] += Number(ele.extra_runs);
//         } else {
//           acc[ele.bowling_team] = Number(ele.extra_runs);
//         }
//       }
//     });
//     return acc;
//   }, {});
// }

// console.log(extraRunsConcededPerTeam(2017));
// console.log(extraRunsConcededPerTeam1(2017));

// function extraRunsConcededPerTeam1(year) {
//   const consolidatedData = [...matches, ...deliveries]
//   console.log(consolidatedData)
//   // console.log(con)

//   return consolidatedData.reduce((acc, cur) => {

//     if (cur.match_id == cur.id && cur.season == year) {
//       if (acc.hasOwnProperty(cur['bowling_team'])) {
//         acc[cur.bowling_team] += Number(cur.extra_runs);
//       } else {
//         acc[cur.bowling_team] = Number(cur.extra_runs);
//       }
//     }

//     return acc;
//   }, {});

// }

// console.log(extraRunsConcededPerTeam1(2017));

// const refinedDel = deliveries.reduce((acc, cur, ) => {

//   return acc;
// }, {})

// console.log(refinedDel)
// console.log(deliveries)

// for (let v of deliveries) {
//   console.log(v)
// }

// ------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------ //

// 2. Plot a stacked bar chart of matches won of all teams over all the years of IPL.

// function teamMatchWinStatByYear(matches) {
//   return matches.reduce((acc, cur) => {
//     newObj = {}
//     acc[cur['season']] = newObj;
//     console.log(acc[cur['season']].hasOwnProperty(acc[cur['season']][cur['winner']]))
//     console.log
//     if (!acc[cur['season']].hasOwnProperty(cur['winner'])) {
//       acc[cur['season']][cur['winner']] = 1;
//     } else {
//       console.log('test')
//       acc[cur['season']][cur['winner']] = acc[cur['season']][cur['winner']] += 1;

//     }

//     return acc;
//   }, {})
// }

// console.log(teamMatchWinStatByYear(matches));

// function teamMatchWinStatByYear1(matches) {
//   const newObject = {}
//   return matches.reduce((acc, cur) => {
//     acc[cur['season']] = newObject;
//     if (!acc.hasOwnProperty([cur['season']])) {
//       acc[cur['season']] = {};
//       wonMatches[arr[i].season][cur.winner] = 1;
//     } else {
//       if (!acc[cur['season']].hasOwnProperty(cur['winner'])) {
//         acc[cur['season']][cur['winner']] = 1;
//       } else {
//         acc[cur['season']][cur['winner']] = acc[cur['season']][cur['winner']] += 1;
//       }
//     }
//     return acc;
//   }, {})
// }

// console.log(teamMatchWinStatByYear1(matches1));

// 2008: { Kolkata Knight Riders: 2, Chennai Super Kings: 1, Delhi Daredevils: 1, Royal Challengers Bangalore: 1, Rajasthan Royals: 1 }
// 2017: { Kings XI Punjab: 1, Delhi Daredevils: 1, Sunrisers Hyderabad: 1, Mumbai Indians: 3, Rising Pune Supergiant: 2, … }

// ------------------------------------------------------------------------------------------------------------------------ //

// 5th

// For the year 2015 plot the top economical bowlers.

// function topEconomicalBowlersByYear(year) {
//   let bowlerDetails = matches.reduce((acc, cur) => {
//     deliveries.map(ele => {
//       console.log('met')
//       if (ele.match_id == cur.id && cur.season == year) {
//         if (acc.hasOwnProperty(ele.bowler)) {
//           console.log('met')
//             (acc[ele.bowler] = acc[ele.bowler.balls] += 1),
//             (acc[ele.bowler.runs] += Number(ele.bowler.total_runs));
//         } else {
//           console.log('met')
//             (acc[ele.bowler] = acc[ele.bowler.balls] = 1),
//             (acc[ele.bowler.runs] = Number(ele.bowler.total_runs));
//         }
//       }
//     });
//     return acc;
//   }, {});

//   return bowlerDetails;
// }

// console.log(topEconomicalBowlersByYear(2016));

// function topEconomicalBowlersByYear(year) {
//   let bowlerDetails = matches.reduce((acc, cur) => {
//     deliveries.map(ele => {
//       if (cur.season == year) {
//         if (acc.hasOwnProperty(ele.bowler)) {
//           // console.log(acc[ele.ball])
//             // console.log(acc[ele.bowler]['ball'])
//             if(acc[ele.bowler].hasOwnProperty('ball')) {

//               console.log('passed')
//               acc[ele.bowler]['ball'] = acc[ele.ball] += 1
//               // acc[ele.bowler]['ball'] = 2
//             } else {
//               acc[ele.bowler]['ball'] = 1;
//             }
//         } else {
//             acc[ele.bowler] = { }
//         }
//       }
//     });
//     return acc;
//   }, {});

//   return bowlerDetails;
// }

// console.log(topEconomicalBowlersByYear(2017));
