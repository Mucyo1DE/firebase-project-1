const signup=()=>
    {
        const Username =document.getElementsById("username").value;
        const  email =document.getElementsById("email").value;
        const password =document.getElementsById("password").value;
console.log({Username,email,password})
Auth.CreateUserWithEmailAndPassword(email,password)
.then((usersAccount) => {
db.collection("users").doc().set({Username,EmailCreatedAt:NewData() })   
.then((userprofile) => {
    alert("user profile registered successfully")
    console.log(userprofile)
})
.catch((error) => {
   alert("user profile registration error") 
console.log(error)
})
})
.catch((error) => {
    alert("error occurred") 
 console.log(error)
 })

    }