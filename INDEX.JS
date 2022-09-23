//Function declarations

//For example, the following code defines a simple function named square:

function square(number) {
    return number * number;
  }

    /* Parameters are essentially passed to functions by 
     value — so if the code within the body of a function
    assigns a completely new value to a parameter that
    was passed to the function, the change is not reflected
    globally or in the code which called that function.

    When you pass an object as a parameter, if the function
    changes the object's properties, that change is visible
    outside the function, as shown in the following example:
    */

    function myFunc(theObject) {
        theObject.make = 'Toyota';
      }
      
      const mycar = {
        make: 'Honda',
        model: 'Accord',
        year: 1998,
      };
      
      // x gets the value "Honda"
      const x = mycar.make;
      
      // the make property is changed by the function
      myFunc(mycar);
      // y gets the value "Toyota"
      const y = mycar.make;

     /* When you pass an array as a parameter, if the 
      function changes any of the array's values,
      that change is visible outside the 
      function, as shown in the following example:
      */

      function myFunc(theArr) {
        theArr[0] = 30;
      }
      
      const arr = [45];
      
      console.log(arr[0]); // 45
      myFunc(arr);
      console.log(arr[0]); // 30