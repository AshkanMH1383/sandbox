function outer() {
    var outervar1 = "outervar1";
    var counter = 1;
    var outervar2 = "outervar2";

    function increment() {
        console.log(counter);
        counter++;
    }

    function inner() {
        console.log(outervar1);
    }

    return [increment , inner];
}

var b = outer();
b[0]();
b[1]();
b[0]();
b[0]();