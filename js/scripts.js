// "use strict"
(() => {
  document.addEventListener('DOMContentLoaded', function () {
    // Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.
    /*============================================================================*/
    const gameTop = document.querySelector('.game-top');
    const gameForm = document.getElementById('game-form');
    const gameInput = document.getElementById('game-input');
    const startGameBtn = document.getElementById('start-game');
    const blockCards = document.getElementById('cards');
    const startGameBtnOver = document.getElementById('start-game-over');
    const time = document.getElementById('time');
    const winText = document.getElementById('game-wrapper-title');

    let countDown = 60;
    let timer = null;

    function startTimer(count) {
      timer = setInterval(function () {
        count--;
        time.textContent = count;
        console.log(count);
        if (count === 0) {
          clearInterval(timer);
          startGameOver();
          console.log("Время вышло!");
        }
      }, 1000);
    }
    function resetTimer() {
      clearInterval(timer);
      countDown = 60;
      timer = null;
    }

    startGameBtn.disabled = true;
    gameInput.addEventListener("input", () => {
      startGameBtn.disabled = false;
      if (gameInput.value.trim() === '') { // проверка на пустоту значения поля
        startGameBtn.disabled = true;
      } else {
        startGameBtn.disabled = false;
      }
    });

    function createNumbersArray(count) {
      const array = [];
      for (let i = 0; i < count; i++) {
        array.push(i + 1);
      }
      // console.log(array);

      function pairsNumb(array) {
        const newArray = [];
        for (let i = 0; i < array.length; i++) {
          newArray.push(array[i], array[i]);
        }
        return newArray;
      }

      const arr = pairsNumb(array);
      return arr;
    }

    // Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

    function shuffle(array) {
      let j, temp;
      for (let i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
      return array;
    }

    // Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.

    function createCards(array) {
      const cards = [];
      for (let i = 0; i < array.length; i++) {
        const card = document.createElement("button");
        card.textContent = array[i];
        card.setAttribute('data-value', array[i]);
        card.classList.add('card', 'btn');
        blockCards.appendChild(card);
        cards.push(card);
      }
      return cards;
    }

    function startGame() {
      winText.classList.remove('show');
      startGameBtnOver.classList.remove('show');
      gameForm.addEventListener("submit", (e) => {
        e.preventDefault();
        startTimer(countDown);
        let count = parseInt(gameInput.value) / 2;
        const arrCards = createNumbersArray(count);
        const arrRandomCards = shuffle(arrCards);
        let firstCard = null;
        let secondCard = null;
        gameTop.classList.add('up');
        if (!gameInput.value) {
          return;
        }
        createCards(arrRandomCards);
        const cards = document.querySelectorAll('.card');
        if (cards.length > 0) {
          for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener('click', () => {
              if (firstCard && secondCard) {
                return;
              };
              cards[i].classList.add('open');
              if (cards[i].classList.contains('open')) {
                cards[i].disabled = true;
              }
              if (!firstCard) {
                firstCard = cards[i];
              } else {
                secondCard = cards[i];

                if (firstCard.getAttribute('data-value') === secondCard.getAttribute('data-value')) {
                  firstCard = null;
                  secondCard = null;
                } else {
                  setTimeout(() => {
                    firstCard.removeAttribute('disabled');
                    secondCard.removeAttribute('disabled');
                    firstCard.classList.remove('open');
                    secondCard.classList.remove('open');
                    firstCard = null;
                    secondCard = null;
                  }, 300);
                }
              }
              openAllCards(cards);
            });
          }
        }
        gameInput.value = "";
        startGameBtn.disabled = true;
      });
    }
    startGame();

    function startGameOver() {
      winText.classList.remove('show');
      resetTimer();
      startGameBtnOver.classList.remove('show');
      if (gameTop.classList.contains('up')) {
        gameTop.classList.remove('up');
      }
      const cards = document.querySelectorAll('.card');
      if (cards.length > 0) {
        for (let i = 0; i < cards.length; i++) {
          cards[i].remove();
        }
      }
    }

    function openAllCards(cards) {
      let openCards = Array.from(cards).every(function (card) {
        return card.classList.contains('open');
      });
      if (openCards) {
        winText.classList.add('show');
        startGameBtnOver.classList.add('show');
        resetTimer();
      } else {
        winText.classList.remove('show');
        startGameBtnOver.classList.remove('show');
      }
    }

    startGameBtnOver.addEventListener('click', startGameOver);
  });
})();
