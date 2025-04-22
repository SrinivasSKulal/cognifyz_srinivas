function color_changer() {
    const button = document.getElementById("color_change");
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    button.style.backgroundColor = "#" + randomColor;
    alert("New color: #" + randomColor);
}



function greeting(){
    const date = new Date()
    const time = date.getHours();
    if (time >= 5 && time< 12){
        alert("Good Morning");
    } else if (time >= 12 && time < 18){
        alert("Good Afternoon");
    }else {
        alert("Good Evening")
    }


}


function add(){
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);

    alert(a+b)
}
