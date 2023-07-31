


const formdata = () => {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    if(email == '' || password ==''){
        window.alert('Please fill the data')
    } else{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
              //  window.location.reload()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          }) 
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
      
    }
}


