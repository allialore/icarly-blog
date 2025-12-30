function randomPost() {
  const posts = document.querySelectorAll(".post");
  const random = Math.floor(Math.random() * posts.length);
  posts[random].scrollIntoView({ behavior: "smooth" });

  // fun shake effect
  const button = document.querySelector(".sidebar button");
  button.classList.add("shake");
  setTimeout(() => button.classList.remove("shake"), 500);
}
