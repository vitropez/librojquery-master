/*$('div.module');
$('#myList li:eq(2)');
$('#myListItem');
$('input').attr('label');
$(':hidden').length;
$('img').attr('alt').length;
$('#fruits tbody tr:odd');


$('img').each(function(i) {
    var $img = $(this);
    console.log($img.attr('alt'));
});
/*$('input').closest('form').addClass('yago');
$('#myList li.current ').removeClass('current').next().addClass('current');
$('#specials select').parent().next().find('input.input_submit');
$('#slideshow li:first').addClass('current').siblings().addClass('disabled');
 */

var $list= $('#myList');
for(var i=0;i<5;i++){
    $('<li>list item'+i+'</li>').appendTo($list);
    }


$('#myList li:odd').remove();
