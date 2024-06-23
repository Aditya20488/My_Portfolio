// contact me functionality
function sendMail(){
    const userName = document.getElementById('name');
    const userEmail = document.getElementById('email');
    const userMessage = document.getElementById('message');
    
    if( userName.value === "" || userEmail.value === "" || userMessage.value === ""){
      alert('All fields are mandatory!');
      return;
    }
    const templateParams = {
      name: userName.value,
      email:userEmail.value,
      message:userMessage.value

    };

    
    emailjs.send('service_bizr50h', 'template_00a2k9l', templateParams)

    .then(function(response) {
       alert('Message Sent!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    
  
    userName.value = "";
    userEmail.value = "";
    userMessage.value = "";
  
  }
  const btn = document.getElementById('submitBtn');
  btn.addEventListener('click', sendMail);