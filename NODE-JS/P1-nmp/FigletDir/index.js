const figlet = require("figlet");
figlet("Tas Ba Hun Ala khair", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});