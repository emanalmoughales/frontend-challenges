const container = document.getElementById('container');
const DailyBtn = document.querySelector('.DailyBtn');
const WeeklyBtn = document.querySelector('.WeeklyBtn');
const MonthlyBtn = document.querySelector('.MonthlyBtn');
let dataStorage = [];
const populateDOM = (data) => {
    data.forEach((item) => {
        container.innerHTML +=
            `<div class="rounded-2xl overflow-hidden ${item.color} md:w-55 w-full">
            <img src=${item.img} alt="" class="justify-self-end mr-4 -mt-2 h-16 w-16 object-contain">
            <div class="bg-Navy-2 p-5 rounded-2xl -mt-5 relative z-20 h-full w-full [&:hover:not(:has(svg:hover))]:bg-Royal-Blue-Purple cursor-pointer">
            <div class="flex justify-between items-center mb-6">
                <h6 class="text-sm">${item.title}</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="5" class="fill-Navy-3 hover:fill-white "><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill-rule="evenodd"/></svg>
            </div>
               
                <div class="satistics flex flex-row justify-between items-center md:items-start md:justify-start md:flex-col">
                    <h1 class="current_statistics text-5xl font-extralight mb-4">${item.timeframes.weekly.current}hrs</h1>
                    <h6 class="previous_statistics text-xs text-Navy-3/80">Last Week - ${item.timeframes.weekly.previous}hrs</h6>
                </div>
            </div>
        </div>`;
    });
}
const updateValues = (timeframe) => {
    const currentStats = document.querySelectorAll('.current_statistics');
    const previousStats = document.querySelectorAll('.previous_statistics');

    currentStats.forEach((element, index) => {
        element.textContent =
            `${dataStorage[index].timeframes[timeframe].current}hrs`;
    });

    previousStats.forEach((element, index) => {
        let label = timeframe === 'daily' ? 'Day' : timeframe === 'weekly' ? 'Week' : 'Month';
        element.textContent =
            `Last ${label} - ${dataStorage[index].timeframes[timeframe].previous}hrs`;
    });
};

fetch('./data.json').then((response) => {
    if (!response.ok) return console.log('Oops! Something went wrong.');

    return response.json();
}).then((data) => {
    dataStorage = data;
    populateDOM(data);
});

DailyBtn.addEventListener('click', () => {
    updateValues('daily');
    DailyBtn.classList.add("text-Navy-3");
    WeeklyBtn.classList.remove("text-Navy-3");
    MonthlyBtn.classList.remove("text-Navy-3");

});

WeeklyBtn.addEventListener('click', () => {
    updateValues('weekly');
    WeeklyBtn.classList.add("text-Navy-3");
    DailyBtn.classList.remove("text-Navy-3");
    MonthlyBtn.classList.remove("text-Navy-3");

});

MonthlyBtn.addEventListener('click', () => {
    updateValues('monthly');
    MonthlyBtn.classList.add("text-Navy-3");
    DailyBtn.classList.remove("text-Navy-3");
    WeeklyBtn.classList.remove("text-Navy-3");
});
