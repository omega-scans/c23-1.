let lggn = document.querySelector(".userlogin");
let logoutbttn = document.querySelector(".dropdown-content")
auth.onAuthStateChanged((user) => {
if(user){
  lggn.innerHTML += `<a class="mnp" href="/admin" class="">Dashboard</a>`;

  logoutbttn.innerHTML += `<a class="mnp" href="#" onclick="logoutUser()" class="">Logout</a>`;

} else {
    lggn.innerHTML += '<a class="mnp" href="/admin" class="">Login</a>';
}
})
