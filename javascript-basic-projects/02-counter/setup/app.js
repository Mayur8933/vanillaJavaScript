//set initial count

let count = 0;

// acess elements

const countValBtn = document.querySelector("#value");

//selecting all button tags at once
const allButtons = document.querySelectorAll(".btn");

allButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    //This will give list of all the classes of current btn element which is clickedN
    // e.g ['btn', 'decrease', value: 'btn decrease']
    const styles = event.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    countValBtn.textContent = count;
  })
})