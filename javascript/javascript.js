var formSelect = document.querySelectorAll("input[name=submit-form]"); /* all inputs; submit-form*/
var project = document.querySelector("#project"); /* Fieldset project */
var stage = document.querySelector("#stage"); /* Fieldset stage */

// form toggle
var toggleForm = function (e) { /* die e gebruikt hij om te kijken of hij op de stage knop drukt of project knopje */
    if ((e.target.value === "stage" /* en */ && stage.classList.contains("disabled")) /* of */|| (e.target.value === "project" && project.classList.contains("disabled"))) {
        project.classList.toggle("disabled");
        stage.classList.toggle("disabled");
    }
};
// setup
if(stage || project) {
    
    stage.classList.toggle("disabled"); /* disable "Stage"*/
    formSelect[0].checked = true; /* Checks radiobutton "Stage"*/

    // add event listeners
    formSelect[0].addEventListener("click", toggleForm);/* "Stage" */
    formSelect[1].addEventListener("click", toggleForm);/* "Project" */
}

// Navigation dropdown
var toggle = document.querySelector('nav span'); /* Toggle dropdown */
toggle.addEventListener('click', function() { /* Toggle by click */
    this.nextElementSibling.classList.toggle('dropdown'); /* Get span item ul add 'dropdown' class */
});
