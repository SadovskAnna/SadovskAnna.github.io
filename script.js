const main = document.getElementById("container");

function FizzBuzzIt (value1, value2){
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    };

    for (let i = 1; i <= 100; i++) {     
        let newDiv = document.createElement("div");
        let newPar = document.createElement("p");

        newDiv.appendChild(newPar);
        main.appendChild(newDiv).setAttribute("id", "div_" + i);
        
        if (i % value1 === 0 && i % value2 === 0) {                              
            newPar.appendChild(document.createTextNode('FIZZ BUZZ (' + i + ')'));
            main.appendChild(newDiv).setAttribute("class", "fizbuz");

        } else if (i % value1 === 0) {
            newPar.appendChild(document.createTextNode('FIZZ (' + i + ')'));
            main.appendChild(newDiv).setAttribute("class", "fiz");

        } else if (i % value2 === 0) {
            newPar.appendChild(document.createTextNode('BUZZ (' + i + ')'));
            main.appendChild(newDiv).setAttribute("class", "buz");

        } else {
            newPar.appendChild(document.createTextNode(i));
            main.appendChild(newDiv).setAttribute("class", "num");
        }
        
    }
};    

FizzBuzzIt(3,5);
















