'use strict';

(function() {
  function makeCounter () {
    var count = 0;
    return function () {
      return count++;
    };
  }

  var button = document.querySelector('.calc-button');
  var clearButton = document.querySelector('.clear-button');
  var numberField = document.querySelector('.number');
  var number = makeCounter();

  button.addEventListener('click', function () {
    numberField.innerHTML = number();
  });

  clearButton.addEventListener('click', function () {
    number = makeCounter();
    numberField.innerHTML = 'Число';
  })
})();