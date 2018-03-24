var allUsers = [{                                   //dummy dataset of users in array of objects 
    "name" : "vimal",                                //storing email and password for each user
    "email": "vimalmunjani94@gmail.com",            
    "password": "vimal123"
  },
  {
    "name" : "aditya",
    "email": "aditya@gmail.com",
    "password": "aditya123"
  },
  {
    "name" : "yash",
    "email": "yash@gmail.com",
    "password": "yash123"
  }
]


//checkLogin function
let checkLogin = (email, password, allUsers) => {

  let isUserFound = false                   // flag isUserFound set to false
  let passwordCorrect = false               // flag passwordCorrect set to false
  let loggedOnUser,wrongPasswordUser

  for (user of allUsers) {                  
    console.log(user)   
    if (user.email == email) {              // if-else #emailcheck

      if (user.password == password) {      // if-else #passwordcheck

        isUserFound = true
        passwordCorrect = true              // if both email and password are correct
        loggedOnUser = user.name            // break when both are correct
        break                               

      } else {

        isUserFound = true                  //when only email is valid
        passwordCorrect = false             
        wrongPasswordUser = user.name

      }                                    // end if-else #passwordcheck 
    } else {
      isUserFound = false                  // when email is invalid
    }                                      // end if-else #emailcheck
  } // end for of loop

  if (isUserFound == true && passwordCorrect == true) {
    
    alert(`Welcome ${loggedOnUser} 
You are logged in!`)

  } else if (isUserFound == true && passwordCorrect == false) {
    
    alert(` Hello ${wrongPasswordUser}
You have provided incorrect password`)

  } else {

    alert(`No user with this email found`)
    
  }

} // end checkLogin

let enteredEmail = window.prompt(`Enter Email`)                 //User Input , Email
let enteredPassword = window.prompt(`Enter Password`)           //User Input , Password
checkLogin(enteredEmail, enteredPassword, allUsers)              // call to checkLogin function
