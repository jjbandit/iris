// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready( function (evt) {

	$('form#contact-form').on('ajax:beforeSend', function (evt, data, status, xhr) {
		console.log(evt);
		console.log(data);
		evt.preventDefault();
		console.log('boobs');
	});
	$('form#contact-form').on('ajax:success', function (evt, data, status, xhr) {
		console.log(evt);
		console.log(data);
		alert("Success!");
	});

	$('form#contact-form', function () {
	});
});
