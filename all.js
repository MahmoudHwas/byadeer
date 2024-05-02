const avtivePage = window.location.pathname;
const navLink = document.querySelectorAll(".navbar ul li a").forEach(link => {
    if (link.href.includes(`${avtivePage}`)) {
       console.log(avtivePage);
        
    }
});

