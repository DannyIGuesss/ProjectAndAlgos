//Remove Blanks


const removeBlanks = (str) => {
    let newStr = '';
    for(let i = 0; i < str.length; i++) {
        if(str[i] != ' ') {
            newStr += str[i]
        }
    }
    return newStr
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));

//get Digits

const getDigits = (str) => {
    let numStr= ''
    for(let i=0; i < str.length; i++) {
        if(isNaN(str[i])) {
            
        }else {
            numStr += str[i]
        }
    }
    return Number(numStr)
}

console.log(getDigits('abc8c0d1ngd0j0'));
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

// acronyms

const acronym = (string) => {
    let words= string.split(' ')
    
    let acronyms = ''
    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i]

        acronyms += currentWord[0]
        
        
    }
    return acronyms.toUpperCase()
}

console.log(acronym("there's no free lunch - gotta pay yer way."));
console.log(acronym("Live from New York, it's Saturday Night!"));

//Count Non-Space 

const countNonSpaces = (str) => {
    let nonSpaceChar = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            nonSpaceChar++
        }
    }
    return nonSpaceChar
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"));
console.log(countNonSpaces("Hello world !") );

// Remove Shorter Strings

const removeShorterStrings = (arrOfStr, num) => {
    let newArray = []
    let currentIndx = 0
    for (let i = 0; i < arrOfStr.length; i++) {
        if(arrOfStr[i].length >= num) {
            newArray[currentIndx++] = arrOfStr[i]
        }
    }
    return newArray
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));