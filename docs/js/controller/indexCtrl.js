/* ****************************************************** */
/*
/* Angular Controller comunication aplication.
/* 
/* Var @var moduleApp "Recebe angularModule"  
/* Desenvolvido por Matheus Ferreira <maathe.f@gmail.com>
/*
/* ****************************************************** */
moduleApp.controller('indexCtrl', function($scope, $location, $http){

	var newValue;
	$scope.statusmenu = 'home';	

	$scope.changeStatus = function(newValue){
		$scope.statusmenu =  newValue;
	};

});  