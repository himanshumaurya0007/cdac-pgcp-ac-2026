const changeColorBtn = document.getElementById("changeColor");

changeColorBtn.addEventListener("click", () => {
    const selectedColor = document.getElementById("colorInput").value;
    
    const paragraphs = document.getElementsByClassName("paragraph");

    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = selectedColor;
        paragraphs[i].style.fontWeight = "bold";
    }
});