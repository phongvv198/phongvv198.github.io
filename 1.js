 $(function(){
     vitricuaedu=$('#khoiedu').offset().top;
     console.log(vitricuaedu);
    $(".xuong,.kn").click(function(){
        $('body,html').animate({scrollTop:vitricuaedu},700)
         return false;
    })
    vitricuasp=$('#khoisanpham').offset().top;
    console.log(vitricuasp);
    $(".sp").click(function(){
        $('body,html').animate({scrollTop:vitricuasp},700)
        return false;
    }) 
    vitricuacmt=$('#khoicomment').offset().top;
    console.log(vitricuasp);
    $(".cmt").click(function(){
        $('body,html').animate({scrollTop:vitricuacmt},700)
        return false;
    }) 
})  
