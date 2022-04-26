
// //inputs
// <!-- userInput
// initialize inputs
// # userInputNoun as none
// # userInputAdjective as none
// # userInputAdverb as none
// # userInputVerb as none

// # SentenceOneNoun : sentenceOnePartOne + missingPart + sentenceOnePartTwo
// # SentenceTwoVerb : sentenceTwoPartOne + missingPart + sentenceTwoPartTwo
// # SentenceThreeAdverb : sentenceThreePartOne + missingPart + sentenceThreePartTwo
// # SentenceFourAdjective : sentenceFourPartOne + missingPart + sentenceFourPartTw0    

// //process
// begin
// # promt "Please input your Noun, verb, adverb, SentenceFourAdjective"
// # assign the input as userInputNoun, userInputAdjective, userInputAdverb
// # and userInputVerb.

// # Display sentenceOnePartOne + userInputNoun + sentenceOnePartTwo
// # Display sentenceTwoPartOne + userInputVerb + sentenceTwoPartTwo
// # Display sentenceThreePartOne + userInputAdverb + sentenceThreePartTwo
// # Display sentenceFourPartOne + userInputAdjective + sentenceFourPartTwo
    
// END Exercise-4 -->

const parts = ['noun', 'adjective','verb','adverb'];
const partsOfSentence = {
    noun : "",
    adjective: "",
    verb:"",
    adverb: ""
    
}

for(var i = 0; i < parts.length; i++) {
    var  missingPart = prompt(`Please type your ${parts[i]}`);
    
        switch(parts[i]) {
            case 'noun':
                partsOfSentence.noun = missingPart;
            break;
            case 'adjective':
                partsOfSentence.adjective = missingPart;
            break;
            case 'verb':
                partsOfSentence.verb = missingPart;
            break;
            case 'adverb':
                partsOfSentence.adverb = missingPart;
            break;
        }
    }

    var story = `Today I go to the Zoo, where I saw a ${partsOfSentence.adjective} ${partsOfSentence.noun}. I ${partsOfSentence.verb} so ${partsOfSentence.adverb}`;
    console.log(story);