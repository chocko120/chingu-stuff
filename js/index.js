
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
    let result = false;

    if (charsToLookFor.length > charsToSearch.length){
        return -1;
    }
    if (charsToLookFor.length === 0 || charsToSearch.length ===0){
        return -1;
    }
    for (let i = 0; i < charsToSearch.length; i++) {
        if ((charsToSearch[i] === charsToLookFor[0])) {
            result = checkArrays(Array.from(charsToSearch).splice(i, charsToLookFor.length), charsToLookFor);
            if (result) {
                return i;
            } 
        }
    }
    return -1;
}

const handleClick = (e) => {
    let result = searchForSubstring(document.getElementById("stringToSearch").value, document.getElementById("stringToLookFor").value);
    document.getElementById("result").innerHTML = (result === -1) ? "We didn't find anything" : "The index is: " + result;
};

$(document).ready(() => {
    $("form").submit(function(e){
        e.preventDefault();
    });
    $("#searchButton").click((e) => {
        handleClick(e);
    });
});