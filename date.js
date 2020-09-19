//jshint esversion: 6

exports.getDate = function(){
    let d = new Date();
    const options = {
        month: "long",
        day: "numeric",
        year: "numeric"
    };
    return d.toLocaleDateString("en-US", options);
};