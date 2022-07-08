const cityname=document.getElementById("cityname");
// const async = require("hbs/lib/async");
const city_name=document.getElementById("city_name");
const submitbtn=document.getElementById("submitbtn");
const temp_real_val=document.getElementById("temp_real_val");
const temp_status=document.getElementById("temp_status");
const datahide =document.querySelector(".middle_layer");

const getInfo=async(event)=>{
    event.preventDefault();
    let cityval=cityname.value;

   if (cityval == "") {
         city_name.innerText=`Plz Write The Name Before Search`;
         datahide.classList.add('data_hide');
   } else {
       try{
   let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=a1bb77ea94b192d3ff06d74c612d6b45`
       const response=await fetch(url);
       const data=await response.json();
       const arrdata=[data];

       city_name.innerText=`${arrdata[0].name}, ${arrdata[0].sys.country}`;
       temp_real_val.innerText=arrdata[0].main.temp;
    const tempmood=arrdata[0].weather[0].main;

        //condition to check rainny or cloudy
        if (tempmood == "clear") {
            temp_status.innerHTML=
            "<i class='fa-solid fa-sun' style='color:#eccc68;'></i>"

        } else if (tempmood =="cloudy")  {
            temp_status.innerHTML=
            "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            
        }else if (tempmood =="rainy")  {
            temp_status.innerHTML=
            "<i class='fa-solid fa-cloud-rain' style='color:#a4b0be;'></i>"
            
        }else{
            temp_status.innerHTML=
            "<i class='fas fa-cloud-sun'></i>"


        }

    datahide.classList.remove("data_hide");

   }catch{
    city_name.innerText=`Plz Enter The City Name Properly`;
    datahide.classList.add("data_hide");

   }
}
}
submitbtn.addEventListener("click",getInfo);