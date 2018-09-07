window.onload = function(){
    var div4=document.getElementById('div4');
          ul=document.getElementById('ul');
          list=document.getElementById('list').getElementsByTagName('li');
          index=0;
          timer=null;
          if(timer){
              this.clearInterval(timer);
              timer=null;
        }
        timer=this.setInterval(autoPlay,2000);
        function autoPlay(){
            index++;
            if(index >= list.length){
                index=0;
            }
            changeImg(index);
        }
        function changeImg(curIndex){
            for(var j=0;j<list.length;j++){
                list[j].className="";

            }
            list[curIndex].className="on";
            ul.style.marginTop=-220*curIndex+"px";
            index=curIndex;

        }
        div4.onmouseover=function(){
            clearInterval(timer);
        }
        div4.onmouseout=function(){
            timer=setInterval(autoPlay,2000);
        }
        for(var i=0;i<list.length;i++){
            list[i].id=i;
            list[i].onmouseover=function(){
                clearInterval(timer);
                changeImg(this.id);
            }

        }


}