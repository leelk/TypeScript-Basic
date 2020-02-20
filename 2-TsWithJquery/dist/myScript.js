"use strict";
$("h1").css('color', 'red');
// $("#btnClickMe").click(function () {
//     alert("this is working !");
// });
$("#btnClickMe").click(function () {
    alert("Working");
});
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
$("#box").click(function () {
    alert(greeter(user));
});
