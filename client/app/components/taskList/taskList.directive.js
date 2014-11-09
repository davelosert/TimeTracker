'use strict';
/**
 * Created by dave on 06.11.14.
 */

angular.module('tt:taskList')
	.directive('ttTaskList', function ($log, Task) {
		$log = $log.getInstance('ttTaskList');

		return {
			controller: function ($scope) {
				$scope.gridOptions = {
					data : 'taskList',
					columnDefs: [
						{field:'name', displayName:'Name'},
						{field:'tags', displayName:'Tags', cellTemplate:'<span ng-repeat="tag in row.entity.tags">{{tag}}</span>'}
					],
					enableCellEdit: true
				};
				//scope.taskList = [{name: 'test'}];
				$scope.taskList = Task.$collection({creationMonth : 'November'}).$refresh();
			},
			templateUrl : 'app/components/taskList/taskList.html',
			link        : function (scope, attributes, element) {



			}
		};
	});