module.exports.getDate =
    () => {
    //get the current day's name
    let today = new Date(); //returns the current date and time 
    var options = {
        weekday : 'long',
        day : 'numeric',
        month : 'long',
        year : 'numeric'
    };
    var day = today.toLocaleDateString('en-US',options);
    return day;
};
