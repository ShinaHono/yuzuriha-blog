const deviceType = document.getElementsByClassName("pc");

//将来的にはindexOfで()タッチした配列のインデックスを取得してそっからアドイベントリスナーできる様にしたい
// こんな感じで、、、function ev (event){console.log(deviceType.indexOf(event))};


deviceType[0].addEventListener('touchstart', ()=>{
    deviceType[0].classList.add("smart");
    // ev();
});
deviceType[0].addEventListener('touchmove', ()=>{
    deviceType[0].classList.add("smart");
    // ev();
});
deviceType[0].addEventListener('touchend', ()=>{
    deviceType[0].classList.remove("smart");
});
deviceType[0].addEventListener('touchstart', (event)=>{console.log(event)}
);

deviceType[1].addEventListener('touchstart', ()=>{
    deviceType[1].classList.add("smart");
});
deviceType[1].addEventListener('touchmove', ()=>{
    deviceType[0].classList.add("smart");
});
deviceType[1].addEventListener('touchend', ()=>{
    deviceType[1].classList.remove("smart");
});

deviceType[2].addEventListener('touchstart', ()=>{
    deviceType[2].classList.add("smart");
});
deviceType[2].addEventListener('touchmove', ()=>{
    deviceType[2].classList.add("smart");
});
deviceType[2].addEventListener('touchend', ()=>{
    deviceType[2].classList.remove("smart");
});

deviceType[3].addEventListener('touchstart', ()=>{
    deviceType[3].classList.add("smart");
});
deviceType[3].addEventListener('touchmove', ()=>{
    deviceType[3].classList.add("smart");
});
deviceType[3].addEventListener('touchend', ()=>{
    deviceType[3].classList.remove("smart");
});

deviceType[4].addEventListener('touchstart', ()=>{
    deviceType[4].classList.add("smart");
});
deviceType[4].addEventListener('touchmove', ()=>{
    deviceType[4].classList.add("smart");
});
deviceType[4].addEventListener('touchend', ()=>{
    deviceType[4].classList.remove("smart");
});

deviceType[5].addEventListener('touchstart', ()=>{
    deviceType[5].classList.add("smart");
});
deviceType[5].addEventListener('touchmove', ()=>{
    deviceType[5].classList.add("smart");
});
deviceType[5].addEventListener('touchend', ()=>{
    deviceType[5].classList.remove("smart");
});

deviceType[6].addEventListener('touchstart', ()=>{
    deviceType[6].classList.add("smart");
});
deviceType[6].addEventListener('touchmove', ()=>{
    deviceType[6].classList.add("smart");
});
deviceType[6].addEventListener('touchend', ()=>{
    deviceType[6].classList.remove("smart");
});

deviceType[7].addEventListener('touchstart', ()=>{
    deviceType[7].classList.add("smart");
});
deviceType[7].addEventListener('touchmove', ()=>{
    deviceType[7].classList.add("smart");
});
deviceType[7].addEventListener('touchend', ()=>{
    deviceType[7].classList.remove("smart");
});
