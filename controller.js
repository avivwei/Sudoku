app.controller('MyCtrl', function(sudo, $scope) {

    var matrixSize = 9;
    $scope.matrix = [];
    $scope.checkMatrix = [];
    for (var i = 0; i < matrixSize; i++) {
          var row = [];
          for (j = 0; j < matrixSize; j++) {
              row.push('');
          }
          $scope.matrix.push(row);
          $scope.checkMatrix.push(row);
    }
    $scope.checkMatrix = angular.copy($scope.matrix);
    $scope.setInput = function(row,col){
        var mat = $scope.matrix;
        $scope.matrix = angular.copy(sudo.setMatrix(row,col,$scope.checkMatrix,mat));        
        $scope.checkMatrix = angular.copy($scope.matrix);
    }
       
    // $scope.setInput = function(row,col,checkMatrix){
      
    //   $scope.matrix = sudo.matrixService.matInput(row,col,checkMatrix); 
    // } 


    


    // var isInputValid = function(row,col,data){
    //     if (data[row,col] === 0){
    //       return true;
    //     }

    //     //check if input appears more then once in the column
    //     for(var i = 0; i < 9; i++){
    //       if (i !== row && data[row][col] === $scope.matrix[i][col]) {
    //         return false
    //       }
    //     }
    //     return true   
    // }

    // $scope.setInput = function(row,col,data){

    //   if (isInputValid(row,col,data)){
    //     $scope.matrix  = angular.copy(data);
    //   } else {
    //     data = angular.copy($scope.matrix);
    //   }
    //   $scope.checkMatrix = data;
    // } 
    // $scope.matrix = sudo.matrixService.setMatrix(row,col,data);
     
})