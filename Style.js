const inputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");

function AddTask() {
    if (inputBox.value === '') {
        alert("Enter your Task then Submit it");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ListContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
ListContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", ListContainer.innerHTML);

}

function showTask() {
    ListContainer.innerHTML = localStorage.getItem("data");
}
showTask();


lse);<br><br>function saveData() {<br>=C2=A0 =C2=A0 localStorage.setItem(&q=
uot;data&quot;, ListContainer.innerHTML);<br><br>}<br><br>function showTask=
() {<br>=C2=A0 =C2=A0 ListContainer.innerHTML =3D localStorage.getItem(&quo=
t;data&quot;);<br>}<br>showTask();<br></div>

--000000000000f8ffd8060961f16c--
