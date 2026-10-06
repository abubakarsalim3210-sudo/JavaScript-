let correctPassword = "1234";

for ( i = 1; i <= 5; i++) {
  let password = prompt("Enter your password");
  
  if (password === correctPassword) {
    alert("Phone Opens");
    console.log("Phone Opens");
    break;
  } else {
    if (i === 5) {
      alert("Phone is locked! Try again in 60 minutes");
      console.log("Phone is locked! Try again in 60 minutes");
    } else {
    
    }
  }
}