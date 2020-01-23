'use strict';
$(document).ready(function() {

	particlesJS.load('particles-js', 'js/particles.json');

	var mcUrl = subscribeUrl;

	// Subscribe & More
	
	var subBtn = document.getElementById("subscribe-button");
	var subCls = document.getElementById("subscribe-close");
	var subModal = document.getElementById("subscribe-modal");
	var moreBtn = document.getElementById("know-more-button");
	var moreCls = document.getElementById("more-close");
	var more = document.getElementById("more");
	var toolkit = document.getElementById("toolkit");

	$(subBtn).on("click", function() {
		$(subModal).addClass("open");
		$(overlay).addClass("on");
	});

	$(subCls).on("click", function() {
		$(subModal).removeClass("open");
		$(overlay).removeClass("on");
	});

	$(moreBtn).on("click", function() {
		$(overlay).addClass("on");
		$(more).addClass("open");
	});

	$(moreCls).on("click", function() {
		$(more).removeClass("open");
		$(overlay).removeClass("on");
	});
	
	$(overlay).on("click", function() {
		if($(more).hasClass("open")) {
			$(more).removeClass("open");
			$(overlay).removeClass("on");
		}
	})
	
	$(more).mCustomScrollbar({
		scrollInertia: 200
	});
	
	$(toolkit).mCustomScrollbar({
		scrollInertia: 200
	});
	
	//Subscribe Form

	$('#mc-form').on("submit", function(){
		$(".response").addClass("active");
	});

	$("#mc-form").ajaxChimp({
		url: mcUrl
	});

	//Countdown

	if(countdown) {
		$(".countdown").addClass("active");
	}

	$('#countdown').countdown({
		date: configDate,
		render: function(data) {
			$(this.el).html(
				"<div class=\"count-box\"><h2 class=\"countdown-num\">" + data.days + "</h2>" + " <h4 class=\"countdown-word\">days</h4></div>" +
				"<div class=\"count-box\"><h2 class=\"countdown-num\">" + data.hours + "</h2>" + " <h4 class=\"countdown-word\">hours</h4></div>" +
				"<div class=\"count-box\"><h2 class=\"countdown-num\">" + this.leadingZeros(data.min, 2) + "</h2>" + " <h4 class=\"countdown-word\">minutes</h4></div>" +
				"<div class=\"count-box\"><h2 class=\"countdown-num\">" + this.leadingZeros(data.sec, 2) + "</h2>" + " <h4 class=\"countdown-word\">seconds</h4></div>");
			}
		});
	
	// Contact Form
	var $contactForm = $('#contact-form');

	$contactForm.on("submit", function(e) {
		e.preventDefault();
		var $submit = $('input:submit', $contactForm);
		var proceed = true;

		var post_data = {
			'email': email,
			'user_name'     : $('input[name=name]').val(), 
			'user_email'    : $('input[name=email]').val(), 
			'msg'           : $('textarea[name=message]').val()
		};
		$.post('contact_me.php', post_data, function(response){

			var output = response.text;

			$("#name").val('');
			$("#email").val('');
			$("#msg").val('');

			$("#contact-form #contact-result").addClass("submited");
			$("#contact-form #contact-result").html(output);
		}, 'json');
	});

	// Switcher
	var switcher = $("#switcher");
	var toolkit = $("#toolkit");
	switcher.on("click", function() {
		if($(toolkit).hasClass("active")) {
			$(toolkit).removeClass("active");
			$(switcher).removeClass("active");
		}
		else {
			$(toolkit).addClass("active");
			$(switcher).addClass("active");
		}
	})

	var backgroundScheme = "light";
	var backgroundSwitcherLight = document.getElementById("background-switcher-light");
	$(backgroundSwitcherLight).on("click", function() {
		if(backgroundScheme !== "light") {
			backgroundScheme = "light";
			$(backgroundSwitcherDark).removeClass("active");
			$(backgroundSwitcherLight).addClass("active")
			var path = $('#color-switcher').attr('href').slice(0, -9) + ".css"
			$('#color-switcher').attr('href', path);
		}
	})
	var backgroundSwitcherDark = document.getElementById("background-switcher-dark");
	$(backgroundSwitcherDark).on("click", function() {
		if(backgroundScheme !== "dark") {
			backgroundScheme = "dark";
			$(backgroundSwitcherLight).removeClass("active");
			$(backgroundSwitcherDark).addClass("active")
			var path = $('#color-switcher').attr('href').slice(0, -4) + "-dark.css"
			$('#color-switcher').attr('href', path);
		}
	})

	$('#color-wrapper li').on('click', function(){
		if (backgroundScheme === "light") {
			var path = $(this).data('path');
		} else {
			var path = $(this).data('path').slice(0, -4) + "-dark.css";
		}
		$('#color-switcher').attr('href', path);
	});

	var timerOn = document.getElementById("timer-on");
	$(timerOn).on("click", function() {
		if($("#countdown").hasClass("active")) return
		else {
			$("#countdown").addClass("active");
			$(timerOff).removeClass("active");
			$(timerOn).addClass("active");
		}
	});

	var timerOff = document.getElementById("timer-off");
	$(timerOff).on("click", function() {
		if($("#countdown").hasClass("active")) {
			$("#countdown").removeClass("active");
			$(timerOff).addClass("active");
			$(timerOn).removeClass("active")
		}
	})

	var particlesBox = $(".hero");
	if(particles) {
		$(particlesBox).addClass("active");
	}

	var particlesOn = document.getElementById("particles-on");
	$(particlesOn).on("click", function() {
		if($(particlesBox).hasClass("active")) return
		else {
			$(particlesBox).addClass("active");
			$(particlesOff).removeClass("active");
			$(particlesOn).addClass("active");
		}
	});

	var particlesOff = document.getElementById("particles-off");
	$(particlesOff).on("click", function() {
		if($(particlesBox).hasClass("active")) {
			$(particlesBox).removeClass("active");
			$(particlesOff).addClass("active");
			$(particlesOn).removeClass("active")
		}
	})
});