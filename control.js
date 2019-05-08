
Control = function() {
    removeCssClass = function(element, className) {
        if (element == undefined) return;
        element.classList.remove(className);
      };
      appendCssClass = function(element, className) {
        if (element == undefined) return;
        element.classList.add(className);
      };
      createNewPic = function() {
        var newPic = document.createElement("div");
        appendCssClass(newPic, "pic");
        var color1 = colorMaker();
        var color2 = colorMaker();
        var property = "linear-gradient(45deg," + color1 + "," + color2 + ")";
        newPic.style.background = property;
        newPic.innerHTML = "" + color1 + "<br>" + color2;
        return newPic;
      };
      colorMaker = function() {
        var r = parseInt(Math.random() * 255);
        var g = parseInt(Math.random() * 255);
        var b = parseInt(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
      };
  this.translatePx = 440;
  this.ele = document.getElementById("picBox");
  this.index = -1;
  this.pic_amount = 0;
  this.pics = document.getElementsByClassName("pic");

  this.move = function(dire) {
    var pics = this.pics;
    if (dire == -1 && this.index > 0) {
      //pre
      this.translatePx += 220;
      removeCssClass(pics[this.index], "now");
      removeCssClass(pics[this.index + 1], "next");
      removeCssClass(pics[this.index - 1], "pre");
      this.index--;
      appendCssClass(pics[this.index], "now");
      appendCssClass(pics[this.index + 1], "next");
      appendCssClass(pics[this.index - 1], "pre");
    } else if (dire == 1 && this.index < this.pic_amount - 1) {
      //next
      this.translatePx -= 220;
      removeCssClass(pics[this.index], "now");
      removeCssClass(pics[this.index + 1], "next");
      removeCssClass(pics[this.index - 1], "pre");
      this.index++;
      appendCssClass(pics[this.index], "now");
      appendCssClass(pics[this.index + 1], "next");
      appendCssClass(pics[this.index - 1], "pre");
    }
    this.ele.style.transform = "translateX(" + this.translatePx + "px)";
  };
  this.appendPicture = function() {
    var newPic = createNewPic();
    if (this.index == -1) {
      appendCssClass(newPic, "now");
      this.index = 0;
    } else if ( this.index == this.pic_amount - 1) {
      appendCssClass(newPic, "next");
    }
    
    this.pic_amount++;
    this.ele.style.width = 220 * this.pic_amount + "px";
    this.ele.appendChild(newPic);
  };
};
