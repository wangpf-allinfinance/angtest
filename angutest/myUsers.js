angular.module('myApp', []).controller('userCtrl', function($scope) {
$scope.name = '';
$scope.lName = '';
$scope.passw1 = '';
$scope.passw2 = '';
$scope.users = [
{id:1, name:'Hege',lName:"Pege" },
{id:2, name:'Kim',lName:"Pim" },
{id:3, name:'Sal',lName:"Smith" },
{id:4, name:'Jack',lName:"Jones" },
{id:5, name:'John',lName:"Doe" },
{id:6, name:'Peter',lName:"Pan" }
];
$scope.edit = true;
$scope.error = false;
$scope.incomplete = false;
$scope.editUser = function(id) {
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.name = '';
    $scope.lName = '';
    } else {
    $scope.edit = false;
    $scope.name = $scope.users[id-1].name;
    $scope.lName = $scope.users[id-1].lName;
  }
};

$scope.$watch('passw1',function() {$scope.test();});
$scope.$watch('passw2',function() {$scope.test();});
$scope.$watch('name',function() {$scope.test();});
$scope.$watch('lName',function() {$scope.test();});

$scope.test = function() {
  if ($scope.passw1 !== $scope.passw2) {
    $scope.error = true;
    } else {
    $scope.error = false;
  }
  $scope.incomplete = false;
  if ($scope.edit && (!$scope.name.length ||
    !$scope.lName.length ||
    !$scope.passw1.length || !$scope.passw2.length)) {
    $scope.incomplete = true;
  }
};
})