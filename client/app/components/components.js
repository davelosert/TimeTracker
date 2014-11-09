'use strict';
/**
 * Created by dave on 08.11.14.
 */

angular.module('tt:3rdParty', []);
angular.module('tt:taskEntry', ['timer']);
angular.module('tt:taskList', ['ui.grid', 'ui.grid.edit']);


angular.module('tt:components', ['tt:3rdParty', 'tt:taskEntry', 'tt:taskList']);