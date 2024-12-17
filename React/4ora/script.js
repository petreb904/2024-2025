const btn = document.createElement("button");
btn.onclick = function () {
    alert("Natív gomb megnyomva!")
}
btn.innerHTML = "Natív gomb";
document.getElementById("nativ-button-container").appendChild(btn);
 
 
//React mit akarok látni?   // 2db paramétert használ
const gomb = React.createElement("button",  //első) Melyik elemte szeretnénk használini (button, header..idk)
    {
        onClick: function() //Belső függvény kötelező, külömben nincs értelme
        {
            alert("Ez egy react kód!");
        },
    },
    "React gomb"
)
ReactDOM.render(gomb, document.getElementById("react-button-container"));  //második) refelektár a dom elemre, hivatkozási megoldása