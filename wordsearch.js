const wordSearch = (letters, word) => {
    if (word === "" || Array.isArray(word)) return false;
  
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
      
      if (l.toLowerCase().includes(word.toLowerCase())) return true;
    }
  
    const transpose = function(matrix) {
      const newMatrix = [];
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (i === 0) newMatrix.push([matrix[i][j]]);
          if (i > 0) newMatrix[j].push(matrix[i][j]);
        }
      }
      return newMatrix;
    };
  
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (let l of verticalJoin) {
      if (l.toLowerCase().includes(word.toLowerCase())) return true;
    }
    return false;
  };
  
  module.exports = wordSearch;