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
	let infoapp;
  if(confirm('Apreciezi aceasta aplicatie ?')) {
  	infoapp = 'Multumesc!';
  } else {
  	infoapp = 'Multumesc!';
  }
  document.getElementById('result').innerHTML = infoapp;
}
