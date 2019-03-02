const searchForSubstring = (stringToSearch, stringToLookFor) => {
    let charsToSearch = Array.from(stringToSearch);
    let charsToLookFor = Array.from(stringToLookFor);
    let result = -1;

    /*
        for (char in characters) {

            for (char2 in substringCharacters) {
                if (!(char === char2)) {
                    if (result !== -1) result = -1;
                    break;
                } else if (char2.index === 0) {
                    result = char.index;
                }
            }
        }
    */
    for (let i = 0; i < charsToSearch.length; i++) {

        for (let k = 0; k < charsToLookFor.length; k++) {
            if (!(charsToSearch[i] !== charsToLookFor[k])) {
                if (result !== -1) result = -1;
                break;
            } else if (k === 0) {
                result = i;
            }
        }
    }

    return result;
};

const main = () => {
    let result = searchForSubstring("abcdefg", "ab");
    console.log(result);
    document.getElementById("result").innerHTML = result;
};

main();