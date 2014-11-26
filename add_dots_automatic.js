function addDotBeforeEachList($list_parent, ls_item_tag) {
    var $item = $list_parent.children(ls_item_tag);
    /* 设置 position relative*/
    $item.css('position', 'relative');
    /* 添加特定类名的点到每一个列表项元素*/
    $item.each(function(index, ele) {
    	$(ele).append("<b class='dots-before-li'></b>").hover(function() {
    		/* Stuff to do when the mouse enters the element */
    		$(this).find(".dots-before-li").addClass("dots-before-li-active");
    	}, function() {
    		/* Stuff to do when the mouse leaves the element */
    		$(this).find(".dots-before-li").removeClass("dots-before-li-active");
    	});
    });
};

$(function() {
    /* run the function*/
    addDotBeforeEachList($(".news"), 'p');
});
