/**
 * Module : Flight 0.0.3v
 * Created by Sampath Thennakoon on 06/09/2015.
 */

var count = 0,
    destinations = [];

var Flights = function(){
    this.data = {
        number : null,
        origin : null,
        destination : null,
        departs : null,
        arrivals : null,
        actualDepart : null,
        actualArrival : null
    }

    this.fill = function(info){
        for(var val in this.data){
            if(this.data[val] !== 'undefined' ){
                this.data[val] = info[val]
            }
        }
    }

    this.triggerDepart = function(){
        this.data.actualDepart = Date.now();
    }

    this.triggerArrival = function(){
        this.data.actualArrival = Date.now();
    }

    this.getFlightInfo = function(){
        return this.data;
    }

}

/*module.exports = Flights;

module.exports = function (info) {
    var instance = new Flights();
    instance.fill(info);
    return instance;
}*/

exports.create = function(info){
    var instance = new Flights();
    instance.fill(info);
    count++;
    if(destinations.indexOf(info['destination']) < 0 ){
        destinations.push(info['destination']);
    }
    return instance;
}

exports.getCount = function(info){
    return count;
}

exports.getDestinations = function(info){
    return destinations;
}
