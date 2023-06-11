const theme = {
    one: {bg: ['#3a4764', '#232c43', '#182034'],
    keys: ['#637097', '#404e72', '#d03f2f', '#93261a', '#eae3dc', '#b4a597'],
    text: ['#ffffff', '#444b5a', "#ffffff"]},

    two: {bg: ["#e6e6e6", '#d1cccc', "#ededed"],
    keys: ["#377f86", "#1b5f65", "#ca5502", "#893901", "#e5e4e1", "#a69d91" ],
    text: ["#35352c",,"#35352c", "#ffffff"]},

    three: {bg: ["#160628", "#1d0934", "#1d0934"],
    keys: ["#58077d", "#bc15f4", "#00e0d1", "#6cf9f2", "#341c4f", "#871c9c"],
    text: ["#ffe53d", "#ffffff", "#1b2428"]}
}

// const floatPosition = {one: "5px", two: "29px", three: "58px"}
const floatPosition =[ "5px", "29px", "58px"]

function defineTheme (num) {
    let outlet
    if (num===0){outlet = theme.one}
    else if (num===1){outlet = theme.two}
    else if (num===2){outlet = theme.three}
    return outlet
}


// console.log('the hex code for first key text is ' + theme.first.text[1])
// const themes = document.querySelector('.slider button')



// function resetSliderColor () {
//     themes.style.backgroundColor = 'transparent'
// }
// instead of making everything transparent and only the theme in focus to have a color
// we are going to change the relative position of a single node
// probably using the ForEach method
// better still. create another div called floater, and make it move depending on the button you press

function changeTheme (numbers) {
    const selectedTheme = defineTheme(numbers[0])
    // console.log(now)
    let root = document.documentElement.style
    // console.log(root)
    // set BG properties
    root.setProperty("--body-bg", selectedTheme.bg[0])
    root.setProperty("--keypad-bg", selectedTheme.bg[1])
    root.setProperty("--display-bg", selectedTheme.bg[2])
    // set key Properties
    root.setProperty("--del-reset-bg", selectedTheme.keys[0])
    root.setProperty("--del-reset-shadow", selectedTheme.keys[1])
    root.setProperty("--equal-bg", selectedTheme.keys[2])
    root.setProperty("--equal-shadow", selectedTheme.keys[3])
    root.setProperty("--other-key-bg", selectedTheme.keys[4])
    root.setProperty("--other-key-shadow", selectedTheme.keys[5])
    // set text Properties
    root.setProperty("--display-header-color", selectedTheme.text[0])
    root.setProperty("--key-color", selectedTheme.text[1])
    root.setProperty("--equal-color", selectedTheme.text[2])

    


    document.querySelector('.floater').style.left = floatPosition[numbers[0]]
    // resetSliderColor()
    // document.querySelector(':root').style
    // console.log(document.querySelector(':root'))
}



// function linkColors (x) {
    
// }

// ALL COLOR TAGS
//     --body-bg: #3a4764;
//     --keypad-bg: #232c43;
//     --display-bg: #182034;

//     --del-reset-bg: #637097;
//     --del-reset-shadow: #637097;

//     --equal-bg: #d03f2f;
//     --equal-shadow: #d03f2f;

//     --other-key-bg:#eae3dc;
//     --other-key-shadow:#eae3dc;

//     --display-header-color: #ffffff;
//     --key-color: #444b5a;
//     --equal-color: #ffffff;
