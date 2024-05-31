# Task 1:
 let x = 5;
 console.log(++x);
## Answere: 
 x = 6;


# Task 2:
 let y = 10;
 console.log(-y);
## Answere:
 y = -10;


# Task 3:
 let a = true;
 console.log(!a);
## Answere: 
 a = false;


# Task 4:
 let b = 7;
 let result = b++;
 console.log(result);
## Answere:
The variable b is assigned the value 7. Then, the post-increment operator ++ is used with b, which means the value of b is first assigned to result, and then b is incremented by 1. Therefore, result will hold the initial value of b (which is 7), and then b will be incremented to 8.

So, when you run this code, the output printed to the console will be:
 b = 7;
This is because result holds the initial value of b before it was incremented. 


# Task 5:
 let c = -3;
 console.log(typeof +c);
## Answere:
In JavaScript, the unary plus operator + is used to convert its operand to a number. So, in the given code:
 let c = -3;
 console.log(typeof +c);
 The variable c is assigned the value -3. Then, +c is used, which converts -3 to a number.

The typeof operator is used to determine the data type of a variable or expression. So, typeof +c will give you the data type of the number obtained after converting -3 to a number using the unary plus operator.

The output of typeof +c will be:
 typeOf +c is number


# Task 6:
 let e = 15;
 let res = --e;
 console.log(res);
## Answere:
 res = 14; 


# Task 7:
 let f = false;
 console.log(!f);
## Answere:
The variable f is assigned the value false. Then, !f is evaluated, which inverts the boolean value of f.

The output of !f will be:
    true;
This is because !false evaluates to true, as the NOT operator flips the boolean value.    

  

# Task 8:
 let g = 4;
 let output = -g;
 console.log(output);
## Answere:
 output = -4;


# Task 9:
 let h = "5";
 console.log(typeof +h);
## Answere:
The typeof operator is used to determine the data type of a variable or expression. So, typeof +h will give you the data type of the number obtained after converting "5" to a number using the unary plus operator.

The output of typeof +h will be:
   number
This is because "5" is converted to the number 5 using the unary plus operator, resulting in a type of number.  

# Task 10:
 let a = 5;
 let b = -3;
 let result = -(-a + ++b) * -b;
 console.log(result);
## Answere:
Let's break it down step by step:

a is assigned the value 5.
b is assigned the value -3.
++b increments b by 1, so b becomes -2.
(-a + ++b) is -(-5 + -2), which equals 7.
-(-a + ++b) is -7, as it is negated by the unary minus operator -.
-b is -(-2), which equals 2.
So, the expression becomes -(-7) * 2, which equals 14.
Thus, when you log result, you'll see 14 printed to the console.
 

# Task 11:
 let x = 10;
 let y = -x--;
 let z = +y;
 let output = !(z >= -10);
 console.log(output);

## Answere:
Let's break down the code step by step:

x is assigned the value 10.
y is assigned the value of -x--. This means x is first assigned to y, and then x is decremented by 1. So, y will be -10.
z is assigned the value of +y. The unary plus operator + doesn't have any effect on the value of y because it's already a number. So, z remains -10.
output is assigned the value of !(z >= -10). Since z is -10, -10 >= -10 evaluates to true. The logical NOT operator ! negates this value, resulting in false.
Finally, console.log(output) prints the value of output to the console, which is false.
So, when you run this code, you'll see false printed to the console.


# Task 12:
 let a = 5;
 let b = 4;
 let c = ++a + a++ + --b + b-- + a + b++ + b++ + a--;
 console.log(c);

## Answere:
++a: Increment a to 6. Now a is 6.
a++: Use the current value of a, which is 6, and then increment a to 7. So, this part evaluates to 6, but a becomes 7.
--b: Decrement b to 3. Now b is 3.
b--: Use the current value of b, which is 3, and then decrement b to 2. So, this part evaluates to 3, but b becomes 2.
a: Use the current value of a, which is 7.
b++: Use the current value of b, which is 2, and then increment b to 3. So, this part evaluates to 2, but b becomes 3.
b++: Use the current value of b, which is 3, and then increment b to 4. So, this part evaluates to 3, but b becomes 4.
a--: Use the current value of a, which is 7, and then decrement a to 6. So, this part evaluates to 7, but a becomes 6.
Now let's sum all these values:

6 + 6 + 3 + 3 + 7 + 2 + 3 + 7 = 37
So, the correct answer is 37. 






