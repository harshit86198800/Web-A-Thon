var SoftwareSkill = document.getElementsByClassName("SoftwareSkill");
 
for (var i = 0; i < SoftwareSkill.length; i++) {
  SoftwareSkill[i].onclick = function() {
    this.classList.toggle('is-open');
 
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}