alert('Bun venit in aplicatia QR Code App!');

function htmlEncode(value) {
    return $('<div/>').text(value).html(); 
} 

$(function () {  
  $('#generate').click(function () {  
   let finalURL ='https://chart.googleapis.com/chart?cht=qr&chl=' + 
   htmlEncode($('#content').val()) + '&chs=160x160&chld=L|0' 
   $('.qr-code-app-generate').attr('src', finalURL); 
	}); 
}); 

function like() {
	let likeapp;
  if(confirm('Apreciaza aceasta aplicatie ?')) {
  	likeapp = 'Multumesc!';
  } else {
  	likeapp = 'Multumesc!';
  }
  document.getElementById('result').innerHTML = likeapp;
}

function dislike() {
	let dislikeapp;
  if(confirm('Nu aprecia aceasta aplicatie')) {
  	dislikeapp = 'Multumesc!';
  } else {
  	dislikeapp = 'Multumesc!';
  }
  document.getElementById('result').innerHTML = dislikeapp;
}

function report() {
  let reportapp;
  if(confirm('Ai descoperit un bug? OK = TRIMITE ; ANULEAZA = RENUNTARE')) {
    reportapp = 'Trimis!';
  } else {
    reportapp = 'Anulat!';
  }
  document.getElementById('result').innerHTML = reportapp;
}