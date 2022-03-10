// Save the reference to text-field into a variable. | <input type="text">
let input = document.querySelector(".input");

// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
let ul = document.querySelector("ul");

// Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
let btn = document.querySelector("button");

// Save the reference to paragraph for feedback | <p class="feedback"></p>
let feedback = document.querySelector(".feedback");

// Start function addItem.
function addItem() {
    // Create list-item and store output in a variable.
    let li = document.createElement("li");
    // Check if user entered the value in input text-field.

    if (input.value && input.value != " ") {

        //adding the inputed value to the list li
        li.textContent = input.value;

        // append/add element li to the ul list at the end
        ul.appendChild(li);

        //clearing feedback message
        feedback.textContent = " ";

        //clearing the input field value
        input.value = " ";

        //putting cursor back in the input field
        input.focus();
    } else {
        feedback.textContent = "Nothing entered in the paragraph !";
    }
}

// Register your function addItem for click event on button.
btn.addEventListener("click", addItem);