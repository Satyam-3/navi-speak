var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-area-input");
var outputDiv = document.querySelector("#text-area-output");

var serverURL = "https://api.funtranslations.com/translate/navi.json"


function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something went wrong with server! please try again after some time")
}
function clickHandler(){
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then (response => response.json())
    .then (json =>{
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText; 
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)


