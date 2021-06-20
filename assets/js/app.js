
let generatedNumber = Math.floor(Math.random() * 100) + 1;

console.log(generatedNumber);

let userNumber;

function startGame(){
    let tag = document.querySelector("dialog");
    tag.showModal(); 
}

let triesCounter = 9;

function inputUserNumber(){

    userNumber = +inputNumber.value;

    if(userNumber == "undefined" || userNumber > 100 || userNumber <= 0){
        hint.innerHTML = "Введи число от 1 до 100";
        return;
    }

    if(userNumber > generatedNumber){
        hint.innerHTML = `Твое число ${userNumber} больше моего`;
    }else if(userNumber < generatedNumber){
        hint.innerHTML = `Твое число ${userNumber} меньше моего`;
    }else{
        hint.innerHTML = "Правильно!";
        counter.classList.add('d-none');
        inputNumber.classList.add('d-none');
        inputNumberLabel.classList.add('d-none');
        inputNumberButton.classList.add('d-none');
        retry.classList.remove('d-none');
        return;
    }

    if(triesCounter >= 1){
        counter.innerHTML = `Осталось попыток: ${triesCounter}`;
        triesCounter--; 
    }else{
        counter.innerHTML = `Попытки закончились`;
        hint.innerHTML = "Попробуй еще раз";
        inputNumber.classList.add('d-none');
        inputNumberLabel.classList.add('d-none');
        inputNumberButton.classList.add('d-none');
        retry.classList.remove('d-none');
    }
}

function retryGame(){
    let tag = document.querySelector("dialog");

    counter.classList.remove('d-none');

    counter.innerHTML = `Осталось попыток: 10`;
    hint.innerHTML = "";
    inputNumber.classList.remove('d-none');
    inputNumber.value = "";
    inputNumberLabel.classList.remove('d-none');
    inputNumberButton.classList.remove('d-none');
    retry.classList.add('d-none');
    i = 9
    generatedNumber = Math.floor(Math.random() * 100) + 1;
    console.log(generatedNumber);
    tag.close();
    startGame();
}

function closeGame(){
    let tag = document.querySelector("dialog");
    counter.classList.remove('d-none');
    counter.innerHTML = `Осталось попыток: 10`;
    hint.innerHTML = "";
    inputNumber.classList.remove('d-none');
    inputNumber.value = "";
    inputNumberLabel.classList.remove('d-none');
    inputNumberButton.classList.remove('d-none');
    retry.classList.add('d-none');
    i = 9
    generatedNumber = Math.floor(Math.random() * 100) + 1;
    console.log(generatedNumber);
    tag.close();
}