/*
 * @Author: Latte
 * @Date: 2022-03-01 23:24:54
 * @LAstEditors: Latte
 * @LastEditTime: 2022-03-01 23:24:55
 * @FilePath: \algorithm\506. 相对名次.js
 */
var findRelativeRanks = function (score) {
  let rank = [...score];
  const res = [];

  rank.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i++) {
      const index = score.indexOf(rank[i]);
      if (i === 0) {
          res[index] = "Gold Medal";
      }
      else if (i === 1) {
          res[index] = "Silver Medal";
      }
      else if (i === 2) {
          res[index] = "Bronze Medal";
      }
      else {
          res[index] = String(i + 1)
      }
  }

  return res
};