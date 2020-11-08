var app = angular.module("myApp", ["firebase"])

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var config = {
    apiKey: "AIzaSyBk-ycCQJllR1q1PyiXNJlFdp1qzPzk5Qk",
    authDomain: "aolmo-github.firebaseapp.com",
    databaseURL: "https://aolmo-github.firebaseio.com",
    projectId: "aolmo-github",
    storageBucket: "aolmo-github.appspot.com",
    messagingSenderId: "265933183209",
    appId: "1:265933183209:web:ec7392496af49c24e6b878",
    measurementId: "G-MV0WEJQ31D"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();
// https://www.youtube.com/watch?v=gquOofANUGM
app.controller ("MyCtrl", function($firebaseObject) {
    var ref = firebase.database().ref();
    $scope.name = $firebaseObject(ref)
})


















// app.controller ("app", function($scope, $http) {
//     $scope.readCSV = function() {
//         $http.get('./src/assets/a.json').then($scope.processData);
//     };
//
//     $scope.processData = function(allText) {
//         // split content based on new line
//         var allTextLines = allText.split(/\r\n|\n/);
//         var headers = allTextLines[0].split(',');
//         var lines = [];
//
//         for ( var i = 0; i < allTextLines.length; i++) {
//             // split content based on comma
//             var data = allTextLines[i].split(',');
//             if (data.length == headers.length) {
//                 var tarr = [];
//                 for ( var j = 0; j < headers.length; j++) {
//                     tarr.push(data[j]);
//                 }
//                 lines.push(tarr);
//             }
//         }
//         $scope.data = lines;
//     };
// });
