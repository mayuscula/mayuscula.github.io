app.controller('corrector-controller', function($scope, $route){
	$scope.$route = $route;

	$scope.scanner = function(){
		$scope.text2 = "";
		$scope.text1 = $scope.text1.replace(/\s\s+/g, ' ')
		var palabras = $scope.text1.split(/([.][ \s+]?|[?][ \s+]?|[¿][ \s+]?|[!][ \s+]?|[:][ \s+]?|[¡][ \s+]?\n+)/);

		palabras.forEach(function(palabra){
			$scope.text2 += (palabra.charAt(0).toUpperCase() + palabra.slice(1));
		}, this);
	}
	
})