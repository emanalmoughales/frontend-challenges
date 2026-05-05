const shareBtn = document.querySelector('.share_icon_box');
const shareBox = document.getElementById('share_box');
const userInf = document.querySelector('.user_info');
const grayInfBox = document.querySelector('.info_box')
const mq = window.matchMedia("(max-width: 29.1875em)")
const mobile = shareBtn.addEventListener('click', () => {
    shareBox.classList.toggle('mobileShow');
    shareBtn.classList.toggle('mobileActive');
    userInf.classList.toggle('hidden');
    grayInfBox.classList.toggle('gray');
})
const desktop = shareBtn.addEventListener('click', () => {
    shareBox.classList.toggle('show');
    shareBtn.classList.toggle('active');
})
if (mq.matches) {
    mobile
} else {
    desktop
}

//another solution
// function handleClick() {
//     if (mq.matches) {
//         shareBox.classList.toggle('mobileShow');
//         shareBtn.classList.toggle('mobileActive');
//         userInf.classList.toggle('hidden');
//         grayInfBox.classList.toggle('gray');
//         shareBox.classList.remove('show');
//         shareBtn.classList.remove('active');

//     } else {
//         shareBox.classList.toggle('show');
//         shareBtn.classList.toggle('active');
//     }
// }
// shareBtn.addEventListener('click', handleClick);
// mq.addEventListener('change', () => {
//     shareBox.classList.remove('show', 'mobileShow');
//     shareBtn.classList.remove('active', 'mobileActive');
//     userInf.classList.remove('hidden');
//     grayInfBox.classList.remove('gray');
// });

