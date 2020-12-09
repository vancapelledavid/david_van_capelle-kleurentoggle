const hamburger = document.querySelector('.icon');
const colorBody = document.querySelector('body');
const colorMenu = document.querySelector('.colors');
const colorMenuBars = document.querySelectorAll('.colors__bar');
const colorRadioButtons = document.querySelectorAll('.colors__radio input')
const colorClassArray = ['gray', 'red', 'orange', 'purple', 'green'];
const h1 = document.querySelector('.colors__page');
const container = document.getElementById('container')

const kleurenFunctie = (element, index) => {
    let newBodyColor = colorClassArray[index];
    element.classList.add(newBodyColor);
    element.addEventListener('click', () => {
        colorBody.classList.remove(...colorClassArray);
        colorBody.classList.add(newBodyColor);
        colorMenu.classList.add('colors--hidden');
        colorRadioButtons[index].checked = true;
        h1.innerHTML = newBodyColor;
    });
}
colorMenuBars.forEach(kleurenFunctie);
colorRadioButtons.forEach(kleurenFunctie);

// Deze kan uitgeschakels vanwege hoverfuncties:
// hamburger.addEventListener('click', () => {
//     colorMenu.classList.remove('colors--hidden');
// })

hamburger.addEventListener('mouseenter', () => {
    colorMenu.classList.remove('colors--hidden')
})
container.addEventListener('mouseleave', () => {
    colorMenu.classList.add('colors--hidden')
})

//Het werkt, maar later uitwerken naar for-loop of .forEach
//voor nu al veel te veel tijd aan deze opdracht besteed
document.addEventListener('keydown', (event) => {
    console.log(event);
    if (event.key === '1') {
        colorBody.classList.remove(...colorClassArray);
        colorBody.classList.add('gray');
        colorRadioButtons[0].checked = true;
        h1.innerHTML = 'gray';
    } else if (event.key === '2') {
        colorBody.classList.remove(...colorClassArray);
        colorBody.classList.add('red');
        colorRadioButtons[1].checked = true;
        h1.innerHTML = 'red';
    } else if (event.key === '3') {
        colorBody.classList.remove(...colorClassArray);
        colorBody.classList.add('orange');
        colorRadioButtons[2].checked = true;
        h1.innerHTML = 'orange';
    } else if (event.key === '4') {
        colorBody.classList.remove(...colorClassArray);
        colorBody.classList.add('purple');
        colorRadioButtons[3].checked = true;
        h1.innerHTML = 'purple';
    } else if (event.key === '5') {
        colorBody.classList.remove(...colorClassArray);
        colorBody.classList.add('green');
        colorRadioButtons[4].checked = true;
        h1.innerHTML = 'green';
    }
})

// Onderstaande is voor mezelf om wellicht later opdracht verder uit te werken, 
// & reminder how I did the coding

// colorMenuBars.forEach(function (element, index){
//     let newBodyColor = colorClassArray[index];
//     element.classList.add(newBodyColor);
//  })

// colorMenuBars.forEach((element, index) => {
//     let newBodyColor = colorClassArray[index];
//     element.classList.add(newBodyColor);
//     element.addEventListener('click', () => {
//         colorBody.classList.remove(...colorClassArray);//('gray', 'red', 'orange', 'purple', 'green');
//         colorBody.classList.add(newBodyColor);
//         colorMenu.classList.add('colors--hidden');
//         colorRadioButtons[index].checked = true;
//         h1.innerHTML = newBodyColor;

//     });
// })

// colorRadioButtons.forEach((element, index) => {
//     let newBodyColor = colorClassArray[index];
//     element.classList.add(newBodyColor);
//     element.addEventListener('click', () => {
//         colorBody.classList.remove(...colorClassArray);//('gray', 'red', 'orange', 'purple', 'green');
//         colorBody.classList.add(newBodyColor);
//         colorMenu.classList.add('colors--hidden');
//         colorRadioButtons[index].checked = true;
//         h1.innerHTML = newBodyColor;
//     });
// })


