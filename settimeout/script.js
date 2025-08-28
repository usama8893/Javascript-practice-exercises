
let count = 0;
let progress = document.querySelector(".progress-fill");
let progressCount = document.querySelector("#progress-count")

let interval = setInterval(
    function(){
        if (count <= 99) {
            count++;
            progress.style.width = `${count}%`;
            progressCount.textContent = `${count}%`;
        } else {
            document.querySelector("h4").textContent = "Downloaded.";
            clearInterval(interval);
        }
    }, 1000/100
);