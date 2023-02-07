window.onload = function(){
var courseList = document.getElementsByClassName('course_type_btn')
var ageList = document.getElementsByClassName('course_age_btn')
var sliderBtnsList = document.getElementsByClassName('slider_btn')
var coursesLine = document.getElementById('coursesLine')
var leftArrow = document.getElementById('leftArrow')
var rightArrow = document.getElementById('rightArrow')
const filterBox = document.querySelectorAll('.course_card')
var typeFilter = 'all';
var ageFilter = 'all';
let offset = 0;
var currentActiveSlide = 0;
setClickListners(courseList,' course_type_btn_active')
setClickListners(ageList,' course_age_btn_active')
//setClickListners(sliderBtnsList,' slider_btn_active')
//setSlideListners(sliderBtnsList)


rightArrow.onclick=function() {
  if (offset < 3467) {
    sliderBtnsList[currentActiveSlide].className = sliderBtnsList[currentActiveSlide].className.replace('slider_btn_active',"")
    currentActiveSlide += 1;
    sliderBtnsList[currentActiveSlide].className += ' slider_btn_active';
    offset += 1156;
    coursesLine.style.right = offset + 'px'
  }
}

leftArrow.onclick=function() {
  if (offset > 0) {
    sliderBtnsList[currentActiveSlide].className = sliderBtnsList[currentActiveSlide].className.replace('slider_btn_active',"")
    currentActiveSlide -= 1;
    sliderBtnsList[currentActiveSlide].className += ' slider_btn_active';
    offset -= 1156;
    coursesLine.style.right = offset + 'px'
  }
}

function manageClasses(element){
  

}

function setClickListners(list,classNameVar) {
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function() {
          if (!this.classList.contains('slider_btn')){
            if (this.dataset['f'] != null){
              typeFilter = this.dataset['f'];
            }
            if (this.dataset['fage'] != null){
              ageFilter = this.dataset['fage'];
            }
            console.log(typeFilter,ageFilter)
            filterBox.forEach( elem => {
              
            if (typeFilter != 'all' && ageFilter != 'all'){
                if ((elem.dataset['f'] != typeFilter) || (Number(elem.dataset['fage']) > Number(ageFilter))) {elem.classList.add('hide')} else {elem.classList.remove('hide')}}

            if (typeFilter == 'all' && ageFilter != 'all') {if (Number(elem.dataset['fage']) > Number(ageFilter)) {elem.classList.add('hide')} else {elem.classList.remove('hide')}}

            if (typeFilter != 'all' && ageFilter == 'all') {if (elem.dataset['f'] != typeFilter) {elem.classList.add('hide')}else{elem.classList.remove('hide')}}

            if (typeFilter == 'all' && ageFilter == 'all'){elem.classList.remove('hide')}

            });
          }
          offset = 0;
          coursesLine.style.right = offset + 'px';
          sliderBtnsList[currentActiveSlide].classList.remove('slider_btn_active')
          currentActiveSlide = 0;
          sliderBtnsList[currentActiveSlide].classList.add('slider_btn_active')


          var current = document.getElementsByClassName(classNameVar);
          current[0].className = current[0].className.replace(classNameVar, "");
          this.className += classNameVar;
        });
      }
  }

function setSlideListners(list) {
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", function() {
            coursesLine.style.right = i*1156 + 'px';
        });
      }
  }
}

