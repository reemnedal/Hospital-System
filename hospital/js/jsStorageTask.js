let allData = []; // Declaration outside the function scope

function render() {


    let form = document.getElementById("form-id");
     let name     = form.name.value;
    let password = form.password.value;
    let phone    = form.phone.value;
    let date     = form.date.value;
    let gender   = form.gender.value;
    let diseases = form.diseases.value;

    // Create an object to store the new data
    let newData = {
        name: name,
        password: password,
        phone: phone,
        date: date,
        gender: gender,
        diseases: diseases
    };

    // Push the new data object to the existing array
    allData.push(newData);

    // Store the updated data back in localStorage
    localStorage.setItem("allData", JSON.stringify(allData));

    let nameDisplay = document.getElementById("name-display");
    nameDisplay.textContent = "Name: " + name;

  
   

    return false;  // Prevent loading HTML
}
