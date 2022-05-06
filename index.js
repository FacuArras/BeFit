window.onscroll = () => {
  if (window.scrollY > 300) {
    document.querySelector(".navbar").classList.add("active");
  } else {
    document.querySelector(".navbar").classList.remove("active");
  }
};
