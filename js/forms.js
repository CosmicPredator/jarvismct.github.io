$(document).ready(function(){
	var formSent = false;
	
	function formCtrl(formId) {	
		$('#newsletter-form-'+formId+' #submit-'+formId).click(function(event) {
			$('#form-responses-'+formId+' ul').empty();
			
			var _name = $('#newsletter-form-'+formId+' #name-'+formId).val();
			var _email = $('#newsletter-form-'+formId+' #email-'+formId).val();
			var _hPotty = $('#website-'+formId).val();
			
			var nameIsValid = false;
			var mailIsValid = false;
			
			var formStrings = {
				"de": {
					"nameEmpty": 'Bitte gib deinen Namen ein',
					"mailInvalid": 'Bitte gib eine gültige E-Mail Adresse ein',
					"successMsg": 'Vielen Dank, du hast dich erfolgreich angemeldet!',
					"errorMsg": 'Etwas lief schief. Bitte fülle alle Felder aus und versuche es nochmal'
				}
			};
			
			if (_name.length == 0) {
				$('#form-responses-'+formId+' ul').append('<li>'+formStrings["de"]["nameEmpty"]+'</li>');
			} else {
				nameIsValid = true;
			}
			
			if(IsEmail(_email)==false){
				$('#form-responses-'+formId+' ul').append('<li>'+formStrings["de"]["mailInvalid"]+'</li>');
			} else {
				mailIsValid = true;
			}
					
			if (_hPotty.length == 0 && mailIsValid && nameIsValid && !formSent) {
				jQuery.ajax({
					type: 'POST',
					url: '/catchers/subscribe.php',
					data: {
						name: _name,
						email: _email,
						hpotty: _hPotty
					},
					cache:false,
					success:function(response){
						if(response == "sent") {
							$('#form-responses-01 ul').empty();
							$('#form-responses-01 ul').append('<li>'+formStrings["de"]["successMsg"]+'</li>');
							$('#newsletter-form-01').hide();
							
							$('#form-responses-02 ul').empty();
							$('#form-responses-02 ul').append('<li>'+formStrings["de"]["successMsg"]+'</li>');
							$('#newsletter-form-02').hide();
							formSent = true;
						} else {
							$('#form-responses-'+formId+' ul').empty();
							$('#form-responses-'+formId+' ul').append('<li>'+formStrings["de"]["errorMsg"]+'</li>');
						}
					}
					});
			}
			
			event.preventDefault();	
		});
	}
	
	formCtrl('01');
	formCtrl('02');
	
	function IsEmail(email) {
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!regex.test(email)) {
			return false;
		} else{
			return true;
		}
	}
});


(function () {
	const second = 1000,
		  minute = second * 60,
		  hour = minute * 60,
		  day = hour * 24;
  
	//I'm adding this section so I don't have to keep updating this pen every year :-)
	//remove this if you don't need it
	let today = new Date(),
		dd = String(today.getDate()).padStart(2, "0"),
		mm = String(today.getMonth() + 1).padStart(2, "0"),
		yyyy = today.getFullYear(),
		nextYear = yyyy + 1,
		dayMonth = "05/23/",
		birthday = dayMonth + yyyy;
	
	today = mm + "/" + dd + "/" + yyyy;
	if (today > birthday) {
	  birthday = dayMonth + nextYear;
	}
	//end
	
	const countDown = new Date(birthday).getTime(),
		x = setInterval(function() {    
  
		  const now = new Date().getTime(),
				distance = countDown - now;
  
		  document.getElementById("days").innerText = Math.floor(distance / (day)),
			document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
			document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
			document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
		  //do something later when date is reached
		  if (distance < 0) {
			document.getElementById("headline").innerText = "It's my birthday!";
			document.getElementById("countdown").style.display = "none";
			document.getElementById("content").style.display = "block";
			clearInterval(x);
		  }
		  //seconds
		}, 0)
	}());