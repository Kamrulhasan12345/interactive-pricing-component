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
amnt =document.getElementById("amnt");

function updatePrice() {
  if (this.value === 8) {
    amnt.innerHTML = list_value.value[0];
  }
  else if (this.value === 12) {
    amnt.innerHTML = list_value.value[1];
  }
  else if (this.value === 16) {
    amnt.innerHTML = list_value.value[2];
  }
  else if (this.value === 24) {
    amnt.innerHTML = list_value.value[3];
  }
  else if (this.value === 36) {
    amnt.innerHTML = list_value.value[4];
  }
}