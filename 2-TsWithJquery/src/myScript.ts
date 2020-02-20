$("h1").css('color','red');

// $("#btnClickMe").click(function () {
//     alert("this is working !");
// });

$("#btnClickMe").click(function(){
    alert("Working");
});


function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

$("#box").click(function () {
    alert(greeter(user));
});