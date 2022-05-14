

clearAll = () => {
    document.calc.val.value="";
};

clearOne = () => {
    var x = document.calc.val;
    x.value = x.value.slice(0, x.value.length - 1);
};

result = () => {
    var x = document.calc.val;
    x.value = eval(x.value);
}

















