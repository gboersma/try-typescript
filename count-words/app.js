// Handler for when the "count" button is clicked.
// It instantiates the objects required and invokes them.
// From that point on, all of the client-side code is within classes that can follow design patterns.
// Need to be careful with these functions, since they are declared in the global namespace
// and can conflict with names of fields / ids / etc.
// For example, I called the button 'count' and this method 'count' and I got a strange JS error:
// count is not a function. JS was trying to call my other definition as a function. Yuck!
function countHandler() {
    let counter = new WordCounter(new WordCounterPage());
    counter.count();
}
function testCountHandler() {
    let counter = new WordCounter(new WordCounterTest());
    counter.count();
}
class WordCounterPage {
    getSentence() {
        let sentence = $("#sentence").val().toString();
        return sentence;
    }
    printResult(words) {
        $("#result").text("The number of words is " + words);
    }
}
class WordCounterTest {
    getSentence() {
        return "This is a test sentence";
    }
    printResult(words) {
        if (words == 5) {
            $("#result").text("Test passed!");
        }
        else {
            $("#result").text("Test failed!");
        }
    }
}
// Handles the word counting.
// Notice how the jquery specific code is completely removed from this class- all interaction is through
// the UI class. This keeps the business logic clean and allows it to be reused for other situations.
// For example, see how the logic is re-used for the test.
class WordCounter {
    constructor(ui) {
        this.ui = ui;
    }
    count() {
        let sentence = this.ui.getSentence();
        let words = this.countWords(sentence);
        this.ui.printResult(words);
    }
    countWords(sentence) {
        return sentence.split(" ").length;
    }
}
//# sourceMappingURL=app.js.map