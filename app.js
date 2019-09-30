import angular from 'angular';

// Create an angular module named 'app'.
angular.module('app', []);

// Put application code here before bootstrap is called.
angular.module('app').controller('MainCtrl', function ($scope, $timeout, $interval){
 var keys = {37: 1, 38: 1, 39: 1, 40: 1};

	//ForUpperBanner
	var message = "Get you to your destination in a better and safer way.";
	$scope.img1left = '1200px';
	$scope.upperBannerHeight= '100%';
	$scope.lowerBannerHeight= '0%';
	$scope.upperBannerHValue = 100;
	$scope.upChildTop = '170px';
	$scope.upChildTopValue = 170;
	var neonbasecolor="rgb(202,220,79)";
	var neontextcolor="rgb(93,93,93)";
	var n=message.length-1;
	var number = 0;
	$scope.show1 = false;
	$scope.opacity = 0;

	$(document).ready(function(){
		$(this).scrollTop(0);
	});
	
	function preventDefault(e) {
		e = e || window.event;
		if (e.preventDefault)
		    e.preventDefault();
		e.returnValue = false;  
	   }
	   
	   function preventDefaultForScrollKeys(e) {
		  if (keys[e.keyCode]) {
			 preventDefault(e);
			 return false;
		  }
	   }
	function disableScroll() {
		if (window.addEventListener) // older FF
		    window.addEventListener('DOMMouseScroll', preventDefault, false);
		document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
		window.onwheel = preventDefault; // modern standard

		document.onkeydown  = preventDefaultForScrollKeys;
	   }

	   function enableScroll() {
		if (window.removeEventListener)
		    window.removeEventListener('DOMMouseScroll', preventDefault, false);
		document.removeEventListener('wheel', preventDefault, {passive: false}); // Enable scrolling in Chrome
		window.onmousewheel = document.onmousewheel = null; 
		window.onwheel = null; 
		window.ontouchmove = null;  
		document.onkeydown = null;  
	 }

	disableScroll();

	document.getElementById("message1").innerHTML=('<font color="'+neonbasecolor+'">')
	for (var index=0;index<message.length;index++) {
		document.getElementById("message1").innerHTML += ('<span id="neonlight'+index+'" style="font-family:myFirstFont;">'+message.charAt(index)+'</span>');
	}
	document.getElementById("message1").innerHTML +=('</font>');

	var timer = $interval(function(){
		$scope.img1left = parseInt($scope.img1left) - 10 + 'px';
	},15,90);

	var timer = $interval(function(){},5,40).then(function(){
		var timer1 = $interval(function(){
			document.getElementById("neonlight"+number).style.color=neontextcolor;
			number++;
		},15,n+1);
	});
			 
	$timeout(function(){$interval(function(){                           
		$scope.img1left = parseInt($scope.img1left) - 5 + 'px';
	},100,10);},1300);

	$timeout(function(){
		$scope.show3=true;
		var timer = $interval(function(){
			$scope.upperBannerHValue = $scope.upperBannerHValue - ($scope.upperBannerHValue*0.04);
			$scope.upChildTopValue = $scope.upChildTopValue - ($scope.upChildTopValue*0.2);
			$scope.upChildTop = $scope.upChildTopValue + 'px';
			$scope.upperBannerHeight=  $scope.upperBannerHValue + '%';
			$scope.lowerBannerHeight=  100 - $scope.upperBannerHValue + '%';
		},15,20);
	},3500);

	$timeout(function(){
		$scope.show1=true;
		document.getElementById('message1').style.width = '57%';
	},3000);

	//for Lower Banner
	$scope.show3 = false;
	$scope.show4=false;
	$scope.show5=false;
	$scope.msg2padding='0px';
	 
	$timeout(function(){$scope.show2=true;},2400);
  
	$timeout(function(){
		$scope.show4=true; 
		$scope.show5=true; 
		$scope.msg2padding='80px';
		enableScroll();
	},3600);

	$scope.wall_top = '-180px';
	$scope.vase_pos = '155px';
	$scope.vase_top = '-630px';
	$scope.shelf_top = '-780px';
	$scope.sofa_top = '-420px';
	$scope.door_top = '-647px';
	$scope.door_pos = '-210px';
	$scope.bag_top = '-570px';
	$scope.char_right = '-220px';
	$scope.bag_left = '0px';
	$scope.window_top = '-650px';
	$scope.clock_top = '-690px';
	$scope.char_top = '-478px';
	$scope.pos1 = 'relative';
    $scope.w='97%';
	$scope.bagtop = '-420px';
	$scope.opacity = '1';

	function check() {
		var timer = $interval(function(){
			$scope.vase_pos = parseInt($scope.vase_pos) - 1 + 'px';
			$scope.shelf_top = parseInt($scope.shelf_top) + 1 + 'px';
			$scope.sofa_top = parseInt($scope.sofa_top) - 1 + 'px';
			$scope.door_pos = parseInt($scope.door_pos) + 1.5 + 'px';
			$scope.char_right = parseInt($scope.char_right) + 5 + 'px';
		},6,154); 

		var timer = $interval(function(){},20,100).then(function(){
			$scope.bag_top = parseInt($scope.bag_top) + 25 + 'px';
			$scope.bag_left = parseInt($scope.bag_left) - 18 + 'px';

			var timer1 = $interval(function(){
				$scope.char_right = parseInt($scope.char_right) + 5 + 'px';
				$scope.bag_left = parseInt($scope.bag_left) - 5 + 'px';
			},10,120);
		});
	}
			
	$scope.k = 0;
	$(window).scroll(function(){
		$("#mainDiv").css("opacity", 1 - $(window).scrollTop() / 1050);
		$("#secondPage").css("opacity", 0 +  $(window).scrollTop() / 700);
		$scope.opacity = document.getElementById('secondPage').style.opacity;
		if($scope.k === 0 )
		check();
		$scope.k ++;
	});
});

// Bootstrap angular onto the 'app' element, injecting the 'app' module.
angular.bootstrap(document.getElementById('app'), ['app']);
