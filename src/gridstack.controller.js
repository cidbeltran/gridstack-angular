(function() {
'use strict';

angular.module('gridstack-angular', []);

var app = angular.module('gridstack-angular');

app.controller('GridstackController', ['$scope', function($scope) {

  this.gridstack = null;

  this.init = function(element, options) {
    //this.gridstack = element.gridstack(options).data('gridstack');
    this.gridstack = GridStack.init(options, element);

    return this.gridstack;
  };

  this.removeItem = function(element) {
    if(this.gridstack) {
      return this.gridstack.removeWidget(element, false);
    }
    return null;
  };

  this.addItem = function(element) {
    if(this.gridstack) {
      var gridstackItem = this.gridstack.makeWidget(element)
      return gridstackItem;
    }
    return null;
  };

}]);
})();