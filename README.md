# Calculator-App

**General Description:** 

Calculator with the basic operations of plus, minus, division,and multiplication; the AC button cleans out the accumulated array of operations and numbers; the CE button pops the last element in the array of operation and numbers; the PI button is added in case the user needs to deal with PI related calculations.

**Technical Description:**

As long as the input is not the equal sign, the calculator keeps pushing inputs into an array; once the equal sign is pressed; each array is separated into a SYMBOLS ARRAY(+,-,/,*) and a NUMBERS ARRAY([0-9],PI,’.’]. Afterwards the reduce function (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) makes sure that every operation is done in the right order with the right numbers. Hence, turn our SYMBOLS ARRAY AND NUMBERS ARRAY into a TOTAL result.

**Style Description:**

Standard Bootstrap.
