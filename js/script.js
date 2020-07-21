function getMaxDigit(number) {
    number = String(number).split('').sort().reverse();
    return number;
}

function powerNumber(number, high) {
    let newNumber = number;
    for(let i = 1; i < high; i++) {
        newNumber *= number;
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
    for(let i = 0; i < word.length; i++) {
        word = word.replace(letter, '');
    }
    return word;
}

function isPalyndrom(word) {
    if(String(word) === String(word).split('').reverse().join('')) {
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




document.writeln(`<p>Функція №1: найбільша цифра з введеного числа: ${getMaxDigit(5674)[0]}</p>`);
document.writeln(`<p>Функція №2: число у степені: ${powerNumber(3, 3)}</p>`);
document.writeln(`<p>Функція №3: правильно написане ім'я: ${firstLetter('nATaLiA')}</p>`);
document.writeln(`<p>Функція №4: сума без податку: ${withoutTax(1000)}</p>`);
document.writeln(`<p>Функція №5: випадкове число: ${randomNumber(3, 9)}</p>`);
document.writeln(`<p>Функція №6: кількість певної букви у слові: ${howMuch('a', 'barabashka')} </p>`);
document.writeln(`<p>Функція №7: конвертація валюти: ${convertCurrensy('200$')}</p>`);
document.writeln(`<p>Функція №8: рандомний пароль: ${(randomPassword())}</p>`);
document.writeln(`<p>Функція №9: видалення деякої букви з слова: ${deleteLetter('e', 'lifestyle')}</p>`);
document.writeln(`<p>Функція №10: чи слово є паліндромом: ${isPalyndrom('мадам')}</p>`);
document.writeln(`<p>Функція №11: видалення букв, які повторюються: ${deleteRepeatLetter('Бісквіт був дуже ніжним')}</p>`);



















