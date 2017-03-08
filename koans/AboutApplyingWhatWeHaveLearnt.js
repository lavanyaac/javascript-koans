var _; // globals

describe("About Applying What We Have Learnt", function() {
  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {
    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = products.filter(function(pizzaObject){
      if(!pizzaObject.containsNuts){
        var containsMushroom = pizzaObject.ingredients.some(function(ingredient){
          if(ingredient === "mushrooms"){
            return true
          }
        })
        if(!containsMushroom){
          return pizzaObject
        }
      }
    })
      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    var sum = 0;

    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
    function isDivisbleBy3or5(num){
      return (num % 3 === 0 || num %5 === 0)
    }
    function add(a, b){
      return a+b;
    }

    var sum = _.range(1,1000).filter(isDivisbleBy3or5).reduce(add,0);

        /* try chaining range() and reduce() */

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };
    var a = _(products).chain()
                        .map(function(pizzaObj){return pizzaObj.ingredients})
                        .flatten()
                        .reduce(function(obj, item){
                          obj[item] = (obj[item]) ? obj[item]+1 : 1;
                          return obj;
                        }, ingredientCount)

    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  function isPrime(num){
    if(num <= 2){
      return false;
    }
    for(var i = 2; i<=Math.ceil(Math.sqrt(num)); i++){
      if(num % i === 0){
        return false;
      }
    }
    return true;    
  }
  
  it("should find the largest prime factor of a composite number", function () {
    function largetPrimeFactor(num){
      var divisor = 2;
      while(num > 1){
        while(num % divisor === 0){
          num /= divisor;
          if(isPrime(num)){
            return num;
          }
        }
        divisor++;
        if(divisor * divisor > num ){
          break;
        }
      }
      return null;
    }

    expect(largetPrimeFactor(1900)).toBe(19);
  });

  // it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    
  // });

  // it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
      
    
  // });

  // it("should find the difference between the sum of the squares and the square of the sums", function () {
    
  // });

  // it("should find the 10001st prime", function () {

  // });
  
});
