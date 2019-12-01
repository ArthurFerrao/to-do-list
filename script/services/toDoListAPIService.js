angular.module("toDoList").service("toDoListAPI", function ($http, config) {

  this.getActivities = function () {
    return $http.get(`${config.baseURL}/activities.json`);
  }

  this.addActivity = function (activity) {
    return $http.post(`${config.baseURL}/activities.json`, activity);
  }

  this.deleteActivity = function (activity) {
    return $http.delete(`${config.baseURL}/activities/${activity.id}.json`);
  }

  this.updateActivity = function (activity) {
    return $http.put(`${config.baseURL}/activities/${activity.id}.json`, activity);
  }

});