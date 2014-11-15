'use strict';
/**
 * Created by dave on 06.11.14.
 */

angular.module('tt:taskList')
	.directive('ttTaskList', function ($log, Task) {
		$log = $log.getInstance('ttTaskList');

		return {
			controller  : function ($scope) {
				$scope.gridOptions = {
					data           : 'taskList',
					columnDefs     : [
						{field : 'name', displayName : 'Name'},
						{
							field        : 'tags',
							displayName  : 'Tags',
							cellTemplate : '<span ng-repeat="tag in row.entity.tags" log-it="tag">FUCK</span>'
						}
					],
					enableCellEdit : true
				};
				//scope.taskList = [{name: 'test'}];
				$scope.taskList = Task.$collection({creationMonth : 'November'}).$refresh();
				$scope.logIt = function (value) {
					$log.debug(value);
				};
			},
			templateUrl : 'app/components/taskList/taskList.tpl.html',
			link        : function (scope, attributes, element) {


			}
		};
	})
	.directive('logIt', function () {
		return {
			scope : {
				'logIt' : '='
			},
			link  : function (scope) {
				console.log(scope.logIt);
			}
		};
	});