function Footer() {
    const calendarButton = document.querySelector(".calendarButton");
    const myCategoryButton = document.querySelector(".myCategoryButton");
  
    calendarButton.addEventListener("click", () => {
      window.location.href = "/";
    });
  
    myCategoryButton.addEventListener("click", () => {
      window.location.href = "/mycategory";
    });
  }
  
  export default Footer;
  