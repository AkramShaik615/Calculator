document.addEventListener('DOMContentLoaded', () => {
    const n1 = document.getElementById("num1");
    const n2 = document.getElementById("num2");
    const result = document.getElementById("result");
    const resu = document.getElementById("res");
    let operation = null;

    document.getElementById("add").addEventListener("click", function() {
        operation = 'add';
    });

    document.getElementById("minus").addEventListener("click", function() {
        operation = 'minus';
    });

    document.getElementById("mul").addEventListener("click", function() {
        operation = 'mul';
    });

    document.getElementById("div").addEventListener("click", function() {
        operation = 'div';
    });

    document.getElementById("clear").addEventListener("click", function() {
        n1.value = '';
        n2.value = '';
        result.value = '';
    });

    resu.addEventListener("click", function() {
        const num1 = Number(n1.value);
        const num2 = Number(n2.value);

        if (operation === 'add') {
            result.value = num1 + num2;
        } else if (operation === 'minus') {
            result.value = num1 - num2;
        } else if (operation === 'mul') {
            result.value = num1 * num2;
        } else if (operation === 'div') {
            result.value = num1 / num2;
        }
    });
});
