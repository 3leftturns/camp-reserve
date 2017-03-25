var campReserve = angular.module('campReserve', []);

var campsites = function(lat, long, radius) {
    var endpoint = "";
    var params = getParams(lat, long, radius)
    this.campsites = getHttp(endpoint, )
};