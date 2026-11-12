//menu-bar 
var menu=document.getElementById("menu");
var menuBox=document.getElementById("menu-bar");
var cross=document.querySelector(".cross");
var menutick=false;

function crossBar(){
    // menuBox.style.display="none";
    menuBox.style.transform = "translate(-100%, 0px)";
    menutick=false;
}

function menuBar(){
    if(menutick==false){
        // menuBox.style.display="flex";
        menuBox.style.transform = "translate(0px, 0px)";
        menutick=true;
    }
    else{
        // menuBox.style.display="none";
        menuBox.style.transform = "translate(-100%, 0px)";
        menutick=false;
    }
}

function menuBarClose(){
    // menuBox.style.display="none";
    menuBox.style.transform = "translate(-100%, 0px)";
    menutick=false;
}

// Appointment form handler with primary and alternative contact confirmation
function handleAppointmentSubmit(event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var altContact = document.getElementById("alt_contact").value.trim();
    var service = document.getElementById("service").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var confirmationBox = document.getElementById("bookingConfirmation");

    var altContactMessage = altContact 
        ? `<br><strong>Alternative Contact:</strong> ${altContact} (noted for backup communication)` 
        : "";

    confirmationBox.innerHTML = `
        <strong><i class="ri-checkbox-circle-fill"></i> Appointment Request Confirmed!</strong><br>
        Thank you, <strong>${name}</strong>. We have received your booking request for <strong>${service}</strong> on <strong>${date}</strong> at <strong>${time}</strong>.<br>
        A confirmation has been dispatched to <em>${email}</em>.<br>
        <strong>Primary Phone:</strong> ${phone}${altContactMessage}<br>
        <em>Our Pearl Avenue dental care team will reach out shortly. For urgent inquiries, call our 24/7 emergency line at +1 (212) 555-0144.</em>
    `;
    confirmationBox.style.display = "block";

    // Reset form fields
    document.getElementById("appointmentForm").reset();

    // Smooth scroll to confirmation
    confirmationBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
