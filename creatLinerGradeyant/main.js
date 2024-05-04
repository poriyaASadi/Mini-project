const gradientbox = document.querySelector(".gradient-box");
const selectmenu = document.querySelector(".select-box select");
const colorinput = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refresh = document.querySelector(".refresh");
const copybtn = document.querySelector(".copy")
const getrandomcolor = () => {
    const randomhex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomhex}`
}

const generateGradient = (isrendom) => {
    if (isrendom) {
     //console.log(getrandomcolor());
     colorinput[0].value = getrandomcolor();
     colorinput[1].value = getrandomcolor();
    }
    // console.log("color update...");
    const gradient = `linear-gradient(${selectmenu.value}, ${colorinput[0].value},${colorinput[1].value})`;
    gradientbox.style.background = gradient;
     // console.log(gradient);
     textarea.value = `background: ${gradient};`;
}

const copycode = () => {
    navigator.clipboard.writeText(textarea.value);
    copybtn.innerText = "code copied";
    setTimeout(() => copybtn.innerText = "code code" , 1600)
}

colorinput.forEach(input => {
 input.addEventListener("input", () => generateGradient(false));
});

selectmenu.addEventListener("change" , () => generateGradient(false));
refresh.addEventListener("click" , () => generateGradient(true));
copybtn.addEventListener("click" , copycode)
