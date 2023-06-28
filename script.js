// Hamburger Menu
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// Light/Dark Toggle
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark')

});

// Tidio Chatbot

document.tidioIdentify = {
  distinct_id: "unique_id", // Unique visitor ID in your system
  email: "contact@mail", // visitor email
  name: "John Doe", // Visitor name
  phone: "+44 2032897807" //Visitor phone
};
