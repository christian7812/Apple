const heroSection = document.querySelector(".heroSection");
const iphoneAir = document.querySelector(".iphoneAir");
const iphoneBlur = document.getElementById("iphoneBlur");
const iphone17 = document.getElementById("iphone17");

const dropdowns = [
    {link: document.getElementById("storeLink"), menu: document.getElementById("storemenu")},
    {link: document.getElementById("macLink"), menu: document.getElementById("macDropdown")},
    {link: document.getElementById("padLink"), menu: document.getElementById("padDropdown")},
    {link: document.getElementById("phoneLink"), menu: document.getElementById("phoneDropdown")},
    {link: document.getElementById("watchLink"), menu: document.getElementById("watchDropdown")},
    {link: document.getElementById("visionLink"), menu: document.getElementById("visionDropdown")},
    {link: document.getElementById("podLink"), menu: document.getElementById("podDropdown")},
    {link: document.getElementById("tvLink"), menu: document.getElementById("tvDropdown")},
    {link: document.getElementById("enterLink"), menu: document.getElementById("enterDropdown")},
    {link: document.getElementById("accessLink"), menu: document.getElementById("accessDropdown")},
    {link: document.getElementById("supportLink"), menu: document.getElementById("supportDropdown")}
];

function hideMenu() {
    dropdowns.forEach(({ menu } ) => {
        menu.classList.add("hidden");
})
heroSection.classList.remove("blur-lg");
iphoneAir.classList.remove("blur-lg");
iphoneBlur.classList.remove("blur-lg");
iphone17.classList.remove("blur-lg");
};

// Add hover functionality for each dropdown
dropdowns.forEach( ({link, menu}) => {
    link.addEventListener("mouseenter", () => {
        hideMenu();
        menu.classList.remove("hidden");
        heroSection.classList.add("blur-lg");
        iphoneAir.classList.add("blur-lg");
        iphoneBlur.classList.add("blur-lg");
        iphone17.classList.add("blur-lg");
    });


 // Keep blur while hovering dropdown
  menu.addEventListener("mouseenter", () => {
    heroSection.classList.add("blur-lg");
  });

    menu.addEventListener("mouseleave", () => {
    menu.classList.add("hidden");
    heroSection.classList.remove("blur-lg");
    iphoneAir.classList.remove("blur-lg");
    iphoneBlur.classList.remove("blur-lg");
    iphone17.classList.remove("blur-lg");
  });
});


const navItems = document.querySelectorAll(".group");

const buttons = [
  {button: document.getElementById("searchBtn"), field: document.getElementById("inputField")},
  {button: document.getElementById("bagBtn"), field: document.getElementById("bagField")}
];

function hideField() {
  buttons.forEach(({field}) => {
    field.classList.add("hidden");
  })
}

buttons.forEach(({button, field}) => {
  button.addEventListener("click", () => {
     const currentlyVisible = !field.classList.contains("hidden");

    hideField();

    if (!currentlyVisible) {
      field.classList.remove("hidden");
      heroSection.classList.add("blur-lg");
    } else {
      heroSection.classList.remove("blur-lg");
    }
  })

  field.addEventListener("click", () => {
    heroSection.classList.add("blur-lg");
  })
})

navItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    buttons.forEach(({field}) => {
      field.classList.add("hidden");
    })
    heroSection.classList.remove("blur-lg");
  })
})

// Navigations On Mobile
const closeBox = document.getElementById("closeBox");
const closeBtn = document.getElementById("closeBtn");
const herosection = document.querySelector(".herosection");

const navbuttons = [
  {btn: document.getElementById("magnifyGlass"), dropdown: document.getElementById("input")},
  {btn: document.getElementById("caseBtn"), dropdown: document.getElementById("caseField")}
];

function hideDropdown() {
   navbuttons.forEach(({dropdown}) => {
    dropdown.classList.add("hidden");
   })
   herosection.classList.remove("blur-lg");
}

navbuttons.forEach(({btn, dropdown}) => {
  btn.addEventListener("click", () => {
    const isVisible = !dropdown.classList.contains("hidden");

    hideDropdown();

    if(!isVisible) {
      dropdown.classList.remove("hidden");
      herosection.classList.add("blur-lg");
    } else{
         herosection.classList.remove("blur-lg");
    }
  })

})

closeBox.addEventListener("click", () => {
    hideDropdown();
    
})

closeBtn.addEventListener("click", () => {
    hideDropdown();
})

// Mobile Button
const mobileButton = document.getElementById("mobileBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

mobileButton.addEventListener("click", () => {
mobileMenu.classList.remove("hidden");

  if(mobileMenu.classList.contains("hidden")) {
    heroSection.classList.add("blur-lg");
  } else{
    herosection.classList.remove("blur-lg");
  }
})

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
})

//Navigational Links

const chevronClose = [
  {chevron: document.getElementById("chevronRight"), close: document.getElementById("closeStore")},
  {chevron: document.getElementById("chevronMac"), close: document.getElementById("closeMac")},
  {chevron: document.getElementById("chevronIpad"), close: document.getElementById("closeIpad")},
  {chevron: document.getElementById("chevronIphone"), close: document.getElementById("closeIphone")},
  {chevron: document.getElementById("chevronWatch"), close: document.getElementById("closeWatch")},
  {chevron: document.getElementById("chevronPod"), close: document.getElementById("closePod")},
  {chevron: document.getElementById("chevronVision"), close: document.getElementById("closeVision")},
  {chevron: document.getElementById("chevronHome"), close: document.getElementById("closeHome")},
  {chevron: document.getElementById("chevronEnter"), close: document.getElementById("closeEnter")},
  {chevron: document.getElementById("chevronAccess"), close: document.getElementById("closeAccess")},
  {chevron: document.getElementById("chevronSupport"), close: document.getElementById("closeSupport")},

];

const Buttons = [
 {button: document.getElementById("storeBtn"), menus: document.getElementById("storeMenu")},
 {button: document.getElementById("macBtn"), menus: document.getElementById("macMenu")},
 {button: document.getElementById("ipadBtn"), menus: document.getElementById("ipadMenu")},
 {button: document.getElementById("iphoneBtn"), menus: document.getElementById("iphoneMenu")},
 {button: document.getElementById("watchBtn"), menus: document.getElementById("watchMenu")},
 {button: document.getElementById("visionBtn"), menus: document.getElementById("visionMenu")},
 {button: document.getElementById("podBtn"), menus: document.getElementById("podMenu")},
 {button: document.getElementById("homeBtn"), menus: document.getElementById("homeMenu")},
 {button: document.getElementById("enterBtn"), menus: document.getElementById("enterMenu")},
 {button: document.getElementById("accessBtn"), menus: document.getElementById("accessMenu")},
 {button: document.getElementById("supportBtn"), menus: document.getElementById("supportMenu")},
]

//Hide Menus
function hideMenus() {
  Buttons.forEach(({menus}) => {
   menus.classList.add("hidden");
  })
}

Buttons.forEach(({button, menus}) => {
  button.addEventListener("click", () => {
   const notHidden = !menus.classList.contains("hidden");
   hideMenus();

   if(!notHidden) {
    menus.classList.remove("hidden");
   } else{
    menus.classList.add("hidden");   }
  })

})

chevronClose.forEach(({chevron}) =>{
 chevron.addEventListener("click", () => {
  hideMenus();
 })
})

chevronClose.forEach(({close}) =>{
 close.addEventListener("click", () => {
  hideMenus();
  mobileMenu.classList.add("hidden");
 })
})

//DESKTOP: Images Slideshow

const slideInfo = [
  {
    img: "https://www.apple.com/tv-pr/shows-and-films/t/the-lost-bus/images/show-home-graphic-header/key-art-02/4x1/Apple_TV_The_Lost_Bus_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1757579191976",
    title: "The Lost Bus",
    subtitle: "Thriller Inspired by a true story of survival.",
    button: "Stream now"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2z_JtsLqPA6nDGeXNAWa8MpLbKjHaVqHWSg&s",
    title: "The Studio",
    subtitle: "Comedy Winner of 13 Emmy Awards.",
    button: "Stream now"
  },
  {
    img: "https://www.apple.com/tv-pr/shows-and-films/t/the-last-frontier/images/season-01/thumbnail/key-art-02/Apple_TV_The_Last_Frontier_main_16_9.jpg",
    title: "The Last Frontier",
    subtitle: "Action. 600,000 square miles. Nowhere to hide.",
    button: "Stream now"
  },
   {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SJ9myhS6nmWXQsnn7atlz8mTibGQTLUiTQ&s",
    title: "Slow Horse",
    subtitle: "Thriller. Old sins cast new shadows.",
    button: "Stream now"
  },
   {
    img: "https://www.apple.com/tv-pr/shows-and-films/t/the-morning-show/images/season-04/show-home-graphic-header/key-art-02/4x1/Apple_TV_The_Morning_Show_Key_Art_graphic_header_4_1_show_home.jpg.large_2x.jpg",
    title: "The Morning Show",
    subtitle: "Drama. The truth is the top story.",
    button: "Stream now"
  },
   {
    img: "https://assets.goal.com/images/v3/blta7b0aad598865ec3/MLS%20Power%20Ranks.jpg",
    title: "The Morning Show",
    subtitle: "Watch every club, every match, live -- all season long.",
    button: "See the schedule"
  },
];

const slideShow = document.querySelector(".slides");
const dotContainer = document.getElementById("dot");

slideInfo.forEach((slide, i) => {
  const slideDiv = document.createElement("div");
  slideDiv.className = "absolute inset-0 duration-700 ease-in-out transition-opacity";
  if (i === 0) slideDiv.classList.add("opacity-100");
  else slideDiv.classList.add("opacity-0");

  slideDiv.innerHTML = `
    <img src="${slide.img}" class="w-full h-full object-cover" alt="${slide.title}">
    <div class="absolute inset-0 flex flex-col justify-center items-start text-white bg-black/40">
      <h3 class="text-2xl mb-3">${slide.title}</h3>
      <p class="text-lg">${slide.subtitle}</p>
      <button class="rounded-2xl p-3 text-black bg-white mt-4">${slide.button}</button>
    </div>
  `;
  slideShow.appendChild(slideDiv);

  const dot = document.createElement("span");
  dot.className = "dots w-2 h-2 rounded-full bg-white/50 cursor-pointer";
  dotContainer.appendChild(dot);
});

let currentIndex = 0;

const slides = document.querySelectorAll(".slides > div");
const dots = document.querySelectorAll(".dots");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("opacity-100", i === index);
    slide.classList.toggle("opacity-0", i !== index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-white", i === index);
    dot.classList.toggle("bg-white/50", i !== index);
  });

  currentIndex = index;
}

function nextSlide() {
  const next = (currentIndex + 1) % slides.length;
  showSlide(next);
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});

setInterval(nextSlide, 5000);


//Array of hovers & Overlays
const hoverOn = [
  {id: document.getElementById("onHover"), hover: document.getElementById("overlay")},
  {id: document.getElementById("hoverFitness"), hover: document.getElementById("overLay")},
  {id: document.getElementById("hoverPga"), hover: document.getElementById("overlayPga")},
  {id: document.getElementById("hoverList"), hover: document.getElementById("overlayList")},
  {id: document.getElementById("hoverFit"), hover: document.getElementById("overlayFit")},
  {id: document.getElementById("hoverBalatro"), hover: document.getElementById("overlayBalatro")},
];

hoverOn.forEach( ({id,hover}) => {
  id.addEventListener("mouseenter", () => {
    hover.classList.remove("opacity-0");
    hover.classList.add("opacity-100");
  })

  id.addEventListener("mouseleave", () => {
    hover.classList.remove("opacity-100");
    hover.classList.add("opacity-0");
  })
})

//Scroll
const containers = [
  {container: document.getElementById("scroll-container"), toggles: document.getElementById("toggle-Btn")},
  {container: document.getElementById("scrollContainer"), toggles: document.getElementById("toggleBtn")},
];

let isPaused = false;

containers.forEach(({container, toggles}) => {
toggles.addEventListener("click", () => {
  if(isPaused) {
    isPaused = false;
    container.style.animationPlayState = "running";
    toggles.textContent = "⏸️";
  } else{
    isPaused = true;
    container.style.animationPlayState = "paused";
    toggles.textContent = "▶️";
  }
})
})

//MOBILE: Image Slideshow
const slideImage = [
  {
    img: "https://www.apple.com/tv-pr/shows-and-films/t/the-lost-bus/images/show-home-graphic-header/key-art-02/4x1/Apple_TV_The_Lost_Bus_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1757579191976",
    title: "The Lost Bus",
    subtitle: "Thriller Inspired by a true story of survival.",
    button: "Stream now"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2z_JtsLqPA6nDGeXNAWa8MpLbKjHaVqHWSg&s",
    title: "The Studio",
    subtitle: "Comedy Winner of 13 Emmy Awards.",
    button: "Stream now"
  },
  {
    img: "https://www.apple.com/tv-pr/shows-and-films/t/the-last-frontier/images/season-01/thumbnail/key-art-02/Apple_TV_The_Last_Frontier_main_16_9.jpg",
    title: "The Last Frontier",
    subtitle: "Action. 600,000 square miles. Nowhere to hide.",
    button: "Stream now"
  },
   {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SJ9myhS6nmWXQsnn7atlz8mTibGQTLUiTQ&s",
    title: "Slow Horse",
    subtitle: "Thriller. Old sins cast new shadows.",
    button: "Stream now"
  },
   {
    img: "https://www.apple.com/tv-pr/shows-and-films/t/the-morning-show/images/season-04/show-home-graphic-header/key-art-02/4x1/Apple_TV_The_Morning_Show_Key_Art_graphic_header_4_1_show_home.jpg.large_2x.jpg",
    title: "The Morning Show",
    subtitle: "Drama. The truth is the top story.",
    button: "Stream now"
  },
   {
    img: "https://assets.goal.com/images/v3/blta7b0aad598865ec3/MLS%20Power%20Ranks.jpg",
    title: "The Morning Show",
    subtitle: "Watch every club, every match, live -- all season long.",
    button: "See the schedule"
  },
];

const imageShow = document.querySelector(".images");
const sphereContainer = document.getElementById("sphere");

slideImage.forEach((image, i) => {
  const imageDiv = document.createElement("div");
  imageDiv.className = "absolute inset-0 duration-700 ease-in-out transition-opacity";
  if (i === 0) imageDiv.classList.add("opacity-100");
  else imageDiv.classList.add("opacity-0");

  imageDiv.innerHTML = `
    <img src="${image.img}" class="w-full h-full object-cover" alt="${image.title}">
    <div class="absolute inset-0 flex flex-col justify-center items-start text-white bg-black/40">
      <h3 class="text-2xl mb-3">${image.title}</h3>
      <p class="text-lg">${image.subtitle}</p>
      <button class="rounded-2xl p-3 text-black bg-white mt-4">${image.button}</button>
    </div>
  `;
  imageShow.appendChild(imageDiv);

  const sphere = document.createElement("span");
  sphere.className = "spheres w-2 h-2 rounded-full bg-white/50 cursor-pointer";
  sphereContainer.appendChild(sphere);
});

let current = 0;

const images = document.querySelectorAll(".images > div");
const spheres = document.querySelectorAll(".spheres");

function showImage(index) {
  images.forEach((image, i) => {
    image.classList.toggle("opacity-100", i === index);
    image.classList.toggle("opacity-0", i !== index);
  });

  spheres.forEach((sphere, i) => {
    sphere.classList.toggle("bg-white", i === index);
    sphere.classList.toggle("bg-white/50", i !== index);
  });

  current = index;
}

function nextImage() {
  const next = (current + 1) % images.length;
  showImage(next);
}

spheres.forEach((sphere, i) => {
  sphere.addEventListener("click", () => showImage(i));
});

setInterval(nextImage, 5000);

//Shop Button

const btn = [
  {button: document.getElementById("shopBtn"), dropMenu:document.getElementById("shopMenu"), chevron: document.getElementById("caretDown"),hr: document.getElementById("bottomHr") },
  {button: document.getElementById("walletBtn"), dropMenu:document.getElementById("walletMenu"), chevron: document.getElementById("chevronDown"), hr: document.getElementById("walletHr")},
  {button: document.getElementById("accountBtn"), dropMenu:document.getElementById("accountMenu"), chevron: document.getElementById("chevronAccount"), hr: document.getElementById("accountHr")},
  {button: document.getElementById("mentBtn"), dropMenu:document.getElementById("mentMenu"), chevron: document.getElementById("chevronMent"), hr: document.getElementById("mentHr")},
  {button: document.getElementById("appleBtn"), dropMenu:document.getElementById("appleMenu"), chevron: document.getElementById("chevronApple"), hr: document.getElementById("appleHr")},
  {button: document.getElementById("busBtn"), dropMenu:document.getElementById("busMenu"), chevron: document.getElementById("chevronBus"),hr: document.getElementById("busHr") },
  {button: document.getElementById("educationBtn"), dropMenu:document.getElementById("educationMenu"), chevron: document.getElementById("chevronEducation"),hr: document.getElementById("educationHr") },
  {button: document.getElementById("healthBtn"), dropMenu:document.getElementById("healthMenu"), chevron: document.getElementById("chevronHealth"),hr: document.getElementById("healthHr") },
  {button: document.getElementById("govtBtn"), dropMenu:document.getElementById("govtMenu"), chevron: document.getElementById("chevronGovt"),hr: document.getElementById("govtHr") },
  {button: document.getElementById("valueBtn"), dropMenu:document.getElementById("valueMenu"), chevron: document.getElementById("chevronValue"),hr: document.getElementById("valueHr") },
  {button: document.getElementById("aboutBtn"), dropMenu:document.getElementById("aboutMenu"), chevron: document.getElementById("chevronAbout"),hr: document.getElementById("aboutHr") },
];

//Helps to open a dropdown at a time
function hideDropmenu() {
  btn.forEach(({dropMenu, chevron, hr}) => {
    dropMenu.classList.add("hidden");
    chevron.classList.remove("rotate-180");
     hr.classList.remove("hidden");
  })
}

btn.forEach(({button, dropMenu, chevron, hr}) => {
  button.addEventListener("click", () => {
    const notVisible = !dropMenu.classList.contains("hidden");
    hideDropmenu();

    if(!notVisible) {
 dropMenu.classList.remove("hidden");
 chevron.classList.add("rotate-180");
 hr.classList.add("hidden");
  }else {
    dropMenu.classList.add("hidden");
    chevron.classList.remove("rotate-180");
    }
  })
})