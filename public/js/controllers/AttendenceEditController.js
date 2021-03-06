/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5ea3476182f82d390e77c9df
*
* You will get 10% discount for each one of your friends
* 
*/
// START - USED SERVICES
/*
 *	AttendenceService.create
 *		PARAMS: 
 *		
 *
 *	AttendenceService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	AttendenceService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 *	studentService.list
 *		PARAMS: 
 *		
 *
 *	ExamService.list
 *		PARAMS: 
 *		
 *
 *	courseService.list
 *		PARAMS: 
 *		
 *
 *	TeacherService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * AttendenceService  
 * ExamService  
 * TeacherService  
 * courseService  
 * studentService  
 */
// END - REQUIRED RESOURCES

app.controller('AttendenceEditController', ['$scope', '$location', '$routeParams', '$q', 'AttendenceService', 'ExamService', 'TeacherService', 'courseService', 'studentService', 'ExamService', 'TeacherService', 'courseService', 'studentService',
    function ($scope, $location, $routeParams, $q, AttendenceService , ExamService , TeacherService , courseService , studentService , ExamService, TeacherService, courseService, studentService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = AttendenceService.get({_id: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new AttendenceService();
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/attendences/');
    		});
    	}
    	
    	$scope.remove = function(){
    		AttendenceService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/attendences/');
    		});
    	}
    	
    		
        //manage relation _Exam
        		
    	$scope.list_Exam = ExamService.query();

    		
        //manage relation _Teacher
        		
    	$scope.list_Teacher = TeacherService.query();

    		
        //manage relation _course
        		
    	$scope.list_course = courseService.query();

    		
        //manage relation _student
        		
    	$scope.list_student = studentService.query();

}]);