//Quote counter to determine which quote is displayed
let quote__counter= 0;

//DOM objects stored into variables
//this nodelist contains the individual quotes
const quotes= document.querySelectorAll(".quote");
//right and left arrow objects
const arrow__right = document.querySelector(".arrow__right");
const arrow__left = document.querySelector(".arrow__left");

//right arrow event listener
arrow__right.addEventListener("click", function(event){
    //prevent anchor element behaviour 
    event.preventDefault();
    
    //if the right arrow is pressed and there are still more quotations to cycle through.......
    if (quote__counter+1 < quotes.length){

        //hide current quote
        quotes[quote__counter].classList.add("hidden");
        //display next quote
        quote__counter++;
        quotes[quote__counter].classList.toggle("hidden");
        //make the left arrow appear pressable
        arrow__left.classList.add("active");

        //if after switching to next quote and it is the last quote, grey-out right arrow
        if (quote__counter+1 === quotes.length){
            arrow__right.classList.toggle("active");
        }
    }

});

//left arrow event listener
arrow__left.addEventListener("click", function(event){
    //prevent anchor element behaviour 
    event.preventDefault();
    
    //if the left arrow is pressed and there are quotations to cycle through...
    if (quote__counter > 0){
        //hide current quote
        quotes[quote__counter].classList.add("hidden");
        //display next quote
        quote__counter--;
        quotes[quote__counter].classList.toggle("hidden");
        //make the right arrow appear pressable
        arrow__right.classList.add("active");
        //if after switching to the previos quote, it is the first quote, grey-out left arrow
        if (quote__counter === 0){
            arrow__left.classList.remove("active");
        }
        
    }

});


