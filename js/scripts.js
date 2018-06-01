(function() { // Immediately Invoked Function Expression ("IFFE") - closure - This means no one can access and overwrite anything in here
	var veryImportant = "This should only be accessible in my scripts.js file!";	
})();

var modalLinks = document.getElementsByClassName('modal-link');
for (var i = 0; i < modalLinks.length; i++) {
	modalLinks[i].addEventListener('click', function(e) {
	  /* 
	  * e is our event object, and we've
	  * prevented the default event behavior
	  */
	  e.preventDefault();
	  var modalNumber = this.getAttribute('data-modal'); // Find the modal link's data attribute value   
	  var modalElement = document.getElementById(modalNumber); // Find the DOM element with that same ID
	  //modalElement.classList.add('open'); // Add the "open" class to that DOM element so that it displays on the page
	});
}

var closeButtons = document.getElementsByClassName('modal-content__close'); // Find all close button elements using BEM (everything that's a descendent of a main class): http://getbem.com/naming/
for (var j = 0; j < closeButtons.length; j++) { // Choose a variable other than "i" so the "i" from the other function doesn't reset
	closeButtons[j].addEventListener('click', function() { 	// Attach an event listener that removes the "open" class from an open modal element
	  var openModal = document.querySelector('.open') // Find the modal that has the open class added to it (this was added earlier via "modalElement.classList.add('open');"")
		openModal.classList.remove('open'); 
	});
}

// var filters = document.getElementsByClassName('portfolio-filter');
// for (var k = 0; k < filters.length; k++) {
// 	filters[k].addEventListener('click', function(e) {
// 		var valueFilter = this.getAttribute('value');
// 		console.log(valueFilter);
// 		var projects = document.getElementsByClassName('project');
// 		var valueProject = this.getAttribute('category');
// 			for (var l = 0; l < projects.length; l++) {
// 				if (valueFilter === valueProject) {
// 					this.classList.remove('open');
// 				} else {
// 					this.classList.add('open')
// 				}
// 			}
// 		});
// }

// Get individual input - "easy" solution
var webDevInput = document.getElementById('filter1');
var projects = document.getElementsByClassName('project');
webDevInput.addEventListener('change', function() {
	console.log('changed!');	
	for (var k=0; k < projects.length; k++) {
		// Does the proejct have a data-category === "1"?
		var projectCategory = projects[k].getAttribute('data-category');
		console.log(projectCategory);
		if (projectCategory === "1") {
			projects[k].classList.add('active');
		} else {
			//No match, remove the class!
			projects[k].classList.remove('active');
		}
	}
});



