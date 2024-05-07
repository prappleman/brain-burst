const express = require('express');
const router = express.Router();

// Home page route handler
router.get('/', (req, res) => {
    res.render('selection', { pageTitle: 'Select Quiz' });
});

// Contact page route handler
router.get('/contact', (req, res) => {
    res.render('contact', { pageTitle: 'Contact Us' });
});

// Questions page route handler
router.get('/quiz/:id/questions', (req, res) => {
    const quizId = req.params.id;
    res.render('questions', { quizId });
});

// Results page route handler
router.post('/quiz/:id/results', (req, res) => {
    const quizId = req.params.id;
    const { answers } = req.body;
    res.render('results', { quizId, answers });
});

module.exports = router;
