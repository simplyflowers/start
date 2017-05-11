var ingredientsCheckbox = $('ingredients-checkbox');

ingredientsCheckbox.change(function(){
  if (this.checked) {
    articles.each(function(){
      if ($(this).hasClass('steps, info')){
        $(this).fadeOut();
      }
    }
  }
}
