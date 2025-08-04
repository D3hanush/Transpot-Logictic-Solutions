let form_sub = document.getElementById("form_sub");

function submit() {
    let form_name = document.getElementById("form_name").value;
    let form_email = document.getElementById("form_email").value;
    let form_phone = document.getElementById("form_phone").value;
    let form_date = document.getElementById("form_date").value;
    let form_type = document.getElementById("form_type").value;
    let form_load = document.getElementById("form_load").value;

    // errors 
    let name_err = document.getElementById("name_err");
    let email_err = document.getElementById("email_err");
    let phone_err = document.getElementById("phone_err");
    let date_err = document.getElementById("date_err");
    let type_err = document.getElementById("type_err");
    let load_err = document.getElementById("load_err");

    // Name
    if (form_name === "" || form_name === null) {
        name_err.textContent = "This field is required.";
    }
    else {
        name_err.textContent = "";
    }
    // Email
    if (form_email === "" || form_email === null) {
        email_err.textContent = "This field is required.";
    }
    else {
        email_err.textContent = "";
    }
    // Phone
    if (form_phone === "" || form_phone === null) {
        phone_err.textContent = "This field is required.";
    }
    if(form_phone.length <10){
        phone_err.textContent = "Invalid.";
    }
    else {
        phone_err.textContent = "";
    }
    // Date
    if (form_date === "" || form_date === null) {
        date_err.textContent = "This field is required.";
    }
    else {
        date_err.textContent = "";
    }
    // Type
    if (form_type === "Freight Type" || form_type === null) {
        type_err.textContent = "This field is required.";
    }
    else {
        type_err.textContent = "";
    }
    // Load
    if (form_load === "Load" || form_type === null) {
        load_err.textContent = "This field is required.";
    }
    else {
        load_err.textContent = "";
    }
}

// tab switch //
let img1 = document.getElementById("clt_img1");
let img2 = document.getElementById("clt_img2");
let img3 = document.getElementById("clt_img3");
let name1 = document.getElementById("clt_name");

let mainimg = document.getElementById("tab_img");
let maindiv = document.getElementById("clt_main_div");

function tab(event){


    if(event.target.src == img1.src){
        mainimg.src = event.target.src;
        name1.textContent = "Alisha Martin";
    }
    else if(event.target.src == img2.src){
        mainimg.src = event.target.src;
        name1.textContent = "Adam Smith";
    }
    else if(event.target.src == img3.src){
        mainimg.src = event.target.src;
        name1.textContent = "Asle Backum";
    }
}