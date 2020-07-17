// Handler for when the "count" button is clicked.
// It instantiates the objects required and invokes them.
// From that point on, all of the client-side code is within classes that can follow design patterns.
// Need to be careful with these functions, since they are declared in the global namespace
// and can conflict with names of fields / ids / etc.
// For example, I called the button 'count' and this method 'count' and I got a strange JS error:
// count is not a function. JS was trying to call my other definition as a function. Yuck!
function countHandler():void {
    let counter:WordCounter = new WordCounter(new WordCounterPage());
    counter.count();
}

function testCountHandler():void {
    let counter:WordCounter = new WordCounter(new WordCounterTest());
    counter.count();
}

class WordCounterPage implements WordCounterUI {
    getSentence():string {
        let sentence:string = $("#sentence").val().toString();
        return sentence;
    }

    printResult(words: number) {
        $("#result").text("The number of words is " + words);
    }
}

class WordCounterTest implements WordCounterUI {
    getSentence():string {
        return "This is a test sentence";
    }

    printResult(words: number) {
        if (words == 5) {
            $("#result").text("Test passed!");
        } else {
            $("#result").text("Test failed!");
        }
    }
}

// Handles the mapping of all UI methods to the page.
// This separates out all of the UI interaction out of the core classes.
// We can re-implement this for other interfaces.
interface WordCounterUI {
    getSentence():string;
    printResult(words:number):void;
}

// Handles the word counting.
// Notice how the jquery specific code is completely removed from this class- all interaction is through
// the UI class. This keeps the business logic clean and allows it to be reused for other situations.
// For example, see how the logic is re-used for the test.
class WordCounter {
    ui:WordCounterUI;

    constructor(ui:WordCounterUI) {
        this.ui = ui;
    }

    count(): void {
        let sentence:string = this.ui.getSentence();
        let words:number = this.countWords(sentence);
        this.ui.printResult(words);
    }

    countWords(sentence:string):number {
        return sentence.split(" ").length;
    }
}
