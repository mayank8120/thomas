import { captchaSecretKey, captchaSiteKey } from '../constants/constants';

export let decimalRoundOff = (number) => {
    return Math.floor(number) == Math.round(number) ? Math.floor(number) : number
}

export let emptyDataCheck = (data) => {
    let flag;
    if (data == undefined || data == null || data == '') {
        flag = "N/A"
    } else {
        flag = data;
    }
    return flag;
}
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export let getMonthOf = (i) => {
    return monthNames[i];
}
export let getDayOf = (d) => {
    // localStorage.removeItem("saveHAList");

    return dayNames[d.getDay()];
}


export let finddate = (item, type) => {
    let date;
    if (type == 2) {
        let arr = JSON.parse(localStorage.getItem('saveHAList'));


        if (arr == '' || arr == null || arr == undefined || arr.length == 0) {

        } else {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][0] == item) {
                    date = arr[i][1];
                }
            }
        }
    } else {
        let arr = JSON.parse(localStorage.getItem('savePropList'));

        if (arr == '' || arr == null || arr == undefined || arr.length == 0) {

        } else {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][0] == item) {
                    date = arr[i][1];

                }
            }
        }
    }
    return date;
}

export let addOrRemoveProp = (item, dateI) => {

    let oldData = JSON.parse(localStorage.getItem('savePropList'));

    // const d = new Date(dateI);
    // console.log(d.getDate());
    // console.log(monthNames[d.getMonth()]);

    if (oldData == null || oldData == '' || oldData == undefined) {
        addFirstElementProp(item, dateI);
    } else {
        if (existCheck(oldData, item)) {
            removefromLocal(oldData, item);
        } else {
            addToLocal(oldData, item, dateI);
        }
    }

}


export let addOrRemoveHA = (item, dateI) => {

    let oldData = JSON.parse(localStorage.getItem('saveHAList'));

    if (oldData == null || oldData == '' || oldData == undefined) {
        addFirstElementHA(item, dateI);
    } else {
        if (existCheck(oldData, item)) {
            removefromLocalHA(oldData, item);
        } else {
            addToLocalHA(oldData, item, dateI);
        }
    }
}




function removefromLocal(arr, item) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == item) { }
        else {
            newArr.push(arr[i]);
        }
    }
    localStorage.setItem('savePropList', JSON.stringify(newArr));
}

function removefromLocalHA(arr, item) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == item) { }
        else {
            newArr.push(arr[i]);
        }
    }
    // localStorage.removeItem("save");
    localStorage.setItem('saveHAList', JSON.stringify(newArr));
}



function addFirstElementProp(item, dateI) {
    let newArr = [];
    let itemSS = [item, dateI];
    newArr.push(itemSS);
    localStorage.setItem('savePropList', JSON.stringify(newArr));
}
function addFirstElementHA(item, dateI) {
    let newArr = [];
    let itemSS = [item, dateI];
    newArr.push(itemSS);
    localStorage.setItem('saveHAList', JSON.stringify(newArr));
}


export const addDash = (str) => {
    if (str.slice(-1) == " ") {
        return str.slice(0, -1).split(' ').join('-').toLowerCase();
    }
    return str.split(' ').join('-').toLowerCase();
}

// export let createEmptyArrays = () => {
//     let oldData = JSON.parse(localStorage.getItem('savePropList'));
//     let oldData1 = JSON.parse(localStorage.getItem('saveHAList'));

//     if (oldData == null || oldData == '' || oldData == undefined) {

//     }
//     if (oldData1 == null || oldData1 == '' || oldData1 == undefined) {

//     }
// }

function addToLocal(arr, item, dateI) {
    let newArr = [];
    newArr = arr;
    let itemSS = [item, dateI];
    newArr.push(itemSS);
    // localStorage.removeItem("save");
    localStorage.setItem('savePropList', JSON.stringify(newArr));
}


function addToLocalHA(arr, item, dateI) {
    let newArr = [];
    newArr = arr;
    let itemSS = [item, dateI];
    newArr.push(itemSS);
    // localStorage.removeItem("save");
    localStorage.setItem('saveHAList', JSON.stringify(newArr));
}



let existCheck = (arr, item) => {
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i][0]);
        // console.log(item);
        if (arr[i][0] == item) {
            flag = true;
        }
    }
    // console.log(flag);
    return flag;
}


export let toggleHeart = (item) => {

    let arr = JSON.parse(localStorage.getItem('savePropList'));
    let flag = false;
    if (arr == '' || arr == null || arr == undefined || arr.length == 0) {

    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0] == item) {
                flag = true;
            }
        }
    }

    return flag;
}
export let toggleHeartHA = (item) => {

    let arr = JSON.parse(localStorage.getItem('saveHAList'));
    let flag = false;
    if (arr == '' || arr == null || arr == undefined || arr.length == 0) {

    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0] == item) {
                flag = true;
            }
        }
    }

    return flag;
}

export let getAllProp = () => {
    // console.log(JSON.parse(localStorage.getItem('savePropList')));
}


export let getAllHA = () => {
    // console.log(JSON.parse(localStorage.getItem('saveHAList')));
}



export let capitaliseFirstLetterOfWord = (str) => {

    if (str == undefined || str == '' || typeof (str) == "number") {
        return;
    }

    let str1 = str.toLowerCase();

    const arr = str1.split(" ");

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    const str2 = arr.join(" ");
    // return str.toUpperCase();
    return str2;
}



export let removelastcomma = (str) => {
    let us;
    if (str.charAt(str.length - 1) == ',') {
        us = str.slice(0, -1);
    }
    else if (str.charAt(str.length - 1) == ' ' && str.charAt(str.length - 2) == ',') {
        us = str.slice(0, -2);
    }
    else {
        us = str;
    }
    return us;
}


export let arrayToString = (type) => {
    let str = "";

    if (type == 0) {
        let arr = JSON.parse(localStorage.getItem('savePropList'));

        // console.log(arr);

        if (arr == null || arr == undefined || arr == '' || arr.length == 0) {

        } else {
            arr.map((data) => {
                str += `${data[0]},`;
            })
        }
    } else {
        let arr = JSON.parse(localStorage.getItem('saveHAList'));

        // console.log(arr);

        if (arr == null || arr == undefined || arr == '' || arr.length == 0) {

        } else {
            arr.map((data) => {
                str += `${data[0]},`;
            })
        }
    }
    return removelastcomma(str);

}
export let replaceSpace = (str) => {
    return str.replace(new RegExp('<p>&nbsp;</p>', 'g'), '');
}

export let removeDollarWaitlist = (str) => {

    if (str.slice(0, 5) == "$Wait") {
        str = str.slice(1);
    }

    return str;
}


export let commaInNumber = (str) => {
    // console.log(str, typeof (str));
    if (typeof (str) == "number") {
        return str.toLocaleString(undefined, { minimumFractionDigits: 0 })
    }
    else {
        return str;
    }

}






export let isObjectEmpty = (objectName) => {
    return objectName && Object.keys(objectName).length == 0 && Object.getPrototypeOf(objectName) == Object.prototype;
}


export let isItCityVISE = (min, max) => {
    let flag;
    if (Math.abs((Math.abs(max) - Math.abs(min))) >= 3) {
        flag = true;
    } else {
        flag = false;
    }
    return flag;
}










export const returnBigger = (val1, val2) => {
    let B;
    let val11 = parseFloat(val1);
    let val22 = parseFloat(val2);

    if (val11 >= val22) {
        B = val11;
    } else {
        B = val22;
    }
    return B;
}

export const returnSmaller = (val1, val2) => {
    let S;
    let val11 = parseFloat(val1);
    let val22 = parseFloat(val2);
    if (val11 <= val22) {
        S = val11;
    } else {
        S = val22;
    }
    return S;
}



export const findHighestCountCity = (arr) => {
    let idx = 0;
    let cnt = 0;
    arr.map(
        (item, index) => {
            if (item.count > cnt) {
                idx = index;
                cnt = item.count;
            }
        }
    )
    return idx;
}


export const elementSearchInArray = (array, element) => {
    let flag = 0;
    array.map(
        (item, index) => {
            if (item.state == element.state && item.city == element.city) {
                flag = index;
            }
        }
    )
    return flag;
}




export const isItNull = (data) => {
    if (data === undefined || data === null || data === '' || data.length === 0) {
        return true;
    } else {
        return false;
    }
}

// const startCaptchaProcess = (date) => {
//     if (!isItNull(date)) {
//         console.log("token startcaptchaprocess");
//         const script = document.createElement("script");
//         script.src = `https://www.google.com/recaptcha/api.js?render=${captchaSiteKey}`;
//         // script.addEventListener('load', loadCaptcha)
//         loadCaptcha();
//         document.body.appendChild(script);
//     }
// }



// export const loadCaptcha = async () => {
//     console.log("token Enter loadcaptcha");

//     let bool = false;

//     await window.grecaptcha.ready(_ => {
//         window.grecaptcha
//             .execute(captchaSiteKey, { action: 'sdrefs' })
//             .then(token => {
//                 console.log(token, "token");

//                 if (!isItNull(token)) {
//                     var axios = require('axios');
//                     var data = '';

//                     var config = {
//                         method: 'post',
//                         url: `https://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/verifyCaptcha?secret=${captchaSecretKey}&response1=${token}`,
//                         headers: {},
//                         data: data
//                     };

//                     axios(config)
//                         .then(function (response) {
//                             if (response.data.success === true) {
//                                 bool = true;

//                             } else {
//                                 bool = false;

//                             }
//                             console.log(response.data.success, "token11");
//                         })
//                         .catch(function (error) {
//                             bool = false;
//                             console.log(error);
//                         });
//                 }
//             })
//     });


//     return bool;
// }



export const calcRentFloorPlanWeb = (rentFrom, rentTo) => {
    if (
        (rentFrom === undefined || rentFrom == null || rentFrom === '' || rentFrom === 0)
        && (rentTo === undefined || rentTo == null || rentTo === '' || rentTo === 0)
    ) {
        return "N/A";
    }
    else if (rentFrom === 0 && !(rentTo === undefined || rentTo == null || rentTo === '' || rentTo === 0)) {
        return `Up to $${commaInNumber(rentTo)}`;
    }
    else if (rentTo === undefined || rentTo == null || rentTo === '' || rentTo === 0) {
        return `$${commaInNumber(rentFrom)}`;
    }
    else if (rentFrom === undefined || rentFrom == null || rentFrom === '' || rentFrom === 0) {
        return `$${commaInNumber(rentTo)}`;
    } else {
        if (rentFrom === rentTo) {
            return `$${commaInNumber(rentFrom)}`;
        } else {
            return `$${commaInNumber(rentFrom)} - $${commaInNumber(rentTo)}`;
        }
    }
}



export const calcRentFloorPlanMob = (rentFrom, rentTo) => {
    if (
        (rentFrom === undefined || rentFrom == null || rentFrom === '' || rentFrom === 0)
        && (rentTo === undefined || rentTo == null || rentTo === '' || rentTo === 0)
    ) {
        return "N/A";
    }
    else if (rentTo === undefined || rentTo == null || rentTo === '' || rentTo === 0) {
        return `$${commaInNumber(rentFrom)}`;
    }
    else if (rentFrom === undefined || rentFrom == null || rentFrom === '' || rentFrom === 0) {
        return `$${commaInNumber(rentTo)}`;
    } else {
        if (rentFrom === rentTo) {
            return `$${commaInNumber(rentFrom)}`;
        } else {
            return `$${commaInNumber(rentFrom)} - $${commaInNumber(rentTo)}`;
        }
    }
}




export const typeofdetailpage = (str) => {
    if (str == 'rental') {
        return "affordable-apartments-for-rent";
    } else if (str == 'senior') {
        return "senior-housing-listing";
    } else if (str == 'section8') {
        return "section-8-housing-listing";
    }
}