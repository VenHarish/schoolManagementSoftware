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
 *	courseService.create
 *		PARAMS: 
 *		
 *
 *	courseService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	courseService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 *	ExamService.findBy_course
 *		PARAMS: 
 *					Objectid key - Id of model to search for
 *		
 *
 *	AttendenceService.findBy_course
 *		PARAMS: 
 *					Objectid key - Id of model to search for
 *		
 *
 *	TeacherService.findBy_course
 *		PARAMS: 
 *					Objectid key - Id of model to search for
 *		
 *
 *	studentService.findBy_course
 *		PARAMS: 
 *					Objectid key - Id of model to search for
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

app.controller('courseEditController', ['$scope', '$location', '$routeParams', '$q', 'AttendenceService', 'ExamService', 'TeacherService', 'courseService', 'studentService', 'ExamService', 'AttendenceService', 'TeacherService', 'studentService',
    function ($scope, $location, $routeParams, $q, AttendenceService , ExamService , TeacherService , courseService , studentService , ExamService, AttendenceService, TeacherService, studentService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = courseService.get({_id: $scope.id});
        	$scope.external._Exam_course = ExamService.findBy_course({key: $scope.id});
        	$scope.external._Attendence_course = AttendenceService.findBy_course({key: $scope.id});
        	$scope.external._Teacher_course = TeacherService.findBy_course({key: $scope.id});
        	$scope.external._student_course = studentService.findBy_course({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new courseService();
        	$scope.external._Exam_course = [];
        	$scope.external._Attendence_course = [];
        	$scope.external._Teacher_course = [];
        	$scope.external._student_course = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/courses/');
    		});
    	}
    	
    	$scope.remove = function(){
    		courseService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/courses/');
    		});
    	}
    	
    		
        //manage External relation _course
        		
    	$scope.list_Exam_course = ExamService.query();
    	
    		
        //manage External relation _course
        		
    	$scope.list_Attendence_course = AttendenceService.query();
    	
    		
        //manage External relation _course
        		
    	$scope.list_Teacher_course = TeacherService.query();
    	
    		
        //manage External relation _course
        		
    	$scope.list_student_course = studentService.query();
    	
}]);