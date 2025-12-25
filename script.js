function randomPost() {
  const posts = document.querySelectorAll(".post");
  const random = Math.floor(Math.random() * posts.length);
  posts[random].scrollIntoView({ behavior: "smooth" });
}
