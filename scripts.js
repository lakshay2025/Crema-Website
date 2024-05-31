window.addEventListener("", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        const currentUrl = window.location.href;
        if (currentUrl.includes("index.html")) {
            loadMoreContentForIndex();
        } else if (currentUrl.includes("page2.html")) {
            loadMoreContentForPage2();
        }
    }
});

function loadMoreContentForIndex() {
    const newContent = "<section class='feature'><img src='new-feature.png' alt='New Feature'><p>New Feature</p></section>";
    document.querySelector(".features").innerHTML += newContent;
}

function loadMoreContentForPage2() {
    const newContent = "<div class='feature' id='feature4'><img src='new-feature.png' alt='New Feature'><h2>New Feature</h2><p>Description of the new feature.</p></div>";
    document.querySelector(".features").innerHTML += newContent;
}

const currentUrl = window.location.href;
if (currentUrl.includes("index.html")) {
    document.body.style.backgroundColor = "blue";
} else if (currentUrl.includes("page3.html")) {
    document.body.style.backgroundColor = "lightblue";
}

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.style.color = "White"; // Change to desired color when scrolling
        header.style.backgroundColor = "White"; // Optional: change background color
    } else {
        header.style.color = "Black"; // Restore original color
        header.style.backgroundColor = ""; // Optional: restore original background color
    }
});

window.addEventListener("scroll", () => {
    const header = document.querySelectorAll("a");
    if (window.scrollY > 0) {
        header.style.color = "Black"; // Change to desired color when scrolling
        header.style.backgroundColor = "white"; // Optional: change background color
    } else {
        header.style.color = "white"; // Restore original color
        header.style.backgroundColor = ""; // Optional: restore original background color
    }
});

document.addEventListener('scroll', function() {
    const headerImage = document.getElementById('header-image');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 5) {
      headerImage.src = 'crimaimg2.png';
    } else {
      headerImage.src = 'cremaimage.png';
    }
  });


