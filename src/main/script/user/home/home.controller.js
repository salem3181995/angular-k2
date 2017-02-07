angular.module("myApp")
    .controller('HomeController', function ($scope) {
        $scope.message = "con buom";
        $scope.students = [
            {
                id: 1,
                name: 'phap'
            },
            {
                id: 2,
                name: 'duyen'
            },
            {
                id: 3,
                name: 'son'
            }
        ];
        $scope.initStudent = function initStudent() {
            $scope.student={
                id:'',
                name:''
            };
        };
        $scope.addStudent = function addStudent( ) {
            $scope.students.push($scope.students);
            $scope.initStudent();

        };
            $scope.initStudent();

    }
    )
;