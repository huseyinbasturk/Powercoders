/*The world translator
Write a function named helloWorld that:
Takes 1 argument, a language code(e.g. "es", "de", "en")
Returns "Hello, World" for the given language, for at least 3 languages.It should default to returning English.
Call that function for each of the supported languages and log the result to make sure it works*/

const lang = "es"

function helloWorld(lang) {
    switch (lang) {
        case "es":
            console.log("Hola Mundo")
            break;
        case "de":
            console.log("Hallo Welt")
            break;
        case "tr":
            console.log("Merhaba Dünya")
            break;

        default:
            console.log("Hello World")
    }
};

helloWorld();