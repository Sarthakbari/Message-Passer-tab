let storedData = {};

function showTab(number){

    document.querySelectorAll(".tab-content").forEach(tab=>{
        tab.classList.remove("active");
    });

    document.querySelectorAll(".tab-btn").forEach(btn=>{
        btn.classList.remove("active");
    });

    document.getElementById("tab"+number).classList.add("active");

    document.querySelectorAll(".tab-btn")[number-1].classList.add("active");

}

function sendToStep2(){

    storedData.name=document.getElementById("name").value;
    storedData.message=document.getElementById("message").value;

    document.getElementById("displayName").innerText=storedData.name;
    document.getElementById("displayMessage").innerText=storedData.message;

    showTab(2);

}

function sendToStep3(){

    document.getElementById("finalOutput").innerHTML=`
        <h3>Submission Successful ✅</h3>
        <br>
        <b>Name:</b> ${storedData.name}
        <br><br>
        <b>Message:</b>
        <br>
        ${storedData.message}
    `;

    showTab(3);

}