
	 function getInputValue() {
        // Selecting the input element and get its value 
        let inputName = document.getElementById("inputName").value;
        let inputEmail = document.getElementById("inputEmail").value;
        let inputPhone = document.getElementById("inputPhone").value;
        let inputMessage = document.getElementById("inputMessage").value;
        alert("Your Email is sended successfully");


        Email.send({
        Host: "smtp.gmail.com",
        Username: "ahsanchughtai846@gmail.com",
        Password: "mackrugeri@1#",
        To: 'p176008@nu.edu.pk',
        From: "ahsanchughtai846@gmail.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
      })
        .then(function (message) {
          alert("mail sent successfully")
        });
      }