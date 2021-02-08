// Configure Slider
document.getElementById("slider").oninput = function() {
  var value = (this.value-this.min)*100/(this.max-this.min);
  this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ' + value + '%, hsl(224, 65%, 95%) ' + value + '%, hsl(224, 65%, 95%) 100%)';
  updatePrice();
};

//Configure Slider value
list_value = {
  "value":[
    {"value":"10K"},
    {"value":"50K"},
    {"value":"100K"},
    {"value":"500K"},
    {"value":"1M"}
    ]
};

slider = document.getElementById("slider");
//var amnt =document.getElementById("amnt");

function updatePrice() {
  var amnt =document.getElementById("amnt");
  if (this.value === "8") {
    amnt.innerHTML = "10K";
  }
  else if (this.value === 12) {
    amnt.innerHTML = "50K";
  }
  else if (this.value === 16) {
    amnt.innerHTML = "100K";
  }
  else if (this.value === 24) {
    amnt.innerHTML = "500K";
  }
  else if (this.value === 36) {
    amnt.innerHTML = "1M";
  }
}