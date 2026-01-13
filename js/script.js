let gender = "Male";
let income = "100000";
let area = "Dhaka";
let age = 21

// Note: All Critaria Requried

if (gender == "Male") {
  if (income >= 100000) {
    if (area == "Dhaka") {
   if (age >= 21){
       console.log("Congrats.. You R Pterfect");
   }
   else{
    console.log("Biyar boyos hoiya lok");
    
   }
    } else {
      console.log("Dhaka chara onno kono jaygay Biye Dibona");
    }
  } else {
    console.log("Error: you Are Fokir.. Age Borolok How..!");
  }
} else {
  console.log("Error: you Are looking For male Candidate");
}

// =============================================================

let marks = 84


if(marks < 0 || marks > 100){
    console.log("Invalid Marks");  
}

if(marks >= 0 && marks <= 32){
    console.log("You are failed");  
}

if(marks >= 33 && marks <= 39){
    console.log("D Grade");  
}

if(marks >= 40 && marks <= 49){
    console.log("C Grade");  
}

if(marks >= 50 && marks <= 59){
    console.log("B Grade");  
}

if(marks >= 60 && marks <= 69){
    console.log("A- Grade");  
}

if(marks >= 70 && marks <= 79){
    console.log("A Grade");  
}

if(marks >= 80 && marks <= 100){
    console.log("A+ Grade");  
}