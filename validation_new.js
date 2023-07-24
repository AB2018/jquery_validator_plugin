

$(document).ready(function () {
	$(".next_btn").click(function () {

		
		checkall();

		var gender = $("input[name='radio']:checked").val();
		if (gender) {
			$("#radio_error").html("");

		}
		else {
			$("#radio_error").html("please select gender");

		}
		var checkbox = $("input[name='checkbox']:checked").val();
		if (checkbox) {
			$("#check_error").html("");

		}
		else {
			$("#check_error").html("please select one interest");

		}
     

	});

	function checkall() {

		if ($('#firstname').val() == '') {

			$("#firstname_error").html("Required Field");

		}
		if ($('#lastname').val() == '') {

			$("#lastname_error").html("Required Field");

		}
		if ($('#phone').val() == '') {

			$("#phone_error").html("Required Field");

		}
		if ($('#office').val() == '') {

			$("#office_error").html("Required Field");

		}
		if ($('#email').val() == '') {

			$("#email_error").html("Required Field");

		}
		if ($('#password').val() == '') {

			$("#password_error").html("Required Field");

		}
		if ($('#cpassword').val() == '') {

			$("#cpassword_error").html("Required Field");

		}
		if ($('#about').val() == '') {

			$("#about_error").html("Required Field");

		}
	}

	$('#firstname').blur(function () {

		var syntax = /^[0-9]+$/;
		var inputValue = $('#firstname').val();

		if (inputValue.length == '') {

			$("#firstname_error").html("Required Field");

		}
		else if (syntax.test(inputValue)) {
			$("#firstname_error").html("Number not allowed");

		}
		else {
			$("#firstname_error").html("");
		}
	});


	$('#lastname').blur(function () {

		var syntax = /^[0-9]+$/;
		var inputValue = $('#lastname').val();

		if (inputValue.length == '') {

			$("#lastname_error").html("Required Field");

		}
		else if (syntax.test(inputValue)) {
			$("#lastname_error").html("Number not allowed");

		}
		else {
			$("#lastname_error").html("");
		}
	});
	$('#phone').blur(function () {

		var syntax = /^[a-zA-Z]+$/;
		var inputValue = $('#phone').val();

		if (inputValue.length == '') {

			$("#phone_error").html("Required Field");

		}
		else if (syntax.test(inputValue)) {
			$("#phone_error").html("Only Nymber aallowed");

		}
		else {
			$("#phone_error").html("");
		}
	});
	$('#office').blur(function () {

		var syntax = /^[a-zA-Z]+$/;
		var inputValue = $('#office').val();

		if (inputValue.length == '') {

			$("#office_error").html("Required Field");
		}
		else if (syntax.test(inputValue)) {
			$("#office_error").html("Only Nymber aallowed");
		}
		else {
			$("#office_error").html("");
		}
	});

	$('#email').blur(function () {

		var syntax = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		var inputValue = $('#email').val();

		if (inputValue.length == '') {

			$("#email_error").html("Required Field");

		} else if ((!syntax.test(inputValue))) {
			$("#email_error").html("Invalid Format");
		}
		else {
			$("#email_error").html("");
		}
	});

	$('#password').blur(function () {

		var syntax = /^[a-zA-Z0-9]*$/;
		var inputValue = $('#password').val();

		if (inputValue.length == '') {

			$("#password_error").html("Required Field");

		} else if ((!syntax.test(inputValue))) {
			$("#password_error").html("Special character not allowed");
		} else if (this.value.length < 8 || this.value.length > 16) {
			$("#password_error").html("Password should be 8-16 digit");
		}
		else {
			$("#password_error").html("");
		}
	});


	$('#cpassword').blur(function () {

		var syntax = /^[a-zA-Z0-9]*$/;
		var inputValue = $('#cpassword').val();

		if (inputValue.length == '') {

			$("#cpassword_error").html("Required Field");

		} else if ((!syntax.test(inputValue))) {
			$("#cpassword_error").html("Special character not allowed");
		} else if (this.value.length < 8 || this.value.length > 16) {
			$("#cpassword_error").html("Password should be 8-16 digit");
		} else if (!($("#password").val() == (this.value))) {
			$("#cpassword_error").html("Password not matched");
		}
		else {
			$("#cpassword_error").html("");
		}
	});

	$('#about').blur(function () {

		var syntax = /^[a-zA-Z0-9]*$/;
		var inputValue = $('#about').val();

		if (inputValue.length == '') {

			$("#about_error").html("Required Field");

		} else if ((!syntax.test(inputValue))) {
			$("#about_error").html("Special character not allowed");
		} 
		else {
			$("#about_error").html("");
		}
	});

	$(".radio").change(function () {
		$("#radio_error").hide();
	});
	$(".checkbox").change(function () {
		$("#check_error").hide();
	});

	$('#date').click(function () {

		var date = $('#day').val();
		var month = $('#month').val();
		var year = $('#year').val();

		const birth = new Date(year, month - 1, date);
		const now = new Date();
		if (birth < now) {
			const diff = new Date(now.valueOf() - birth.valueOf());
			$('#age').val((Math.abs(diff.getFullYear() - 1970)) + ' years old');
		}

	});

});
