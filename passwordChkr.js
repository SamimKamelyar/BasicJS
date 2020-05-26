const password = process.argv[2];

if (password.length > 12) {
  console.log("Passord is too long");
} else if (password.length < 8) {
  console.log("passowrd is too short")
} else {
  console.log("just right");
}