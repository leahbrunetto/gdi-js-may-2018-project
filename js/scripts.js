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
	  modalElement.classList.add('open'); // Add the "open" class to that DOM element so that it displays on the page
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
var allProjectsInput = document.getElementById('filter0');
var webDevInput = document.getElementById('filter1');
var graphicDesignInput = document.getElementById('filter2');
var illustrationInput = document.getElementById('filter3');
var projects = document.getElementsByClassName('project');


webDevInput.addEventListener('change', function() {
	for (var k=0; k < projects.length; k++) {
		// Does the proejct have a data-category === "1"?
		var projectCategory = projects[k].getAttribute('data-category');
		if (projectCategory === "1") {
			projects[k].classList.add('active');
		} else {
			//No match, remove the class!
			projects[k].classList.remove('active');
		}
	}
});

graphicDesignInput.addEventListener('change', function() {
	for (var l=0; l < projects.length; l++) {
		// Does the proejct have a data-category === "2"?
		var projectCategory = projects[l].getAttribute('data-category');
		if (projectCategory === "2") {
			projects[l].classList.add('active');
		} else {
			//No match, remove the class!
			projects[l].classList.remove('active');
		}
	}
});

illustrationInput.addEventListener('change', function() {
	for (var m=0; m < projects.length; m++) {
		// Does the proejct have a data-category === "3"?
		var projectCategory = projects[m].getAttribute('data-category');
		if (projectCategory === "3") {
			projects[m].classList.add('active');
		} else {
			//No match, remove the class!
			projects[m].classList.remove('active');
		}
	}
});

allProjectsInput.addEventListener('change', function() {
	for (var n=0; n < projects.length; n++) {
		projects[n].classList.add('active');
	}
});

// /* FILTERING SOLUTION 2:
//     * This solution allows us to loop through a set of filters and projects
//     * by class name, which is more flexible. We'll make use of a closure
//     * to fix a scoping issue.
//     */
//   // Get all filter input elements
//   var filters = document.getElementsByClassName('portfolio-filter');
//   // Get all project inputs
//   var projects = document.getElementsByClassName('project');
//
//   // Loop through each filter to add an event listener
//   for (var k = 0; k < filters.length; k++) {
//
//     // Use a closure to pass the value of k into the callback as filterIndex
//     (function(filterIndex) {
//
//       filters[filterIndex].addEventListener('change', function() {
//
//         // When a filter changes, loop through projects
//         for (var m = 0; m < projects.length; m++) {
//
//           // Get the category from each project
//           var projectCategory = projects[m].getAttribute('data-category');
//
//           if (filterIndex === 0) {
//             // Someone clicked 'All', so every project should be active
//             projects[m].classList.add('active');
//
//           } else if (projectCategory === filterIndex.toString()) {
//             // It matches! Let's activate. Note that we convert m to a
//             // string so we can use ===, which tests if the two
//             // variables are equal in value AND type
//             projects[m].classList.add('active');
//
//           } else {
//             // No match -- remove the class!
//             projects[m].classList.remove('active');
//           }
//         }
//       });
//     })(k);
//   }
// })();