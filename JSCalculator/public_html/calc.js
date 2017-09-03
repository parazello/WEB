/* 
Простенький калькулятор, без дополнительных проверок
(в т.ч. на деление на ноль и пр. неприятных вещей)
 */
//переменные для хранения:
var num1=0;     //первого числа
var num2=0;     //второго числа
var result=0;   // результата операции
var op="";      //оператора
var isfirstnumber=1, alreadycalc=0; //дополнительные флаги для очистки поля ввода

//по нажатию оператора запоминаем операцию
var oper = document.querySelectorAll(".op");            //получаем коллекцию кнопок с операторами
for (var i = 0; i< oper.length; i++)                
    oper[i].addEventListener('click', getOperation);    //и по клику считываем оператор        
//по нажатию цифры выводим ее в поле ввода
var numbers = document.querySelectorAll(".number");     //получаем коллекцию кнопок с цифрами
for (var i = 0; i< numbers.length; i++)
    numbers[i].addEventListener('click', numberToField);//и по клику считываем цифру 
                                                        //и добавляем ее в поле ввода

var inputfield = document.querySelector(".inp");        //ловим поле ввода

var calc = document.querySelector(".res");              //ловим кнопку " = "
calc.addEventListener('click', resultToField);          //и вешаем неа нее вычисление результата

var out = document.querySelector(".output");            //ловим поле вывода

//получаем текущую операцию
function getOperation ()
{
op=this.innerText;                      //запоминаем оператор
setNumber();                            //запоминаем первое число
isfirstnumber=0;                        //снимаем флаг первого числа. 
                                        //  По повторному нажатию получим второе число
inputfield.value ="";                   //очищаем поле ввода
return op;
}

//получаем введенное число
function setNumber()
{
if (isfirstnumber===1)                  //если это первое число,
    {
    num1 = inputfield.value;            //заносим его в переменную
    if (isNaN(num1)) num1=0;
    isfirstnumber=0;                    //и снимаем флаг
    }
else 
    {
    num2 = inputfield.value;            //иначе заносим во вторую
    if (isNaN(num2)) num2=0;
    }

}
//функция ввода числа в поле по нажатию кнопки
function numberToField () 
{ if(alreadycalc===1)                   //если кнопка " = " уже была нажата
        {
            inputfield.value="";        //очищаем поле ввода
            alreadycalc=0;              //снимаем флаг
        }
    inputfield.value += this.innerText;  //добавляем цифру в поле
}
//функция вывода результата в поле вывода
function resultToField () 
{
calculate (num1, num2, op);         //вычисляем результат
inputfield.value = result;          //и выводим его
isfirstnumber=1;                    //обнуляем флаг
}
//функция вычислений
function calculate (a,b,operator)
{
if (isfirstnumber===0)              //если занесено только первое число
    {
    num2 = inputfield.value;        //запоминаем второе
    if (isNaN(num2)) num2=0;
    b = num2;
    }
    switch (operator)               //собственно вычисления 
    {
    case "+": result =  parseFloat(a) + parseFloat(b); break;
    case "-": result =  parseFloat(a) - parseFloat(b); break;     
    case "*": result =  parseFloat(a) * parseFloat(b); break;
    case "/": result =  parseFloat(a) / parseFloat(b); break;
    default: return;   
    }
out.value = a+" "+operator+" "+b + " = "+result; //и вывод результата
alreadycalc=1;                                  
}