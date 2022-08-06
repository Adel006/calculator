var inputValue = document.calc.val;

clearAll = () => {
    inputValue.value = "";
    inputValue.style.fontSize = '16px';
};

clearOne = () => {
    inputValue.value = inputValue.value.slice(0, inputValue.value.length - 1);
};

result = () => {
        inputValue.value = eval(inputValue.value);
        inputValue.style.fontSize = '25px';
}

















