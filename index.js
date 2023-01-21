let movies = [
    {
      name: "falcon and the winter soldier",
      des:
        "Vraj-Following the events of Avengers:Endgame, Sam Wilson and Bucky Barnes team up in a global adventure that tests their abilities and their patience!",
      image: "images/slider 2.png"
    },
    {
      name: "loki",
      des:
        "Vraj-The mercurial villian Loki resumes his role as the God of Mischief in a new series that takes place after the events of Avengers:Endgame!",
      image: "images/slider 1.png"
    },
    {
      name: "wanda vision",
      des:
        "Vraj-Wanda Maximoff and Vision-two super powered beings living idealized suburban lives-begin to suspect that everything is not as it seems!",
      image: "images/slider 3.png"
    },
    {
      name: "raya and the last dragon",
      des:
        "Vraj-Raya, a fallen princess, must track down the legendary last dragon to stop the evil forces that have returned and threaten her world!",
      image: "images/slider 4.png"
    },
    {
      name: "luca",
      des:
        "Vraj-The movie is a coming-of-age story about one young boy experiencing an unforgettabble summer filled with gelato, pasta and endless scooter rides!",
      image: "images/slider 5.png"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; // Tracks the current slide
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    // Creating DOM Elements
    let slide = document.createElement("div");
    let imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // Attaching all the Elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    // Setting up the Images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    // Setting up the element classnames
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    // Adding the sliding Effect
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  setInterval(() => {
    createSlide();
  }, 3000);
  
  // For the Video Cards
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  // Card Sliders
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });