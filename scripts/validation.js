const inputs = document.querySelectorAll(".inputfield");
const form = document.querySelector("form");
const textarea = document.getElementById("message");
const allInputs = document.querySelectorAll(".all-input");

const patterns = {
  name: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  //            yourname @ domain   .  com          ( .uk )
};

// validation function
function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}
// attach keyup events to inputs
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(patterns[e.target.attributes.name.value]);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

// Event listener for the purpose of checking if input fields are empty
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(textarea.value);

  allInputs.forEach((input) => {
    //console.log(input.value);
    if (input.value === "") {
      alert("INPUT FIELD CANNOT BE EMPTY!!");
    }
  });
});
