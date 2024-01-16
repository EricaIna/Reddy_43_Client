export function backgroundScheduler_1() {
    setTimeout(() => {
        document.querySelector(".img1").style.opacity = 0;
        document.querySelector(".img2").style.opacity = 1;
        document.querySelector(".img3").style.opacity = 1;
        order(["-3", "-1", "-2"], () => { backgroundScheduler_2() }, 15000);
    }, 30000);
}

function backgroundScheduler_2() {
    setTimeout(() => {
        document.querySelector(".img1").style.opacity = 1;
        document.querySelector(".img2").style.opacity = 0;
        document.querySelector(".img3").style.opacity = 1;
        order(["-2", "-3", "-1"], () => { backgroundScheduler_3() }, 15000);
    }, 30000);
}

function backgroundScheduler_3() {
    setTimeout(() => {
        document.querySelector(".img1").style.opacity = 1;
        document.querySelector(".img2").style.opacity = 1;
        document.querySelector(".img3").style.opacity = 0;
        order(["-1", "-2", "-3"], () => { backgroundScheduler_1() }, 15000);
    }, 30000);
}

function order(array, callback, time) {
    setTimeout(() => {
        document.querySelector(".img1").style.zIndex = array[0];
        document.querySelector(".img2").style.zIndex = array[1];
        document.querySelector(".img3").style.zIndex = array[2];
        callback();
    }, time);
}
