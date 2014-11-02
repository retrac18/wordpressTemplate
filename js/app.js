'use strict';

var app = angular.module( 'myApp',
		[ 'ngRoute' ] );

app.config( [ '$routeProvider',	 function( $routeProvider ) {
	$routeProvider
		.when( '/', {
			templateUrl : 'partials/tpl/home.tpl.html'
		})
		.when( '/Aboutus', {
			templateUrl : 'partials/tpl/about.tpl.html'
		})
		.when( '/Contactus', {
			templateUrl : 'partials/tpl/contact.tpl.html'
		})
		.when( '/Portfolio', {
			templateUrl : 'partials/tpl/portfolio.tpl.html'
		})
		.otherwise( {
			redirectTo : '/'
		} );
} ] );
