# write your answare in answare.

## Task 1:

console.log(5 > 3);
## Answare
  true

## Task 2:
console.log(10 === '10');
## Answare
  false

## Task 3:
console.log('apple' < 'banana');
## Answare

When comparing strings in JavaScript, the comparison is based on lexicographical (dictionary) order. So, in the expression console.log('apple' < 'banana'), JavaScript compares the two strings 'apple' and 'banana'.
In lexicographical order, 'apple' comes before 'banana' because in dictionary order, words starting with 'a' come before words starting with 'b'.
Therefore, the expression 'apple' < 'banana' evaluates to true.

When you run console.log('apple' < 'banana'), it will print true to the console.  

## Task 4:
console.log(4 >= 4);
## Answare
  false

## Task 5:
console.log(3 != '3');
## Answare
In the expression console.log(3 != '3'), the left operand is the number 3 and the right operand is the string '3'.

JavaScript performs type coercion to convert the operands to the same data type before comparing them. In this case, it converts the number 3 to a string, resulting in '3' != '3'.

When comparing two strings for inequality, JavaScript compares them character by character based on their Unicode code points. Since both strings '3' are identical, the expression '3' != '3' evaluates to false.

So, when you run console.log(3 != '3'), it will print false to the console.

## Task 6:
console.log(5 !== '5');
## Answare
In JavaScript, the !== operator checks for strict inequality between two values, including their types.

In the expression console.log(5 !== '5'), the left operand is the number 5 and the right operand is the string '5'.

Since the operands are of different types (number and string), JavaScript doesn't perform any type conversion and directly compares them.

A number and a string are considered strictly unequal regardless of their values. So, 5 !== '5' evaluates to true.

Therefore, when you run console.log(5 !== '5'), it will print true to the console.

## Task 7:
console.log('cat' === 'cat');
## Answare
  true

## Task 8:
console.log(10 <= 8);
## Answare
  false

## Task 9:
console.log('dog' < 'doghouse');
## Answare
In JavaScript, when comparing strings, the comparison is done character by character based on their Unicode code points.

In the expression console.log('dog' < 'doghouse'), both strings are compared lexicographically.

Here's the comparison character by character:

The first characters are compared: 'd' is equal to 'd'.
The second characters are compared: 'o' is equal to 'o'.
The third characters are compared: 'g' is equal to 'g'.
At this point, the shorter string, 'dog', is exhausted, but the longer string, 'doghouse', still has characters left. Since there are characters remaining in 'doghouse', and no more characters to compare in 'dog', JavaScript will consider 'dog' to be less than 'doghouse'.

Therefore, the expression 'dog' < 'doghouse' evaluates to true.

So, when you run console.log('dog' < 'doghouse'), it will print true to the console.


## Task 10:
console.log(7 == '7');
## Answare
In JavaScript, the == operator checks for equality between two values, performing type conversion if necessary. If the operands are of different types, JavaScript will attempt to convert one or both operands to the same type before performing the comparison.

In the expression console.log(7 == '7'), the left operand is the number 7, and the right operand is the string '7'.

Since the operands are of different types (number and string), JavaScript performs type coercion to convert one of them to the other's type. In this case, the string '7' is coerced into a number.

After coercion, both operands are of the same type (number), and their values are both 7. Therefore, the expression 7 == '7' evaluates to true.

So, when you run console.log(7 == '7'), it will print true to the console.
