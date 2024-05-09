const express = require('express');
const router = express.Router();
const path = require('path');

// Home page route handler
router.get('/', (req, res) => {
    res.render('selection', { pageTitle: 'Select Quiz' });
});

// Contact page route handler
router.get('/contact', (req, res) => {
    res.render('contact', { pageTitle: 'Contact Us' });
});

// Logic quiz route handler
router.get('/Logic-Quiz', (req, res) => {
    res.render('quizzes/logic');
});

// Word quiz route handler
router.get('/Word-Quiz', (req, res) => {
    res.render('quizzes/word');
});

// Mind quiz route handler
router.get('/Mind-Quiz', (req, res) => {
    res.render('quizzes/mind');
});

// Results page route handler
router.post('/Results', (req, res) => {
    const { quizId, answers } = req.body;
    
    // Assuming logicQuiz and wordQuiz are arrays containing correct answers
    if (quizId === 'Logic-Quiz') {
        // Check multiple-choice question
        // Assuming answers[0] is the user's choice
        const isCorrect = answers[0] === logicData[0].answer;
        res.render('results', { isCorrect });
    } else if (quizId === 'Word-Quiz') {
        // Check single-word text box question
        // Assuming answers[0] is the user's input
        const isCorrect = answers[0].toLowerCase() === wordQuiz[0].answer.toLowerCase();
        res.render('results', { isCorrect });
    } else {
        // No validation needed for reflection exercise
        res.render('results', { isCorrect: true });
    }
});

module.exports = router;
