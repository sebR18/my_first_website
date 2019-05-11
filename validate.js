function validateForm() {

    var name = document.getElementById("name"); 
    var email = document.getElementById("e-mail");
    var comment = document.getElementById("comment");  


    if (name.value == "" || name.value.length < 3 || !/(\w.+\s).+/i.test(name.value))                                  
    { 
        alert("Please enter your name."); 
        return false;
    }
                                     //This email regex came from 'https://emailregex.com/'
    else if (email.value == "" ||  !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(email.value))                                  
    { 
        alert("Please enter your email."); 
        return false;
    }
    else if(comment.value == ""){
        alert("Please enter your comment."); 
        return false;
    }
    else{
        return true;
    }    
}