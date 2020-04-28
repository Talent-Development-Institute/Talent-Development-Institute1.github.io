var fiveTitleArr = ['TRAIN: learn the fundamentals.',
    'TRY: build a capstone project.',
    'TEST: earn a certification.', 'TRIAL: compete with peers.', 'TRANSCEND: work with the real world.'
];
var fiveDescArr = ['Students are taught from fundamental first principles to the latest cutting-edge techniques and technologies through sets of richly-interactive on-demand and in-class courses, instructed by certified trainers.',
    'Students apply and reinforce their knowledge by designing and creating applications around a relevant theme to their program. ',
    'Students take a final certification examination to earn the right and gain the privileges of being a certified expert in the program area.        ',
    'Students take part in some competitions relevant to the program area, to taste success and failure, to see where they stand within the market, and to make lasting relevant connections. Due to the need for well-thought-out solutions in the program areas, TDI never organizes nor endorses half- or full-day hackathons, or contests that encourage hasty problem solving.', 'Students that earned an Award of Merit within the competitions have access to mentoring and career counselling services, and are also invited to exclusive internship, employment, and investment opportunities from the TDI network of partners, which include government, academic, and corporate entities from all over the world.'
];


var header = document.getElementById("headerForBtn");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


var defa = document.getElementById('onClickChange0');

document.getElementById('onClickChange0').onclick = onClickChange0;

function onClickChange0() {
    changeInfoFromIndex(0);
}

document.getElementById('onClickChange1').onclick = onClickChange1;

function onClickChange1() {
    changeInfoFromIndex(1);
}

document.getElementById('onClickChange2').onclick = onClickChange2;

function onClickChange2() {
    changeInfoFromIndex(2);
}

document.getElementById('onClickChange3').onclick = onClickChange3;

function onClickChange3() {
    changeInfoFromIndex(3);
}

document.getElementById('onClickChange4').onclick = onClickChange4;

function onClickChange4() {
    changeInfoFromIndex(4);
}

function changeInfoFromIndex(i) {
    defa.classList.remove("defaultActive");
    // document.getElementById('onClickChange'+i).style.backgroundColor = "#0062cc";
    document.getElementById('fiveTitle').innerHTML = fiveTitleArr[i];
    document.getElementById('fiveDesc').innerHTML = fiveDescArr[i];
    return false;
}