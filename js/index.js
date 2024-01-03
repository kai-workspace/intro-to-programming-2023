//create a new date object and store it in a variable named today. HINT: new Date () constructor
var today = new Date();
//can use console.log(today) to access various today date property.

//retrieve the current year from your date object and store it in a variable named thisYear. HINT: getFullYear method
var thisYear = today.getFullYear();
//can use console.log(thisYear) to access current year from the date object

//Using "DOM Selection", select the <footer> element from the DOM and store it in a variable named footer. HINT: querySelector method
var footer = document.querySelector('footer');
//can use console.log(footer) to access footer element

//create a new paragraph (p) element and store it in a variable named copyright. HINT: createElelment method
var copyright = document.createElement('p');

//set the inner HTML of your copyright element to display your name and current year. HINT: use thisYear variable from earlier
copyright.innerHTML = "@ " + " Kai Yau " + thisYear;

//using "DOM Manipulation", append the copyright elment to the footer. HINT: appendChild method
footer.appendChild(copyright);



//BELOW ARE UNDER "SKILLS" SECTION:

// 1. List your technical skills by creating an Array of String values and store it in a variable named skills
var skills = [
    "JavaScript",
    "HTML 5",
    "CSS 3"
];
    //can use console.log(skills) to access the array of skills

//2. Using "DOM Selection", select the #skills section by id and store it in a variable named skillsSection. HINT: querySelector or getElementById method
//var skillsSection = document.querySelector("#skills");
var skillsSection = document.getElementById("skills");


//3. Using "DOM Selection", query the skillsSection (instead of the entire document) to find the <ul> element and store it in a variable named skillsList
var skillsList = skillsSection.querySelector("ul");

//4. Create a for loop to iterate over your skills Array, starting at index 0
//5. Inside the loop, create a new list item (li) element and store it in a variable named skill. HINT: createElement method
for (var i=0; i<skills.length; i++){
     var skill = document.createElement("li");
    

//6. On the next line, set the inner text of your skill variable to the value of the current Array element. HINT: access the Array element using bracket notation
    skill.innerText = skills[i];

//On the next line, append the skill element to the skillsList element. HINT: appendChild method
    skillsList.appendChild(skill);  
}