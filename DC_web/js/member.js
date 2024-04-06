const members = document.querySelectorAll('.member');
const memberBox = document.querySelector('.mem_list');
const next = document.querySelector('.btn_next');
const prev = document.querySelector('.btn_prev');
const bgImage = document.querySelector('.bg_img');
const heroName = document.querySelector('.hero_name');
const aboutHero = document.querySelector('.about_hero');
const heroText = document.querySelector('.text_box');
let currentIndex = 0;

members[0].classList.add('current');

members.forEach((member, index) => {
  member.addEventListener('click', () => {
    currentIndex = index;
    carousel();
  });
});

function carousel() {

    heroText.classList.add('show');
  setTimeout(()=>{
    heroText.classList.remove('show');
  },1000);

  members.forEach(member => member.classList.remove('current'));
  heroName.innerHTML = newArray[currentIndex].name;
  aboutHero.innerHTML = newArray[currentIndex].about;

  members.forEach((member, index) => {
    if (index === currentIndex) {
      member.style.order = 0;
      bgImage.setAttribute('src', `./assets/bg_${index}.jpg`);
      member.classList.add('current');
    } else {
      index < currentIndex
        ? (member.style.order = index + members.length)
        : (member.style.order = index);
      member.classList.remove('current');
    }
  });
}

next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % members.length;
  carousel();
});

prev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + members.length) % members.length;
  carousel();
});

const newArray = [
  {
    name: 'The man of steel',
    about: "Gifted with colossal strength, nigh-invulnerability, and the ability to soar through the heavens, Superman's awe-inspiring might is surpassed only by his noble heart, making him the Earth's mightiest champion for peace, hope, and the indomitable spirit of heroism.",
  },
  {
    name: 'The batman',
    about: "Possessing peak human strength, agility, and combat skills, along with a genius-level intellect and vast wealth, Batman conquers evil.",
  },
  {
    name: 'The wonderwoman',
    about: 'Possessing immortality, superhuman strength, combat skills, and the power of flight, Wonder Woman champions peace and equality.'
  },
  {
    name: 'The flash',
    about: 'Granted incredible speed by the powerful Speed Force, Flash can move faster than light, vibrate through objects, and create vortexes. His accelerated perceptions allow him to perceive the world almost frozen, making him an unbeatable crimefighter.'
  },
  {
    name: 'The cyborg',
    about: 'Half-human, half-machine, Cyborg possesses a cybernetic body outfitted with advanced technological enhancements, granting him superhuman strength, durability, and the ability to interface with and control any computer system or machinery, making him an invaluable asset to the Justice League.'
  },
  {
    name: 'The Aqua man',
    about: 'Aquaman is the ruler of Atlantis and commands all marine life. He possesses superhuman strength, durability, and can breathe underwater. With his telepathic ability to control sea creatures and his indestructible trident, he is an formidable force protecting the oceans.'
  },
  {
    name: 'The Martial man hunter',
    about: 'Martian Manhunter is one of the most powerful beings on Earth. With his Martian physiology, he possesses incredible strength, shapeshifting abilities, invisibility, intangibility, flight, and telepathic/telekinetic powers. His vast array of powers make him a formidable ally and hero.'
  },
  {
    name: 'The Green lantern',
    about: "Green Lantern's power ring, powered by his willpower, allows him to create hard light constructs of anything he can imagine. With flight, force fields, and energy blasts, his ring's power is limited only by his creativity and resolve, making him a versatile hero."
  }
];



function simulateDataLoad() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000); // Simulating a 3-second delay
  });
}

function showLoader() {
  const loaderContainer = document.querySelector('.loader-container');
  loaderContainer.style.display = 'flex';
}

function hideLoader() {
  const loaderContainer = document.querySelector('.loader-container');
  loaderContainer.style.display = 'none';
}

async function loadData() {
  showLoader(); // Show the loader

  await simulateDataLoad(); // Simulate data loading

  hideLoader(); // Hide the loader
  document.body.style.overflow = 'auto'; // Restore scrolling
}

// Call the loadData function when the page loads
window.onload = function() {
  document.body.style.overflow = 'hidden'; // Disable scrolling while loading
  loadData();
};