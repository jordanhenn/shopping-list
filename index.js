$(function() {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const userTextElement = $(this).find('#shopping-list-entry');
    $("ul.shopping-list").append(`<li>
    <span class="shopping-item">${userTextElement.val()}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
    userTextElement.val("");
  });  
  $('ul.shopping-list').on('click', 'button.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });
  $('ul.shopping-list').on('click', 'button.shopping-item-toggle', function(event) {
    $(this).closest('li').find('span.shopping-item').toggleClass('shopping-item__checked');
  });
});
