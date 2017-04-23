app.factory('sudo',function(){

  var mat = {}

  var isInputValid = function(row,col,newMat){
    if (newMat[row,col] === ''){
      return true;
    }
    //check if input apears in its 3x3 broken diagonal
    var diagI = Math.floor(row/3)*3;
    var diagJ = Math.floor(col/3)*3;
    for (var i = diagI; i < diagI + 3; i ++){
      for (var j = diagJ; j < diagJ + 3; j++){
        if ((i !== row || j !== col) && (newMat[i][j] === newMat[row][col])){
          return false
        }
      }
    }

    //check if input appears more then once in the column or a row
    for(var i = 0; i < 9; i++){
      if (i !== row && newMat[row][col] === newMat[i][col]) {
        return false
      }
      if (i !== col && newMat[row][col] === newMat[row][i]) {
        return false
      }
    }
        return true   
  }
  
  mat.setMatrix = function(row,col,newMat,oldMat){
    if (isInputValid(row,col,newMat)){
      return newMat
    } else {
      alert("you can't put " + newMat[row][col] + " here!")
      return oldMat
    }


    
  }
  return mat;
  
  

  })