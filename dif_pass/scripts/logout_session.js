


$(document).ready(function(){


sessionStorage.removeItem("access_usertoken");
sessionStorage.removeItem("mydid");  
sessionStorage.removeItem("access_secret");
sessionStorage.clear();


alert('User Logout Successful');

window.location ='index.html';


});

