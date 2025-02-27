// form fill
	function mouseOver() {
		submit.style.background = "blue";
		submit.text.color = "white";
	}

	function mouseOut() {
		submit.style.color = "#42f575";
		submit.style.background = "white";
	}

	function information(a) {
	var a = document.getElementById('fullname').value;
	window.alert ('You may proceed to picking your ticket, ' + a + '.')
	}


// onchange
	document.getElementById("fullname").onchange = function() {changeToCapital()}
	function changeToCapital() {
		var fname = document.getElementById("fullname");
		fname.value = fname.value.toUpperCase();
	}

// ticket price 

	function checkDiscount() {
		let seatType = document.getElementById("seats").value;
		let userType = document.getElementById("options").value;
		//
		let originalPrice;
		if (seatType === "gen-ad") {originalPrice = 1540;}
		if (seatType === "ub") {originalPrice = 1790;}
		if (seatType === "vip") {originalPrice = 4999;}
		if (seatType === "lb") {originalPrice = 2530;}
		//
		let discountMultiplier = (userType === "student") * 0.2;
		let discountedPrice = originalPrice - (originalPrice * discountMultiplier);

		window.alert('Your ticket price is ₱' + discountedPrice.toFixed(2) + "." + " Please proceed to the next step."); 
	}

// ticket print


	function printly (a) {
		var a = document.getElementById("printable").value;
		window.alert('Please check your email for your ticket. Thank you for purchasing' + a +'!')
	}