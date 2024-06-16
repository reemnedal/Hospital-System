        //this solution objects inside array we have method two in the end of code 
 
        let allData =  [];
            function render() {

           event.preventDefault();
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

                //using this i can store multi value inside array
                 allData = JSON.parse(localStorage.getItem("allData")) || [];


               
                // let newData=[name,password,phone,date,gender,diseases]; 
               allData.push(newData);
               
                // Store the updated data back in localStorage
                localStorage.setItem("allData",JSON.stringify( allData));



                let getData=localStorage.getItem("allData");


                let printValue=JSON.parse(getData);

                //finally !!!!!!!!!!!!
                console.log(printValue[0].name);
                console.log(printValue[0].gender);
                console.log(printValue[0].date);

  let section = document.querySelector(".section"); let mainUl = document.createElement("ul");
              printValue.forEach(item => {
               
                   
                    let mainli = document.createElement("li");
                    let divOne = document.createElement("div");
                    let divTwo = document.createElement("div");
                    let divThree = document.createElement("div");
                    let divFour = document.createElement("div");
                    let divFive = document.createElement("div");

                    mainUl.className = "cards";
                    mainli.className = "cards_item";
                    divOne.className = "card";
                    divTwo.className = "card_image";
                    divThree.className = "card_content";
                    divFour.className = "card_text";
                    divFive.className = "card_text";

                    section.appendChild(mainUl);
                    mainUl.appendChild(mainli);
                    mainli.appendChild(divOne);
                    divOne.appendChild(divTwo);
                    let img=document.createElement("img");
                    img.src="user .png"; 
                   
                    divTwo.appendChild(img);
                    divOne.appendChild(divThree); 
                    let h2=document.createElement("h2");
                    divThree.appendChild(h2);
                    divThree.appendChild(divFour);
                    divThree.appendChild(divFive);

                


                   
                       let br=document.createElement("br")
                    let textForh2 = document.createTextNode(item.name);
                    h2.appendChild(textForh2);
                    let textForPassword = document.createTextNode(item.password);
                    let textForPhone = document.createTextNode(item.phone);
                    let textForDate = document.createTextNode(item.date);
                    let textForGender= document.createTextNode(item.gender);
                    let textForDiseases= document.createTextNode(item.diseases);
                    divFour.appendChild(textForPassword);
                    divFive.appendChild(textForPhone );
                    divFive.appendChild(textForDate);
                    divFive.appendChild(br);
                    divFive.appendChild(textForGender);
                    divFive.appendChild(br);
                    divFive.appendChild(textForDiseases);
                    

            
                    // mainDiv.appendChild(text);
                } );







        //         while(localStorage.getItem( "allData")!=null){

                        
        //                         for(let i=0 ; i<allData.length; i++){
        //                     
        //                     let name1=printValue[i].name;
        //                     let gender1=printValue[i].gender;

        //                     let date1=printValue[i].date;
        //                     let password1=printValue[i].password;
        //                     let diseases1=printValue[i].diseases;
        //                     let phone1=printValue[i].phone;
        //                     let x = document.createTextNode(name1);
        //                     let x2 = document.createTextNode(gender1);
        //                     let x3 = document.createTextNode(date1);
        //         let x4 = document.createTextNode(password1);
        //         let x5 = document.createTextNode(diseases1);
        //         let x6 = document.createTextNode(phone1);


        //         mainDiv.appendChild(x)  ;
        //         mainDiv.appendChild(x2) ;
        //         mainDiv.appendChild(x3) ;
        //         mainDiv.appendChild(x4) ;
        //         mainDiv.appendChild(x5) ;
        //         mainDiv.appendChild(x6) ;

        //    }



         
        // }
            }

            // DOMContentLoaded.addEventListener("load", cardData);




 
        // let allData = []; // Declaration outside the function scope

        //     function render() {


        //         let form = document.getElementById("form-id");
        //         let name     = form.name.value;
        //         let password = form.password.value;
        //         let phone    = form.phone.value;
        //         let date     = form.date.value;
        //         let gender   = form.gender.value;
        //         let diseases = form.diseases.value;

            
                
        //         let newData=[name,password,phone,date,gender,diseases]; 
        //         allData.push(newData);

        //         // Store the updated data back in localStorage
        //         localStorage.setItem("allData", JSON.stringify(allData));



        //     let getData=localStorage.getItem("allData");


        //     let printValue=JSON.parse(getData);

        //     //finally !!!!!!!!!!!!
        //     document.write(printValue[0][0]);

        //         return false;  // Prevent loading HTML
        //     }
