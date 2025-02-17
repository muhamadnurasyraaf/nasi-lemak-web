// Simple JavaScript to add a bit of interactivity

// Function to change background color of sections when clicked
function changeSectionColor(event) {
    if (event.target.tagName === "SECTION") {
      event.target.style.backgroundColor = getRandomColor()
    }
  }
  
  // Function to generate a random color
  function getRandomColor() {
    var letters = "0123456789ABCDEF"
    var color = "#"
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  
  // Add click event listener to all sections
  document.addEventListener("DOMContentLoaded", () => {
    var sections = document.getElementsByTagName("section")
    for (var i = 0; i < sections.length; i++) {
      sections[i].addEventListener("click", changeSectionColor)
    }
  
    // Simple welcome alert
    alert("Welcome to the Nasi Lemak Cultural Heritage website!")
  })
  
  