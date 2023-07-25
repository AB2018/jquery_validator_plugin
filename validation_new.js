
jQuery('#frm').validate({
	ignore: '',
	rules: {
		firstname: "required",
		lastname: "required",
		office: "required",
		check: "required",
		gender: "required",
		about: "required",
		age: "required",
		year: "required",

		email: {
			required: true,
			email: true,
		},
		password: {
			required: true,
			minlength: 5
		},
		cpassword: {
			required: true,
			minlength: 5,
			equalTo: "#password",
		},
		phone: {
			required: true,
			number: true,
			minlength: 10,
			maxlength: 10,
		},

	}, messages: {
		firstname: "Please enter your name",
		email: {
			required: "Please enter email",
			email: "Please enter valid email",
		},
		password: {
			required: "Please enter your password",
			minlength: "Password must be 8 char long"
		},
		cpassword: {
			required: "Please enter your password",
			minlength: "Password must be 8 char long",
		},
		phone: {
			required: "Please enter your Phone number",

		},
		check: "please select one item",
		gender: "Please select the gender",
		about: "Please write something!",

	},


	submitHandler: function (form) {
		form.submit();
	}


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

