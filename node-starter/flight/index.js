/**
 * Module : Flight 0.0.1v
 * Created by Sampath Thennakoon on 06/09/2015.
 */

module.exports = function (info){

    var values = {
        number : null,
        origin : null,
        destination : null,
        departs : null,
        arrivals : null,
        actualDepart : null,
        actualArrival : null
    }

    for(var prop in values){
        if(values[prop] !== 'undefined' ){
            values[prop] = info[prop]
        }
    }

    var functions = {
        triggerDepart : function(){
            values.actualDepart = Date.now();
        },
        triggerArrival : function(){
            values.actualArrival = Date.now();
        },
        getFlightInfo : function(){
            return values;
        }
    }

    return functions;

}
