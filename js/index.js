
const checkArrays = (charsToSearch, charsToLookFor) => {
    if (charsToLookFor.length !== charsToSearch.length){
        return false;
    }
    for (let i = 0; i < charsToLookFor.length; i++) {
        if (charsToLookFor[i] !== charsToSearch[i]){
            return false;
        }        
    }
    return true;
};

const searchForSubstring = (stringToSearch, stringToLookFor) => {
    let charsToSearch = Array.from(stringToSearch);
    let charsToLookFor = Array.from(stringToLookFor);
    // let result = -1;
    let done = false;

    let result = false;
    for (let i = 0; i < charsToSearch.length; i++) {
        if ((charsToSearch[i] === charsToLookFor[0])) {
            // result = true;
            result = checkArrays(charsToSearch.splice(i, charsToLookFor.length), charsToLookFor);
            if (result) {
                return i;
            } 
        }
    }
    return -1;
}

        /*if (done) {
            break;
        }

            tomas302 solution
        for (let k = 0; k < charsToLookFor.length; k++) {
            if ((charsToSearch[i] !== charsToLookFor[k])) {
                if (result !== -1) result = -1;
                break;
            } else {
                switch(k) {
                    case(0):
                        result = i;
                        if (k !== charsToLookFor.length - 1) break;
                    case(charsToLookFor.length - 1):
                        done = true;
                        break;
                    default:

                        break;
                }
            }
        }
        
    }


    return result;
};*/

const main = () => {
    let result = searchForSubstring("abcdefg", "g");
    console.log(result);
    document.getElementById("result").innerHTML = result;
};

main();