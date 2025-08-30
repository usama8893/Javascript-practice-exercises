const users = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🖤 | not for everyone",
  },
  {
    name: "kiara mehta",
    pic: "https://cdn.pixabay.com/photo/2022/09/12/17/39/woman-7450034_1280.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
  },
  {
    name: "isha oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens ☁️🖤 | late night thinker",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "too glam to give a damn 🌈 | filter free soul",
  },
  {
    name: "diya bansal",
    pic: "https://cdn.pixabay.com/photo/2021/03/26/12/27/woman-6125789_1280.jpg",
    bio: "a little chaos, a lot of art 🎨 | just vibes",
  },
  {
    name: "tanay rawat",
    pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
    bio: "don’t text, just vibe 🌑 | soft heart, sharp mind",
  },
  {
    name: "Kazi Mizan",
    pic: "https://cdn.pixabay.com/photo/2022/09/12/17/39/man-7450033_1280.jpg",
    bio: "too glam to give a damn 🌈 | filter free soul",
  }
];

function showUsers(arr) {
  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML = ""; // Clear previous cards first

  arr.forEach((user) => {
    // Create outer card div
    const card = document.createElement("div");
    card.className = "card";

    // Create image
    const img = document.createElement("img");
    img.src = user.pic;
    img.className = "bg-img";

    // Create blurred-layer div
    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.className = "blurred-layer";

    // Create content div
    const content = document.createElement("div");
    content.className = "content";

    // Create h5 (bold by default in browsers) and paragraph
    const heading = document.createElement("h5");
    heading.textContent = user.name;
    heading.style.fontWeight = 'bold';

    const para = document.createElement("p");
    para.textContent = user.bio;
    para.className = "bio-text"; // delegate font-size styling to CSS
    para.style.textSize = "0.65rem";

    // Append heading and paragraph to content
    content.append(heading, para);

    // Append all to card
    card.append(img, blurredLayer, content);

    // Append card to container
    cardsContainer.appendChild(card);
  });
}

// Initial render
showUsers(users);

// Input event listener
document.querySelector(".inp").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const newUsers = users.filter((user) =>
    user.name.toLowerCase().startsWith(value)
  );
  showUsers(newUsers);
});


