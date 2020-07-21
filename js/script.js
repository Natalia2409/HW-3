function getMaxDigit(number) {
    let count = 0;
    number = String(number).split('');
    for (let i = 0; i < number.length; i++) {
        if (count < number[i]) {
            count = number[i];
        }
    }
    return count;
}

function powerNumber(number, high) {
    let newNumber = number;
    if (high < 0) {
        alert("Введіть додатнє число!");
        return "Введено невірне число!";
    } else if (high == 0) {
        return 1;
    } else {
        for(let i = 1; i < high; i++) {
            newNumber *= number;
        }
    }
    return newNumber;
}

function firstLetter(name) {
    if(!name) {
        return name;
    } else {
        return name[0].toUpperCase() + name.slice(1).toLowerCase();
    }
}

function withoutTax(payment) {
    const tax = 19.5;
    payment = payment - (payment * (tax / 100));
    return payment;
}

function randomNumber(min, max) {
    let random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
}

function howMuch(letter, word) {
    letter = letter.toLowerCase();
    word = word.toLowerCase();
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (letter === word[i]) {
            count++;
        }
    }
    return count;
}

function convertCurrensy(value) {
    if(String(value).split('').reverse()[0] === '$') {
        value = (parseInt(value) * 25) + "UAH";
        return value;
    } else if (String(value).split('').reverse()[0] === 'h' || String(value).split('').reverse()[0] === 'H') {
        value = (parseInt(value) / 25) + "$";
        return value;
    } else {
        alert('Ви ввели неправильні дані!');
        return 'Неправильні дані!';
    }
}

function randomPassword(number = 8) {
    let password;
    if (!Number.isInteger(number)) {
        alert('Ви ввели неправильні дані!');
    } else {
        password = (Math.floor(Math.random() * 9)) + 1;
        for (let i = 0; i < (number - 1); i++) {
            let count = Math.floor(Math.random() * 10);
            password = password + `${count}`;
        }
    }
    return password;
}

function deleteLetter(letter, word) {
    letter = letter.toLowerCase();
    word = word.toLowerCase();
    for(let i = 0; i < word.length; i++) {
        word = word.replace(letter, '');
    }
    return word;
}

function isPalyndrom(word) {
    word = String(word).toLowerCase().split('');
    for(let i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            delete word[i];
        }
    }
    if (word === word.reverse()) {
        return true;
    } else {
        return false;
    }
}

function deleteRepeatLetter(word) {
  var word = word.toLowerCase().split('');
  var res = word.filter(function(val, i, word) {
    return word.lastIndexOf(val) === word.indexOf(val);
  });
  return res;
}




document.writeln(`<p>Функція №1: найбільша цифра з введеного числа: ${getMaxDigit(467351842576831254)}</p>`);
document.writeln(`<p>Функція №2: число у степені: ${powerNumber(3, 0)}</p>`);
document.writeln(`<p>Функція №3: правильно написане ім'я: ${firstLetter('nATaLiA')}</p>`);
document.writeln(`<p>Функція №4: сума без податку: ${withoutTax(1000)}</p>`);
document.writeln(`<p>Функція №5: випадкове число: ${randomNumber(3, 9)}</p>`);
document.writeln(`<p>Функція №6: кількість певної букви у слові: ${howMuch('b', 'baraBashka')} </p>`);
document.writeln(`<p>Функція №7: конвертація валюти: ${convertCurrensy('200$')}</p>`);
document.writeln(`<p>Функція №8: рандомний пароль: ${(randomPassword())}</p>`);
document.writeln(`<p>Функція №9: видалення деякої букви з слова: ${deleteLetter('e', 'lifestyle')}</p>`);
document.writeln(`<p>Функція №10: чи слово є паліндромом: ${isPalyndrom('Я несу гусеня')}</p>`);
document.writeln(`<p>Функція №11: видалення букв, які повторюються: ${deleteRepeatLetter('Бісквіт був дуже ніжним')}</p>`);

















