url = 'http://music.baidu.com/huodong/vote/vote?code=qingyang&_=1377159604926';
$().ready(function(){
    $('.save').click(function(){
        id = parseInt($("select[name='id']").val());
        millisecond = parseInt($("input[name='millisecond']").val());
        if (millisecond < 500) {
            alert("最少值为500");
            return false;
        }
        setInterval(function(){
            addVote(id);
        }, millisecond);
    });
});

function addVote(id) {
    if (id == 110) {
        id = Math.floor(Math.random() * 11) + 1
    }
    var voteUrl = url + '&id=' + id;
    var num = $(".num em");
    $.ajax({
        url : voteUrl,
        success : function(result){
            num.text(parseInt(num.text()) + 1)
        }
    });
}
