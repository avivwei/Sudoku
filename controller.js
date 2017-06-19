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
          // $scope.checkMatrix.push(row);
    }
    $scope.checkMatrix = angular.copy($scope.matrix);
    $scope.solveSud = function(){
        $scope.matrix = sudo.solve($scope.matrix);
    }
    $scope.setInput = function(row,col){
        var mat = $scope.matrix;
        $scope.matrix = angular.copy(sudo.setMatrix(row,col,$scope.checkMatrix,mat));        
        $scope.checkMatrix = angular.copy($scope.matrix);
    }
    
       
   
})