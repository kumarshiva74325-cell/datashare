let offers = [];

function addOffer() {

const name = document.getElementById("name").value.trim();
const mobile = document.getElementById("mobile").value.trim();
const network = document.getElementById("network").value;
const data = document.getElementById("data").value;
const location = document.getElementById("location").value.trim();
const validity = document.getElementById("validity").value;

if(name==="" || network==="" || data===""){
alert("Please fill all required fields.");
return;
}

offers.push({
name,
mobile,
network,
data,
location,
validity
});

clearForm();

displayOffers();

}

function clearForm(){

document.getElementById("name").value="";
document.getElementById("mobile").value="";
document.getElementById("network").value="";
document.getElementById("data").value="";
document.getElementById("location").value="";
document.getElementById("validity").value="";

}

function displayOffers(){

const search =
document.getElementById("searchBox").value.toLowerCase();

let html="";
let totalData=0;

offers.forEach((offer,index)=>{

if(
!offer.name.toLowerCase().includes(search) &&
!offer.network.toLowerCase().includes(search) &&
!offer.location.toLowerCase().includes(search)
){
return;
}

totalData += Number(offer.data);

html += `
<div class="card">

<h3>${offer.name}</h3>

<p>📱 ${offer.mobile || "Not Provided"}</p>

<p>📶 ${offer.network}</p>

<p><strong>${offer.data} GB Available</strong></p>

<p>📍 ${offer.location || "-"}</p>

<p>📅 ${offer.validity || "-"}</p>

<button onclick="requestOffer('${offer.name}')">
Request Data
</button>

<button onclick="deleteOffer(${index})">
Delete
</button>

</div>
`;

});

document.getElementById("offerList").innerHTML = html;

document.getElementById("offerCount").innerText = offers.length;
document.getElementById("userCount").innerText = offers.length;
document.getElementById("dataCount").innerText = totalData + " GB";

}

function requestOffer(name){

alert("Request sent to " + name);

}

function deleteOffer(index){

offers.splice(index,1);

displayOffers();

}

document
.getElementById("searchBox")
.addEventListener("keyup",displayOffers);
window.signup = signup;
window.login = login;
window.logout = logout;
window.addOffer = addOffer;
window.deleteOffer = deleteOffer;
window.requestOffer = requestOffer;
