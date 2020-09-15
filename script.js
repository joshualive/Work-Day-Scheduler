let todaysDate = moment().format("MMMM Do YYYY")
let dateDisplay = $('#currentDay')
let currentHour = moment().format("H")
let nineAM = document.getElementById('nine')
let tenAM = document.getElementById('ten')
let elevenAM = document.getElementById('eleven')
let twelvePM = document.getElementById('twelve')
let onePM = document.getElementById('one')
let twoPM = document.getElementById('two')
let threePM = document.getElementById('three')
let fourPM = document.getElementById('four')
let fivePM = document.getElementById('five')

// Display current date in jumbotron
dateDisplay.append(todaysDate)

$(document).ready( function () {
    nineBlock()
    tenBlock()
    elevenBlock()
    twelveBlock()
    oneBlock()
    twoBlock()
    threeBlock()
    fourBlock()
    fiveBlock()
});

//Nine Row
$('#btn-nine').on('click', function () {
    let nineEvents = nineAM.value
    localStorage.setItem('nineEvents', nineEvents)
})
function nineBlock() {
    let nineRecall = localStorage.getItem('nineEvents')
    $('#nine').text(nineRecall)
    if (currentHour < 9) {
        nineAM.classList.add('future')
    }
    else if (currentHour == 9) {
        nineAM.classList.add('present')
    }
    else {
        nineAM.classList.add('past')
    }
}

// Ten Row
$('#btn-ten').on('click', function () {
    let tenEvents = tenAM.value
    localStorage.setItem('tenEvents', tenEvents)
})
function tenBlock() {
    let tenRecall = localStorage.getItem('tenEvents')
    $('#ten').text(tenRecall)
    if (currentHour < 10) {
        tenAM.classList.add('future')
    }
    else if (currentHour == 10) {
        tenAM.classList.add('present')
    }
    else {
        tenAM.classList.add('past')
    }
}

//Eleven Row
$('#btn-eleven').on('click', function () {
    let elevenEvents = elevenAM.value
    localStorage.setItem('elevenEvents', elevenEvents)
})
function elevenBlock() {
    let elevenRecall = localStorage.getItem('elevenEvents')
    $('#eleven').text(elevenRecall)
    if (currentHour < 11) {
        elevenAM.classList.add('future')
    }
    else if (currentHour == 11) {
        elevenAM.classList.add('present')
    }
    else {
        elevenAM.classList.add('past')
    }
}

//Twelve Row
$('#btn-twelve').on('click', function () {
    let twelveEvents = twelvePM.value
    localStorage.setItem('twelveEvents', twelveEvents)
})
function twelveBlock() {
    let twelveRecall = localStorage.getItem('twelveEvents')
    $('#twelve').text(twelveRecall)
    if (currentHour < 12) {
        twelvePM.classList.add('future')
    }
    else if (currentHour == 12) {
        twelvePM.classList.add('present')
    }
    else {
        twelvePM.classList.add('past')
    }
}

//One Row
$('#btn-one').on('click', function () {
    let oneEvents = onePM.value
    localStorage.setItem('oneEvents', oneEvents)
})
function oneBlock() {
    let oneRecall = localStorage.getItem('oneEvents')
    $('#one').text(oneRecall)
    if (currentHour < 13) {
        onePM.classList.add('future')
    }
    else if (currentHour == 13) {
        onePM.classList.add('present')
    }
    else {
        onePM.classList.add('past')
    }
}

//Two Row
$('#btn-two').on('click', function () {
    let twoEvents = twoPM.value
    localStorage.setItem('twoEvents', twoEvents)
})
function twoBlock() {
    let twoRecall = localStorage.getItem('twoEvents')
    $('#two').text(twoRecall)
    if (currentHour < 14) {
        twoPM.classList.add('future')
    }
    else if (currentHour == 14) {
        twoPM.classList.add('present')
    }
    else {
        twoPM.classList.add('past')
    }
}

// Three Row
$('#btn-three').on('click', function () {
    let threeEvents = threePM.value
    localStorage.setItem('threeEvents', threeEvents)
})
function threeBlock() {
    let threeRecall = localStorage.getItem('threeEvents')
    $('#three').text(threeRecall)
    if (currentHour < 15) {
        threePM.classList.add('future')
    }
    else if (currentHour == 15) {
        threePM.classList.add('present')
    }
    else {
        threePM.classList.add('past')
    }
}

//Four Row
$('#btn-four').on('click', function () {
    let fourEvents = fourPM.value
    localStorage.setItem('fourEvents', fourEvents)
})
function fourBlock() {
    let fourRecall = localStorage.getItem('fourEvents')
    $('#four').text(fourRecall)
    if (currentHour < 16) {
        fourPM.classList.add('future')
    }
    else if (currentHour == 16) {
        fourPM.classList.add('present')
    }
    else {
        fourPM.classList.add('past')
    }
}

//Five Row
$('#btn-five').on('click', function () {
    let fiveEvents = fivePM.value
    localStorage.setItem('fiveEvents', fiveEvents)
})
function fiveBlock() {
    let fiveRecall = localStorage.getItem('fiveEvents')
    $('#five').text(fiveRecall)
    if (currentHour < 17) {
        fivePM.classList.add('future')
    }
    else if (currentHour == 17) {
        fivePM.classList.add('present')
    }
    else {
        fivePM.classList.add('past')
    }
}

