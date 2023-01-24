window.onload = function(){
var courseList = document.getElementsByClassName('course-type-btn')
var ageList = document.getElementsByClassName('course-age-btn')
var sliderBtnsList = document.getElementsByClassName('slider_btn')
var coursesLine = document.getElementById('coursesLine')
setClickListners(courseList,' course_type_btn_active')
setClickListners(ageList,' course_age_btn_active')
setClickListners(sliderBtnsList,' slider_btn_active')
setSlideListners(sliderBtnsList)
function setClickListners(list,classNameVar) {
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function() {
          var current = document.getElementsByClassName(classNameVar);
          current[0].className = current[0].className.replace(classNameVar, "");
          this.className += classNameVar;
        });
      }
  }

function setSlideListners(list) {
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function() {
            coursesLine.style.right = i*1157 + 'px';
        });
      }
  }
}

