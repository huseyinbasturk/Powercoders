var topics = new Array(); // more dynamic without argument
topics[0] = "HTML";
topics[1] = "CSS";
topics[2] = "JS";  
topics[3] = "PHP";    

let translations = {
    "en": "Hello, World",
    "fr": "Salut, Le Monde",
    "ge": "Hallo, Welt",
};
​
function helloWorld(languageCode = "en")
{
    var sentence = translations[languageCode];
    if (!sentence) {
        sentence = translations["en"];
    }
    return sentence;
};
​
​
// helloWorld("en");
// helloWorld("fr");
// helloWorld("ge");
//document.write(helloWorld(""));
​
document.write(`This is the german sentence: ${helloWorld("ge")}. This is the french version: ${helloWorld("fr")}`)
​
var languageCode = prompt("Please enter a language code (possible codes are: en, fr, ge. English is default).");
alert(helloWorld(languageCode));