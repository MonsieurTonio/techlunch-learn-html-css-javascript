var hours = 12;
if (hours >= 18) {
  $('.content').text("Yes, it's " + hours + ":00, so let's drink!")
} else { 
  $('.content').text("No, it's only " + hours + ":00, so go back to work!")
}
