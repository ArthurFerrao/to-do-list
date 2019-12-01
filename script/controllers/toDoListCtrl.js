angular.module("toDoList").controller("toDoListCtrl", function ($scope, toDoListAPI) {
  $scope.app = "Things to do";
  $scope.activities = [];
  $scope.filterStatus = undefined;

  var getActivities = function () {
    toDoListAPI.getActivities().then((response)=>{
      $scope.activities = response.data;
    });
  };

  $scope.editName = function (event,activity) {
    if(event.which === 13) {
      $scope.updateActivity(activity);
      getActivities();
    }
  };

  $scope.addActivity = function (name) {
    toDoListAPI.addActivity({name:name, done:false}).then((response)=>{
      getActivities();
      delete $scope.name;
    });
  };

  $scope.updateActivity = function (activity) {
    toDoListAPI.updateActivity(activity).then((response)=>{
      getActivities();
    });
  };

  $scope.deleteActivity = function (activity) {
    toDoListAPI.deleteActivity(activity).then((response)=>{
      getActivities();
    });
  };

  $scope.updateFilter = function (status) {
    $scope.filterStatus = status;
  };

  getActivities();
});