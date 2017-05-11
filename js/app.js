// 1. It should link the checkbox to our script.
// 2. It should test if checkbox is toggled on or off.
// 3. If checked, it should test each article
  // 4. It should only show the article that is non-dairy...
  // 5. ...and hide the rest

var dairyCheckbox = $('.dairy-checkbox');
// console.log(dairyCheckbox); to check
// whether the checkbox is working
var articles = $('article');

dairyCheckbox.change(function(){
  if (this.checked) {
  // console.log('yes it is checked')

  articles.each(function(){
    if ($(this).hasClass('non-dairy')){
      $(this).fadeOut();
    }
    })
  } else{
    articles.each(function(){
        $(this).fadeIn();

  })
}
});

var ingredientsCheckbox = $('.ingredients-checkbox');
console.log(ingredientsCheckbox);

var sections = $('section')
ingredientsCheckbox.change(function(){
  if (this.checked) {

    sections.each(function(){
      if ($(this).hasClass('ingredients')){
        $(this).fadeOut();
      }
    })
  }
})

var stepsCheckbox = $('.steps-checkbox');
stepsCheckbox.change(function(){
  if (this.checked) {

    sections.each(function(){
      if ($(this).hasClass('instructions')){
        $(this).fadeOut();
      }
    })
  }
})

var infoCheckbox = $('.info-checkbox');
infoCheckbox.change(function(){
  if (this.checked) {

    sections.each(function(){
      if ($(this).hasClass('info')){
        $(this).fadeOut();
      }
    })
  }
})
