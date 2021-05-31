$('div#blog li h3 ').each(function (index){
   $('<div id="blooguer'+index+'">').appendTo(this);

console.log(this)

})
.click(function (e) {

             var  $this = $(this),
            $a = $this.find('a'),
            href = $a.attr('href'),
            $target = $('<div/>').insertAfter($this),
            id = '#' + href.split('#')[1];
            e.preventDefault();
            $target.load('data/blog.html '+id)
    console.log(this)

    });






