// Smooth scroll to section
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Travel Plan Generator : sourced from chatgpt
document.getElementById("travelForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const duration = document.getElementById("duration").value;
  const type = document.getElementById("type").value;

  let resultText = `Your ${duration}-day ${type} trip plan:\n`;

  switch (type) {
    case "relax":
      resultText += `\n• Day 1: Relax at Baga Beach\n• Day 2: Spa & wellness\n• Day 3+: Sunset at Anjuna, seafood at beach shack`;
      break;
    case "adventure":
      resultText += `\n• Day 1: Water sports at Calangute\n• Day 2: Trek to Dudhsagar Falls\n• Day 3+: Explore forts and caves`;
      break;
    case "Exploring":
      resultText += `\n• Day 1: Basilica & Fort Aguada\n• Day 2: Visit Divar Island & Old Goa\n• Day 3+: Local food & cultural sites`;
      break;
    default:
      resultText += "Please select a valid trip type.";
  }

  document.getElementById("travelResult").textContent = resultText;
});

function scrollGallery(direction) {
  const gallery = document.querySelector('.gallery');
  const scrollAmount = 220; 
  gallery.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}
