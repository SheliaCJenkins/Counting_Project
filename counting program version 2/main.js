var name = prompt("What is your name?")
console.log(name)

var popup = alert(" Your name is " + name + " right")

$("h1").text(" Hey, " + name + " Lets Count Clouds Together. ")

// $("#b1").on("click", function() {
// var num = $("#first").val()
// console.log("hello")
// $("h2").empty();

// for( var num = 0; num < $("first"); num++)
// { $("h2").append((num+1))
// }
// })

// $("#b2").on("click", function() {
// for( var num = 0; num < $("first"); num+=2)
// { $("h2").append((num+2))
// }
// })

// Buttons not working


$("#b1").on("click", function () {
	var num = $("#first").val()
	console.log("hello");
	$(".picturesnumbers").empty();

	if (num == "" || num < 0) {
		alert("Please enter a positive number");
	}
	if (isNaN(parseInt(num))) {

		alert("The sky is beautiful isn't it? Lets keep counting.");
		return;
	}

	for (var i = 0; i <= num; i++) {
		$(".picturesnumbers").append('<img src="cloudpic2.jpeg"/>' + i + " ")

	}
})

$("#b2").on("click", function () {
	var num = $("#first").val()
	console.log("hello");
	$(".picturesnumbers").empty();

	if (num == "" || num < 0) {
		alert("Please enter a number");
	}
	if (isNaN(parseInt(num))) {

		alert("Please start cloud counting.");
		return;
	}

	for (var i = 0; i < num; i += 2) {
		$(".picturesnumbers").append('<img src = "cloudpic2.jpeg"/>' + (i + 2) + '<br>')
		console.log(i)
	}
})