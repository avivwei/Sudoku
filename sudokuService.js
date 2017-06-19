app.factory('sudo',function(){

  var mat = {}

  var isInputValid = function(row,col,newMat){
    if (newMat[row,col] === ''){
      return true;
    }
    
    //check if input apears more than once in its 3x3 sub matrix
    var diagI = Math.floor(row/3)*3;
    var diagJ = Math.floor(col/3)*3;
    for (var i = diagI; i < diagI + 3; i ++){
      for (var j = diagJ; j < diagJ + 3; j++){
        if ((i !== row || j !== col) && (newMat[i][j] === newMat[row][col])){
          return false
        }
      }
    }

    //check if input appears more than once in its column or a row
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
    } 
    else {
      alert("you can't put " + newMat[row][col] + " here!")
      return oldMat
    }
  }
  mat.solve = function (greed){

    var newState = angular.copy(greed);

    return solveSud(0,0,1);
    
    function solveSud(i,j,num){
      if (greed[i][j] === ''){
        newState[i][j] = num;
      }
      
      if (isInputValid(i,j,newState)){
        a = getNextCell(i,j,newState);
        if (a === null){
          return newState;
        };
        if (greed[a[0]][a[1]] !== ''){
          getNextCell(a[0],a[1],newState);
        }
        i = a[0];
        j = a[1];
        
        return solveSud(i,j,1);
      } 
      else {  
        if (num === 9){
          newState[i][j] = '';
          a = getPrevCellLessThan9(i,j,newState);
          if (a === null){
            return null;
          };
          i = a[0];
          j = a[1];
          if (greed[i][j] !== ''){
            getPrevCellLessThan9(i,j,newState)
          }
          num = newState[i][j];
          
          return solveSud(i,j,num+1);
        }
        else {
          return solveSud(i,j,num+1);
        }
        
      }
      
    }
    



     
  }  

    



     
  var getNextCell = function(i,j,matrix){
    
    if (j == matrix.length-1) {
      j = 0;
      i = i + 1;
        
    } else {
      j = j+1;
    }
    if (i === 9){
      return null;
    }
    
    return [i,j];   
  }

  var getPrevCellLessThan9 = function(i,j,matrix) {
      a = getPrevCell(i,j,matrix);
      if (a == null){
        return null;
      }

      i = a[0];
      j = a[1];
      while (matrix[i][j] == 9) {
        matrix[i][j] = '';
        a = getPrevCell(i,j,matrix);
        i = a[0];
        j = a[1];
      }
      return a;  
    } 
  var getPrevCell = function(i,j,matrix){
    if (j==0){
      j = 8;
      i = i - 1;
    } else {
      j = j - 1;
    }
    if (i == -1){
      return null;
    }

    return [i,j];
  }

  return mat;
  
})