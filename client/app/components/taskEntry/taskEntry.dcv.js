'use strict';
/**
 * Created by dave on 02.11.14.
 */
angular.module('tt:taskEntry')
	.directive('ttTaskEntry', function ($log, moment, Task) {


		return {
			templateUrl: 'app/components/taskEntry/taskEntry.tpl.html',
			link : function (scope, attribute, element) {
				$log = $log.getInstance('EntryCtrl');

				var self = this
					, currentTask;

				scope.taskModel = {
					name : '',
					tags : []
				};


				scope.timerRunning = false;

				scope.startTimer = function () {
					currentTask = Task.$build({
						name      : scope.taskModel.name,
						tags      : scope.taskModel.tags,
						startedAt : moment().unix()
					});
					// Create new Tasks
					scope.$broadcast('timer-start');
					scope.timerRunning = true;
				};

				scope.stopTimer = function () {
					scope.$broadcast('timer-stop');
					this.timerRunning = false;

					// Create new
					currentTask.stoppedAt = moment().unix();
					$log.debug('Task created: ', currentTask);
					currentTask.$save();
				};
			}
		};
	});
