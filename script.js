
const regionChapters = document.querySelectorAll(".region-chapter .district-name button");

regionChapters.forEach((dis) => {
    dis.addEventListener("click", (e) => {
        const bgColor = dis.style.backgroundColor;
        if(bgColor == ""){
            dis.style.backgroundColor = "rgb(182, 31, 46)";
            dis.style.color = "white";
        } else {
            dis.style.backgroundColor = "white";
            dis.style.color = "black";
        }
        dis.style.transition = "0.3s all linear";
    })
})

let valueDisplays = document.querySelectorAll(".num")
let interval = 5000;

valueDisplays.forEach(values => {
    let startValue = 0;
    let endValue = parseInt(values.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
        if(startValue >= endValue - 50){
            startValue += 1;
        } else {
            startValue += 30;
        }
        values.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
})

let navBar = document.querySelectorAll(`.nav-content ul li:not(li[class="nonStyle"])`);

navBar.forEach(content => {
    content.addEventListener("click", () => {
        if(content.style.listStyle == "inside"){
            content.style.listStyle = "none"
            content.style.color = "black"
        } else {
            content.style.listStyle = "inside"
            content.style.color = "rgb(182, 31, 46)"
        }
        content.style.transition = "0.3s all linear";
    })
})


    