
function cul() {
        var num1 = parseInt(document.getElementById('num1').value);
        var num2 = parseInt(document.getElementById('num2').value);
        var num3 = parseInt(document.getElementById('num3').value);
        var num4 = parseInt(document.getElementById('num4').value);
        var num5 = parseInt(document.getElementById('num5').value);
        var num6 = parseInt(document.getElementById('num6').value);
        var num7 = parseInt(document.getElementById('num7').value);
        var num8 = parseInt(document.getElementById('num8').value);
        var opt = document.getElementById('opt').value;
        var opt1 = document.getElementById('opt1').value;
        var opt2 = document.getElementById('opt2').value;
        var opt3 = document.getElementById('opt3').value;
        

        if (opt === '+') {
            document.getElementById('result').value = num1 + num2;
        }
        
        if (opt1 === '-') {
                document.getElementById('result1').value = num3 - num4;
            }

            if (opt2 === '/') {
                document.getElementById('result2').value = num5 / num6;
            }

            if (opt3 === 'x') {
                document.getElementById('result3').value = num7 * num8;
            }

        
}

