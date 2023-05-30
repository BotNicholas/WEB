function left(){
    //1h -> 60min -> 60*(60sec) == 3600s
    let now = new Date();

    // return 24*3600 - (now.getHours()*3600 + now.getMinutes()*60 + now.getSeconds());
    alert(`Till the end of the day left ${24*3600 - (now.getHours()*3600 + now.getMinutes()*60 + now.getSeconds())} seconds`);

}