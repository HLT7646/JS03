function addSecondsToTime(time: string, x: number) {
    if (x > 1000) {
        throw new Error("Giá trị x không được vượt quá 1000");
    }
    const timeParts = time.split(":");

    let hours = parseInt(timeParts[0]);
    let minutes = parseInt(timeParts[1]);
    let seconds = parseInt(timeParts[2]);


    seconds += x;


    if (seconds >= 60) {
        const minutesToAdd = Math.floor(seconds / 60);
        minutes += minutesToAdd;
        seconds %= 60;
    }


    if (minutes >= 60) {
        const hoursToAdd = Math.floor(minutes / 60);
        hours += hoursToAdd;
        minutes %= 60;
    }


    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

    return formattedTime;
}


function padZero(number: number) {
    return number.toString().padStart(2, "0");
}
try {
    const newTime = addSecondsToTime("12:30:45", 1000);
    console.log(newTime); //12:47:25
} catch (error:any) {
    console.log(error.message);
}