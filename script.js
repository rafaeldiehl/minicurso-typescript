var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var button = document.getElementById('button');
var sum = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (value, acumulator) { return value + acumulator; });
};
button.addEventListener('click', function () {
    console.log(sum(Number(input1.value), Number(input2.value)));
});
