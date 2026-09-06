const calculator =
{
    add: function (a, b)
    {
        console.log(a + b);
    },
    minus: function (a, b)
    {
        console.log(a - b);
    },
    divide: function (a, b)
    {
        console.log(a / b);
    },
    powerof: function (a, b)
    {
        console.log(a ** b);
    }
};

calculator.add(5, 3);
calculator.minus(5, 3);
calculator.divide(5, 3);
calculator.powerof(5, 3);