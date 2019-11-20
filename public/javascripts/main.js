$(document).ready(function () {
	//Mostrar menu mobil
	$('.ShowMenuMobile').on('click', function () {
		var mobileMenu = $('.NavBarP-Nav');
		var login = $('.Login');
		var body = $('body');
		if (mobileMenu.css('opacity') == "0") {
			mobileMenu.addClass('ShowBox');
			body.addClass('NoScroll');
			$(this).removeClass('fa-bars').addClass('fa-times');
		} else {
			mobileMenu.removeClass('ShowBox');
			if (login.css('opacity') == "1") {
				login.removeClass('ShowBox');
			}
			$(this).removeClass('fa-times').addClass('fa-bars');
			body.removeClass('NoScroll');
		}
	});
	//Mostrar login
	$('.btn-login').on('click', function (e) {
		e.preventDefault();
		var login = $('.Login');
		if (login.css('opacity') == "0") {
			login.addClass('ShowBox');
		} else {
			login.removeClass('ShowBox');
		}
	});
	//Redirección a Crear Cuenta
	$('.create-account').on('click', function (e) {
		location.href = "registro.html";
	});
	//Crear Cuenta
	let name_field = document.querySelector("#name_field")
	let mail_field = document.querySelector("#mail_field")
	let pass_field = document.querySelector("#pass_field")
	let checkpass_field = document.querySelector("#checkpass_field")
	let submit_btn = document.querySelector("#submit_btn")
	submit_btn.addEventListener("click", (e) => {
		e.preventDefault()		
		let name = name_field.value
		let mail = mail_field.value
		let pass = pass_field.value
		let checkpass = checkpass_field.value
		if (pass == checkpass) {
			location.href = "main.html";
		} else {
			alert("Algo salió mal")
			location.reload()
		}
	})
});