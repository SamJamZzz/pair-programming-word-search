const wordSearch = (letters, word) => {
    if (letters.length === 0) {
        return false;
      }
    const horizontalJoin = letters.map((ls) => ls.join(""));
    for (let l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    const transpose = letters[0].map((val, colI) => letters.map((row) => row[colI]));
    let verticalJoin = transpose.map((ls) => ls.join(""));
    for (let l of verticalJoin) {
        if (l.includes(word)) return true;
      }
    return false;
  };

module.exports = wordSearch