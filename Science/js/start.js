function submitForm(e) {
  e.preventDefault(); //Stopping the default action of chrome
  // Accesing the name entered in form in hmtl via dom and storing it in a variable
  var name = document.forms["welcome_form"]["name"].value;

  //Storing information in local memory
  sessionStorage.setItem("name", name);

  // It will take us to the next page with stored info
  location.href = "quiz.html";
}
