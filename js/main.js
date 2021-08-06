'use strict';

const messages = {
    1: 'Мне кажется — «да»',
    2: 'Да',
    3: 'Пока не ясно, попробуй снова',
    4: 'Спроси позже',
    5: 'Лучше не рассказывать',
    6: 'Сейчас нельзя предсказать',
    7: 'Сконцентрируйся и спроси опять',
    8: 'Мой ответ — «нет»',
    9: 'По моим данным — «нет»',
    10: 'Перспективы не очень хорошие',
    length: 'Впиши минимум 10 символов...',
    question: 'Поставь знак ? в конце вопроса...'
}

const getAnswer = () => {
    let image = document.querySelector('.image'),
        input = document.querySelector('.question'),
        answer = document.querySelector('.answer'),
        number = Math.floor(Math.random() * 10) + 1;

    image.classList.add('shake-ball');
    setTimeout(() => {
        image.classList.remove('shake-ball');
    }, 1000);

    if (input.value.length < 10) {
        setTimeout(() => {
            answer.innerHTML = messages.length;
        }, 1000);
    } else if (input.value.slice(-1) !== '?') {
        answer.innerHTML = '';
        setTimeout(() => {
            answer.innerHTML = messages.question;
        }, 1000);
    } else {
        answer.innerHTML = '';
        setTimeout(() => {
            answer.innerHTML = `<p>Ответ: <span>${messages[number]}</span></p>`;
        }, 1000);
    }
}

document.querySelector('.image').addEventListener('click', getAnswer);