1. The (i = prices.length),i.e, length of prices array will be printed as var makes the scope of a variable the function's scope.
   
2. Line 12 will print the discounted price of the last element in the array as var makes the scope of a variable the function scope.
   
3. Line 13 will print the final price of the last element in the array as the scope of the variable is the within the brackets of the function (fucntion scope).

4. Now here we will calculate the the above for the last element in the array:
   
   i will be 3 when we exit the loop (length of prices array)

   The function will return an array with the final prices of every item after discount. 

   When i = 0: 
         discountedPrice = 100 * 0.5 = 50
         finalPrice = Math.round(50 * 100) / 100 = 50
         discounted.push(50)
   
   When i = 1: 
         discountedPrice = 200 * 0.5 = 100
         finalPrice = Math.round(100 * 100) / 100 = 100
         discounted.push(100)
   
   When i = 2:
         discountedPrice = 300 * 0.5 = 150
         finalPrice = Math.round(150 * 100) / 100 = 150
         discounted.push(150)
   
   The array returned will be [50, 100, 150].


5. At line 11 we will get an error saying i is not defined as the scope of i is block scope because of let,i.e, it is the for loop.

6. At line 12 we will get an error saying discountedPrice is not defined as the scope of discountedPrice is block scope of the for loop because of let.

7. Line 13 will print the finalPrice of the last element of the array as it has function scope.

8. The function will return the same array [50, 100, 150] as question 4 (given that we ignore lines 5 and 6). This is because the loop will function in the same way as before and give the same result. Also, discounted has the same scope as the function. Thus, the array [50, 100, 150] is returned.

9. At line 11 we will get an error saying i is not defined as the scope of i is block scope of the for loop because of let.

10. At line 12 we will get an error because the scope of discountedPrice is the for loop because of const. Also, one should not change a const value after it has been assigned once as this is illegal in JavaScript.

11. At line 12 we will get an error because a const value becomes immutable once initialized. Therefore, there will be an error as it's value is being changed in the for loop.

12. The function will return the same array [50, 100, 150] as question 4 (given that we ignore lines 9,10 and 11). This is because the loop will function in the same way as before and give the same result. Also, discounted has the same scope as the function. Thus, the array [50, 100, 150] is returned.

13. A) student.name
    B) student['Grad Year']
    C) student.greeting()
    D) student['Favorite Teacher'].name
    E) student.courseLoad[1]

14. A) "32" ;2 gets concatenated to 3 after getting converted to "2"
    B) 1    ;3 gets converted to a Number
    C) 3    ;Numeric value of null is 0
    D) 3null ;concatenates '3' to null
    E) 4 ;numeric value of true is 1
    F) 0 ;numeric value of false and null are 0
    G) 3undefined ;concatenates 3 and undefined
    H) NaN ;numeric conversion of undefined is NaN

15. A) true ; 2 gets becomes a number and is greater is 1
    B) false ; because alphabetically '1' is less than '2'
    C) true ; '2' becomes a number and is equal to 2
    D) false ; false because === checks types also and one is a String and one is a Number
    E) false ; true's numerical value is 1 and is not equal to 2
    F) true ; Boolean(2) is true and thus equal

16. == compares only values and not type but === checks both values and types.

17. How are you? ; because 2 =! true which makes the first if statement false and 2 gets converted to true when you convert it to a Boolean.

19. [6, 8, 10] is the array that is returned.
    When i = 0, we push doSomething(1, a function that doubles its parameter) and then doSomething returns 2*(1 + 2) = 6
    When i = 1, we push doSomething(2, a function that doubles its parameter) and then doSomething returns 2*(2 + 2) = 8
    When i = 2, we push doSomething(3, a function that doubles its parameter) and then doSomething returns 2*(3 + 2) = 10

21. 1
    4
    3
    2      