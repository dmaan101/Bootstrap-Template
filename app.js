$("#login").click(function(){
    var name = $("#username").val();
    var pass = $("#password").val();
    if(name == "daksh" && pass == "zxcvbnm"){
     window.location = "bootindex.html";
    }
    else if(name == "bhawika" && pass == "asdfghjkl"){
     window.location = "bootindex.html";   
    }
    else if(name == "chiranshu" && pass == "qwertyuiop"){
     window.location = "bootindex.html";
    }
    else
    {
        alert("Username Password Doesnt Match");
    }
});