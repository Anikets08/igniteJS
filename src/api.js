const base_url = "https://api.rawg.io/api/" ;

//getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() - 8  ;
    if (month < 10) {
        return `0${month}`;
    }else{
        return month;
    }
}


const getCurrentDate = () => {
    const date = new Date().getDate();
    if (date < 10) {
        return `0${date}`;
    }else{
        return date;
    }
   
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDate();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const previousDate = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextDate = `${currentYear + 1}-${currentMonth}-${currentDay}`;


const popular_games = `games?dates=${previousDate},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesUrl = () =>  `${base_url}${popular_games}`;
