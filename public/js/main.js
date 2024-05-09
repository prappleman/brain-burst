// logicQuestions
const logicQuestions = [
    {
        question: "If a plane crashes on the border between the United States and Canada, where should the survivors be buried?",
        options: ["United States", "Canada", "Nowhere", "It depends"],
        answer: "Nowhere"
    },
    {
        question: "Which weighs more: a pound of feathers or a pound of bricks?",
        options: ["Feathers", "Bricks", "They weigh the same", "Depends on the context"],
        answer: "They weigh the same"
    },
    {
        question: "If you have three apples and you take away two, how many do you have?",
        options: ["One", "Two", "Three", "None"],
        answer: "Two"
    },
    {
        question: "How can a man go eight days without sleep?",
        options: ["He sleeps during the day", "He doesn't need sleep", "He drinks coffee", "He takes naps"],
        answer: "He sleeps during the day"
    },
    {
        question: "What gets wetter as it dries?",
        options: ["A towel", "Water", "An umbrella", "A sponge"],
        answer: "A towel"
    },
    {
        question: "If there are six apples and you take away four, how many do you have?",
        options: ["One", "Two", "Three", "None"],
        answer: "You have taken four apples"
    },
    {
        question: "How many letters are there in the English alphabet?",
        options: ["24", "25", "26", "27"],
        answer: "26"
    },
    {
        question: "What word is spelled incorrectly in every dictionary?",
        options: ["Incorrectly", "Misspelled", "Dictionary", "Wrong"],
        answer: "Incorrectly"
    },
    {
        question: "What can travel around the world while staying in a corner?",
        options: ["A globe", "A plane", "A stamp", "A map"],
        answer: "A stamp"
    },
    {
        question: "What has keys but can't open locks?",
        options: ["A keyboard", "A piano", "A map", "A secret"],
        answer: "A map"
    }
];

// wordQuestions
const wordQuestions = [
    {
        question: "I am taken from a mine and shut up in a wooden case, from which I am never released. What am I?",
        answer: "pencil"
    },
    {
        question: "What has keys but can't open locks, and often has space but no room?",
        answer: "keyboard"
    },
    {
        question: "I start with an 'e', end with an 'e', and have a letter in me. What am I?",
        answer: "envelope"
    },
    {
        question: "I am a word of letters three, add two and fewer there will be. What word am I?",
        answer: "few"
    },
    {
        question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
        answer: "m"
    },
    {
        question: "What has a head, a tail, is brown, and has no legs?",
        answer: "coin"
    },
    {
        question: "What has cities but no houses, forests but no trees, and rivers but no water?",
        answer: "map"
    },
    {
        question: "What is full of holes but still holds water?",
        answer: "sponge"
    },
    {
        question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
        answer: "echo"
    },
    {
        question: "What belongs to you but others use it more than you do?",
        answer: "time"
    }
];

// mindQuestions
const mindQuestions = [
    {
        question: "What does living a meaningful life mean to you?"
    },
    {
        question: "How do you define success and fulfillment in life?"
    },
    {
        question: "What role do relationships play in shaping one's life experiences?"
    },
    {
        question: "In what ways do challenges and setbacks contribute to personal growth?"
    },
    {
        question: "What values or principles guide your decisions and actions in life?"
    }
];


// Function to handle quiz start
function startQuiz(questionsArray) {
    let currentQuestionIndex = 0;

    function nextQuestion() {
        if (currentQuestionIndex < questionsArray.length) {
            // Display the current question from the array
            const currentQuestion = questionsArray[currentQuestionIndex];
            console.log(currentQuestion); // Replace this with your logic to display the question

            // Increment the question index for the next iteration
            currentQuestionIndex++;
        } else {
            // Quiz completed, handle the end of the quiz (e.g., display results)
            console.log("Quiz Completed");
        }
    }

    // Start the quiz by displaying the first question
    nextQuestion();

    // Add event listener for submitting answers
    document.getElementById("submitAnswer").addEventListener("click", function() {
        // Your logic to handle answer submission
        // For example, check if the answer is correct and proceed accordingly

        // Move to the next question
        nextQuestion();
    });
}

// Event listeners for quiz buttons
document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("quizbtn-logic").addEventListener("click", function() {
        window.location.href = "http://localhost:3001/Logic-Quiz";
        startQuiz(logicQuestions); // Start logic quiz
    });

    document.getElementById("quizbtn-word").addEventListener("click", function() {
        window.location.href = "http://localhost:3001/Word-Quiz";
        startQuiz(wordQuestions); // Start word quiz
    });

    document.getElementById("quizbtn-mind").addEventListener("click", function() {
        window.location.href = "http://localhost:3001/Mind-Quiz";
        startQuiz(mindQuestions); // Start mindfulness quiz
    });

});

