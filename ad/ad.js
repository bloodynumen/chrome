$().ready(function(){
    $('.ad-index-left,.ecom-banner').remove()
    setInterval(function(){
        $('.ecom-ads-wrap').remove();
        $('.ui-reelList-viewport').css('bottom','0');
    }, 500);
});
