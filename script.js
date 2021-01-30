// Configure Slider
document.getElementById("slider").oninput = function() {
  var value = (this.value-this.min)*100/(this.max-this.min);
  this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ' + value + '%, hsl(224, 65%, 95%) ' + value + '%, hsl(224, 65%, 95%) 100%)';
};