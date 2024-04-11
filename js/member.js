// Select all the necessary elements
const container = document.querySelector('.container');
const header = document.querySelector('header');
const members = document.querySelectorAll('.member');
const memberBox = document.querySelector('.mem_list');
const next = document.querySelectorAll('.btn_next');
const prev = document.querySelectorAll('.btn_prev');
const bgImages = document.querySelectorAll('.bg_img');
const heroName = document.querySelector('.hero_name');
const aboutHero = document.querySelector('.about_hero');
const heroText = document.querySelector('.text_box');
const heroBox = document.querySelector('.hero_box');
const feat = document.querySelector('.feat');
const featCont = document.querySelector('.feat_cont');
const holder = document.querySelector('.holder');
const heroFeat = document.querySelector('.hero_feat');
const cls = document.querySelector('.cls');
const logo = document.querySelector('.logo');
const heroHeading = document.querySelector('.text_box h1');
const driver = document.querySelector('.drive');
const panels = document.querySelectorAll('.panel');
const heroesStory = document.querySelectorAll('.hero_story');
const heroesAbility = document.querySelectorAll('.hero_ability');

let currentIndex = 0; // Initialize the current index to 0

members[0].classList.add('current'); // Add the 'current' class to the first member

// Add click event listener to each member
members.forEach((member, index) => {
  member.addEventListener('click', () => {
    currentIndex = index; // Update the currentIndex to the clicked member's index
    carousel(); // Call the carousel function to update the UI
  });
});

// Carousel function to update the UI based on the current index
function carousel() {
  // Add a show class to the heroText element for a brief moment
  heroText.classList.add('show');
  setTimeout(() => {
    heroText.classList.remove('show');
  }, 1000);

  // Remove the 'current' class from all members
  members.forEach(member => member.classList.remove('current'));
  // Update the heroName and aboutHero content with the data from the newArray
  heroName.innerHTML = newArray[currentIndex].name;
  aboutHero.innerHTML = newArray[currentIndex].about;

  // Reorder the members based on the current index
  members.forEach((member, index) => {
    if (index === currentIndex) {
      member.style.order = 0; // Set the order to 0 for the current member
      member.classList.add('current'); // Add the 'current' class to the current member

      // Show the corresponding bgImage and hide the others
      bgImages.forEach((bgImage, num) => {
        if (index === num) {
          bgImage.style.display = 'block';
        } else {
          bgImage.style.display = 'none';
        }
      });
    } else {
      // Set the order for the other members
      index < currentIndex
        ? (member.style.order = index + members.length)
        : (member.style.order = index);
      member.classList.remove('current'); // Remove the 'current' class from other members
    }
  });

  collapseMenu.classList.remove('collapse'); // Remove the 'collapse' class from collapseMenu

  // Show the corresponding heroStory and hide the others
  heroesStory.forEach((heroStory, index) => {
    currentIndex === index
      ? (heroStory.style.display = 'block')
      : (heroStory.style.display = 'none');
  });

  // Show the corresponding heroAbility and hide the others
  heroesAbility.forEach((heroAbility, index) => {
    currentIndex === index
      ? (heroAbility.style.display = 'block')
      : (heroAbility.style.display = 'none');
  });

  driver.style.transform = 'translateX(0px)'; // Reset the position of the driver
  panels.forEach(p => p.classList.remove('active')); // Remove the 'active' class from all panels
  panels[0].classList.add('active'); // Add the 'active' class to the first panel
}

// Add click event listener to each next button
next.forEach(next => {
  next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % members.length; // Update the currentIndex to the next index
    carousel(); // Call the carousel function to update the UI
  });
});

// Add click event listener to each prev button
prev.forEach(prev => {
  prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + members.length) % members.length; // Update the currentIndex to the previous index
    carousel(); // Call the carousel function to update the UI
  });
});

// Array of data for heroes
const newArray = [
  {
    name: 'The man of steel',
    about:
      "Gifted with colossal strength, nigh-invulnerability, and the ability to soar through the heavens, Superman's awe-inspiring might is surpassed only by his noble heart, making him the Earth's mightiest champion for peace, hope, and the indomitable spirit of heroism.",
  },
  {
    name: 'The batman',
    about:
      "Possessing peak human strength, agility, and combat skills, along with a genius-level intellect and vast wealth, Batman conquers evil.",
  },
  {
    name: 'The wonderwoman',
    about:
      'Possessing immortality, superhuman strength, combat skills, and the power of flight, Wonder Woman champions peace and equality.',
  },
  {
    name: 'The flash',
    about:
      'Granted incredible speed by the powerful Speed Force, Flash can move faster than light, vibrate through objects, and create vortexes. His accelerated perceptions allow him to perceive the world almost frozen, making him an unbeatable crimefighter.',
  },
  {
    name: 'The cyborg',
    about:
      'Half-human, half-machine, Cyborg possesses a cybernetic body outfitted with advanced technological enhancements, granting him superhuman strength, durability, and the ability to interface with and control any computer system or machinery, making him an invaluable asset to the Justice League.',
  },
  {
    name: 'The Aqua man',
    about:
      'Aquaman is the ruler of Atlantis and commands all marine life. He possesses superhuman strength, durability, and can breathe underwater. With his telepathic ability to control sea creatures and his indestructible trident, he is an formidable force protecting the oceans.',
  },
  {
    name: 'The Martial man hunter',
    about:
      'Martian Manhunter is one of the most powerful beings on Earth. With his Martian physiology, he possesses incredible strength, shapeshifting abilities, invisibility, intangibility, flight, and telepathic/telekinetic powers. His vast array of powers make him a formidable ally and hero.',
  },
  {
    name: 'The Green lantern',
    about:
      "Green Lantern's power ring, powered by his willpower, allows him to create hard light constructs of anything he can imagine. With flight, force fields, and energy blasts, his ring's power is limited only by his creativity and resolve, making him a versatile hero.",
  },
];



// Function to simulate data loading with a 3-second delay
function simulateDataLoad() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000); // Simulating a 3-second delay
  });
}

// Function to show the loader
function showLoader() {
  const loaderContainer = document.querySelector('.loader-container');
  loaderContainer.style.display = 'flex';
}

// Function to hide the loader
function hideLoader() {
  const loaderContainer = document.querySelector('.loader-container');
  loaderContainer.style.display = 'none';
}

// Async function to load data and manage the loader
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

// Event listener for the feat element
feat.addEventListener('click', () => {
  holder.classList.add('vanish'); // Add the 'vanish' class to the holder element
  holder.classList.remove('appear'); // Remove the 'appear' class from the holder element
  aboutHero.style.display = 'none'; // Hide the aboutHero element
  featCont.style.display = 'none'; // Hide the featCont element
  heroText.style.marginBottom = '0px'; // Set the marginBottom of the heroText element to 0
  heroFeat.classList.add('move_up'); // Add the 'move_up' class to the heroFeat element
  heroFeat.classList.remove('move_down'); // Remove the 'move_down' class from the heroFeat element
  container.classList.add('scroll'); // Add the 'scroll' class to the container element
  heroHeading.classList.add('parralax'); // Add the 'parralax' class to the heroHeading element
  header.style.display = 'none'; // Hide the header element
});

// Event listener for the cls element
cls.addEventListener('click', () => {
  aboutHero.style.display = 'block'; // Show the aboutHero element
  featCont.style.display = 'block'; // Show the featCont element
  heroText.style.marginBottom = '80px'; // Set the marginBottom of the heroText element to 80px
  container.classList.remove('scroll'); // Remove the 'scroll' class from the container element
  heroFeat.classList.remove('move_up'); // Remove the 'move_up' class from the heroFeat element
  heroFeat.classList.add('move_down'); // Add the 'move_down' class to the heroFeat element
  holder.classList.add('appear'); // Add the 'appear' class to the holder element
  holder.classList.remove('vanish'); // Remove the 'vanish' class from the holder element
  heroHeading.classList.remove('parralax'); // Remove the 'parralax' class from the heroHeading element
  header.style.display = 'block'; // Show the header element
});

// Add click event listener to each panel
panels.forEach((panel, index) => {
  panel.addEventListener('click', () => {
    const currentValue = (driver.offsetWidth * index); // Calculate the current value based on the driver's width and index
    driver.style.transform = `translateX(-${currentValue}px)`; // Set the transform property of the driver element

    panels.forEach(p => p.classList.remove('active')); // Remove the 'active' class from all panels

    panel.classList.add('active'); // Add the 'active' class to the clicked panel
  });
});