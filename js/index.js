  window.onload=function(){
     var ban=$('.bannerzj')[0];
     var imgs=$('.bat');
     var lis=$('.dian');
     var bannerlr=$('.bannerlr')[0];
     var banL=$('.bannerL')[0];
     var banR=$('.bannerR')[0];
     var flag=true;
     var num=0;
     var t=setInterval(move,1000);
     ban.onmouseover=function(){
     	clearInterval(t);
     	banL.style.display='block';
        banR.style.display='block';
     }
     ban.onmouseout=function(){
        clearInterval(t);
        t=setInterval(move,1000);
        banL.style.display='none';
        banR.style.display='none';
     }
     for(var i=0;i<lis.length;i++){
         lis[i].index=i;
         lis[i].onclick=function(){
         	num=this.index;
         for(var j=0;j<imgs.length;j++){
        animate(imgs[j],{opacity:0},1000);   //动画效果
        // imgs[j].style.zIndex=0;
        lis[j].style.background="#3e3e3e";
       
      }
        animate(imgs[num],{opacity:1},1000);  //动画效果
      // imgs[num].style.zIndex=3;    
        lis[num].style.background="#e5004f";

         	}
         }
     banR.onclick=function(){
     	move();
     }
     banL.onclick=function(){
     	if(!flag){
                          return; 
                        }            //把手用开关
                        flag=false;
  	    num--;
    if(num<0){
      num=imgs.length-1;
    }
    for(var i=0; i<imgs.length; i++){
      animate(imgs[i],{opacity:0},1000,function(){flag=true});   //动画效果
        // imgs[j].style.zIndex=0;
        lis[i].style.background="#3e3e3e";

      }
      animate(imgs[num],{opacity:1},1000,function(){flag=true});  //动画效果
      // imgs[num].style.zIndex=3;    
      lis[num].style.background="#e5004f";

  }
     function move(){
     	 if(!flag){
                          return; 
                        }            //把手用开关
                        flag=false;
		    num++;
		    if(num==imgs.length){
		    num=0;	
		    }
	     for (var i=0;i<imgs.length;i++){
	     	  // imgs[i].style.zIndex=0;
	     	  lis[i].style.background="#3e3e3e";       
	     	  animate(imgs[i],{opacity:0},1000,function(){flag=true}); 
	     }
	      // imgs[num].style.zIndex=3;
	      lis[num].style.background="#e5004f";
       
	      animate(imgs[num],{opacity:1},1000,function(){flag=true}); 
	   }



  var box=$(".ssmpbrzjtz");
  for (var i=0;i<box.length;i++){
    line(box[i]);
  }
  function line(obj){   
    var bw=obj.offsetWidth;        
    var bh=obj.offsetHeight;
    var left=$(".ssmpbrzjtzleft")[i];
    var right=$(".ssmpbrzjtzright")[i];
    var top=$(".ssmpbrzjtztop")[i];
    var bottom=$(".ssmpbrzjtzbottom")[i];
    obj.onmouseover=function(){
      animate(left,{height:bh});
      animate(right,{height:bh});
      animate(top,{width:bw});
      animate(bottom,{width:bw});
    }
    obj.onmouseout=function(){
      animate(left,{height:0});
      animate(right,{height:0});
      animate(top,{width:0});
      animate(bottom,{width:0});
    }
  }

  var box=$(".cztmzj1");
  for (var i=0;i<box.length;i++){
    line1(box[i]);
  }
  function line1(obj){   
    var bw=obj.offsetWidth;        
    var bh=obj.offsetHeight;
    var left=$(".cztmzj1left")[i];
    var right=$(".cztmzj1right")[i];
    var top=$(".cztmzj1top")[i];
    var bottom=$(".cztmzj1bottom")[i];
    obj.onmouseover=function(){
      animate(left,{height:bh});
      animate(right,{height:bh});
      animate(top,{width:bw});
      animate(bottom,{width:bw});
    }
    obj.onmouseout=function(){
      animate(left,{height:0});
      animate(right,{height:0});
      animate(top,{width:0});
      animate(bottom,{width:0});
    }
  }

	}

