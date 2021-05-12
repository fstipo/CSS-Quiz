'use strict';

const correctAnswers = ['B', 'B', 'A', 'B', 'A', 'A', 'A', 'A', 'A', 'B'];

const form = document.querySelector('form');
console.log(form);
form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    userAnswers.forEach((ans, index) => {
        if (ans === correctAnswers[index]) {
            score += 10;
        };
    })
    console.log(score);
})