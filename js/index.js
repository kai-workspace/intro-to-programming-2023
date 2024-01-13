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


//HANDLE MESSAGE FORM SUBMIT

// Use "DOM Selection" to select the "leave_message" form by name attribute and store it in a variable named messageForm
var messageForm = document.forms.leave_message;

// Add an event listener to the messageForm element that handles the "submit" event. HINT: addEventListener method
messageForm.addEventListener('submit', function(event) {
    
    //Inside the callback function for your event listener, create a new variable for each of the three form fields and retrieve the value from the event
    //HINT: event.target is the form, event.target.usersName is the first input element

    //Inside the callback function, above the other code you just wrote, add a new line to prevent the default refreshing behavior of the "submit" event
    //HINT: preventDefault methodPrevent default form submission
    event.preventDefault();

    // Retrieve the values from the form fields
    var userName = event.target.usersName.value;
    var userEmail = event.target.usersEmail.value;
    var userMessage = event.target.usersMessage.value;

    //Inside the callback function for your event listener, add a console.log statement to log the three variables you created in the previous step to the console
    console.log('Name:', userName);
    console.log('Email:', userEmail);
    console.log('Message:', userMessage);

    
    //DISPLAY MESSAGES IN LIST

    // Use "DOM Selection" to select the #messages section by id and store it in a variable named messageSection
    var messageSection = document.getElementById('messages');

    // Use "DOM Selector", Query the messageSection (instead of the entire document) to find the <ul> element and store it in a variable named messageList
    var messageList = messageSection.querySelector('ul');
  
    // Create a new list item (li) element and store it in a variable named newMessage
    var newMessage = document.createElement('li');
  
    // Set the inner HTML of the newMessage element with the following info: 
        // <a> element that displays the "usersName" and links to the "usersEmail" (HINT: use the mailto: prefix)
        // <span> element that displays the "usersMessage"
    newMessage.innerHTML = '<a href="mailto:' + userEmail + '">' + userName + '</a> wrote:  <span>' + userMessage + '</span>';
  
    // Create a new <button> element and store it in a variable named removeButton

        
    var removeButton = document.createElement('button');
  
        // Set properties for the removeButton
        // Set the inner text to "remove"
        // Set the type attribute to "button"
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
  
        // Add an event listener to the removeButton element that handles the "click" event
            // Inside the callback function, find the button's parent element using DOM Traversal (hint: parentNode property) and store it in a variable named entry
            // Remove the entry element from the DOM (hint: remove method)
    removeButton.addEventListener('click', function() 
    {
            // Find the button's parent element using DOM Traversal
    var entry = removeButton.parentNode;
            // Remove the entry element from the DOM
    entry.remove();
    });
  
        // Append the removeButton to the newMessage element. HINT: appendChild method
        newMessage.appendChild(removeButton);
  
        // Append the newMessage to the messageList element. 
        messageList.appendChild(newMessage);
  

   // Inside the callback function, on the very last line, add a new line of code to clear the form. HINT: reset method
    messageForm.reset();

});


//FETCH GITHUB REPOSITORIES
// Assuming you have a variable GITHUB_USERNAME with your GitHub username
const GITHUB_USERNAME = "kai-workspace"; // Replace with your actual GitHub username

// Create a Fetch API request
fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
    .then(response => response.json()) // Parse the response JSON data
    .then(repositories => {
        // DOM Selection
        const projectSection = document.getElementById("projects");
        const projectList = projectSection.querySelector("ul");

        // Loop through repositories
        repositories.forEach(repo => {
            // Create a new list item element
            const project = document.createElement("li");

            // Set the inner text to the repository name
            project.innerText = repo.name;

            // Append the project element to the projectList
            projectList.appendChild(project);
        });
    })
    .catch(error => console.error("Error fetching data:", error));


/*
// Create a new XMLHttpRequest object
const githubRequest = new XMLHttpRequest();

// Specify the request details using the open method
githubRequest.open("GET", `https://api.github.com/users/${GITHUB_USERNAME}/repos`);

// Send the request
githubRequest.send();
*/

/*
// Set up an event listener to handle the response
githubRequest.onreadystatechange = function () {
    if (githubRequest.readyState === 4 && githubRequest.status === 200) {
        // Handle the response here
        console.log(JSON.parse(githubRequest.responseText));
    } 
};
*/

/*
// Set up a "load" event listener to handle the response
githubRequest.addEventListener("load", function () {
    const repositories = JSON.parse(this.response);
    console.log(repositories);

    // can now use the 'repositories' variable to display the data on the webpage
    // For example, can loop through the repositories and update the DOM
    // with the information needed to be displayed.


// DOM Selection
const projectSection = document.getElementById("projects");
const projectList = projectSection.querySelector("ul");

// Loop through repositories
for (let i = 0; i < repositories.length; i++) {
    // Create a new list item element
    const project = document.createElement("li");

    // Set the inner text to the repository name
    project.innerText = repositories[i].name;

    // Append the project element to the projectList
    projectList.appendChild(project);
}
});
*/

