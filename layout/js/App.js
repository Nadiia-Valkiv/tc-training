const Users = new UsersDataLayer();
const element = document.getElementById("submit");
element.addEventListener("click", saveRegistrationData);

function saveRegistrationData(){
    const userData = {
        [document.getElementById("email").value] : document.getElementById("psw1").value
      }
      Users.add(userData, Users.tableName)    
}



