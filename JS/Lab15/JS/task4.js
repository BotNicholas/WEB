let date = new Date();

function now(){
    alert(date = new Date());
}

function yesterday(){
    let yesterday = new Date();
    Object.assign(yesterday, date);
    yesterday.setDate(date.getDate() - 1)
    alert(yesterday);
}

function tenYearsAgo(){
    let tenYeas = new Date();

    Object.assign(tenYeas, date);

    tenYeas.setFullYear(date.getFullYear() - 10);

    alert(tenYeas);
}

function afterAWeek(){
    let aWeakAfter = new Date();

    Object.assign(aWeakAfter, date);

    aWeakAfter.setDate(date.getDate() + 7);

    alert(aWeakAfter);
}
