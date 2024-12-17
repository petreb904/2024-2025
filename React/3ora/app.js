const btn = document.createElement("button");
btn.onclick = function () {
    alert("Natív gomb megnyomva!")
}
btn.innerHTML = "Natív gomb";
document.getElementById("nativ-button-container").appendChild(btn);
 
const gomb = React.createElement("button",  // 2db paramétert használ
    {
        onClick: function()
        {
            alert("Ez egy react kód!");
        },
    },
    "React gomb"   // második
)
ReactDOM.render(gomb, document.getElementById("react-button-container"));