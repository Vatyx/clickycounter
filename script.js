var plant = new Audio('assets/ward.mp3');
plant.volume = .3;

window.onload = function() {
    var wards = document.getElementById("wards");
    var ward = document.getElementById("ward");
    var counter = document.getElementById("number");

    ward.addEventListener('click', function (e) {
        counter.innerHTML = (parseInt(counter.textContent) + 1).toString();

        var maxLeft = wards.offsetWidth - ward.offsetWidth * 2;
        var maxTop = wards.offsetHeight - ward.offsetHeight * 2;

        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))
        ward.style.left = (leftPos).toString() + "px"
        ward.style.top = (topPos).toString() + "px"
        var audioNode = plant.cloneNode(true);
        audioNode.volume = .3;
        audioNode.play();
    })
}

