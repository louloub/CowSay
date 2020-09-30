let name = 'Harold Malécot';
let campus = 'Toulouse';

const myInfos = () => {
    var cowsay = require("cowsay");

    console.log(cowsay.say({
        text : ("Hello I'm " +name+ " from " +campus+ "Campus"),
        e : "oO",
        T : "U "
    }));
};

module.exports = myInfos;