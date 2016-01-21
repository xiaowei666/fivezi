window.onload=function(){//注意：所有的代码哦度要写在这两个大括号内

//----------窝要创建一个-------	
	var 
	row =10,
	home = document.getElementById('sence'),
	width= Math.floor((550-row) /row ),
	child,
	shuxian,
	vic = document.getElementsByClassName('again'),
	victory= document.getElementsByClassName('victory'),
	ads= document.getElementsByClassName('ads'),
	cxx= document.getElementsByClassName('cxx'),
	hengxian;
	home.style.position = 'relative' ;
	
	var $ = function(str){
		return document.getElementsByClassName(str);
	}
	var $i = function(str){
		return document.getElementById(str);
	}
	for(var i = 0 ; i < row ; i++){
		var width2 =Math.floor(((550/row)/2) + (550/row)*i)+ 'px';
		hengxian = document.createElement('div');
		hengxian.setAttribute('class','heng');
		hengxian.style.width = '550px';
		hengxian.style.height = '1px';
		hengxian.style.position = 'absolute';
		hengxian.style.top = width2;
		hengxian.style.backgroundColor='white';
		home.appendChild(hengxian);
		zongxian = document.createElement('div');
		zongxian.setAttribute('class','zong');
		zongxian.style.width = '1px';
		zongxian.style.height = '550px';
		zongxian.style.position = 'absolute';
		zongxian.style.left = width2;
		zongxian.style.backgroundColor='white';
		home.appendChild(zongxian);
	}
	for (var i = 0 ; i < row ;i++){
		for(var j = 0; j < row ; j++){
			child = document.createElement('div');
			child.setAttribute('id',i+'_'+j);
			child.setAttribute('class','block');
			child.style.width = width+ 'px';
			child.style.height = width+ 'px';
			child.style.position = 'absolute' ;
			home.appendChild(child);	
			child.style.zIndex = 20 ;
			child.style.left =  j*width+3 +'px';
			child.style.top  =  i*width+3 +'px' ;
		}
			
	}
	panduan = function(dic,id){
		var
		x = Number(id.split('_')[0]),
		y = Number(id.split('_')[1]);
		var tx,ty;
		var hang = 1;
		tx = x ; ty = y;
		while(dic[tx + '_' + (ty-1)]){hang++;ty--;}
		tx = x ; ty=y;
		while(dic[tx + '_' + (ty+1)]){hang++;ty++;}
		if(hang == 5){return true;}
		
		var 
		lie  = 1; 
		
		tx = x ; ty = y ;
		while(dic[(tx-1) +'_'+ ty]){lie++;tx--}
		tx = x ; ty = y;
		while(dic[(tx+1) +'_'+ ty]){lie++;tx++}
		if(lie == 5){return true;}

		var zx =1;
		tx=x;ty=y;
		while(dic[(tx-1) + '_'+ (ty+1)]){zx++;tx--;ty++}
		tx=x;ty=y;
		while(dic[(tx+1) + '_'+ (ty-1)]){zx++;tx++;ty--}
		if(zx==5){return true;}

		var ax = 1 ; 
		tx = x ; ty = y ;
		while(dic[(tx+1) + '_'+ (ty+1)]){ax++;tx--;ty++}
		tx = x ; ty = y ;
		while(dic[(tx-1) + '_'+ (ty-1)]){ax++;tx--;ty--}
		if(ax==5){return true;}
		return false;
	}
	var block = document.getElementsByClassName('block'),ll = document.getElementsByClassName('ll');
	var 
	dict1 = {},hei = 0 ,bai = 0 ,
	dict2 = {};
	var kaiguan = true;
	for(var i = 0 ; i<block.length ; i++){
		block[i].onclick = function(){
			if( this.hasAttribute('aa') ){ return; }
			this.style.boxShadow = "5px 5px 5px rgba(13, 11, 10, 0.4)  ";
			var id = this.getAttribute('id');
			this.style.borderRadius = '50%';		
				if(kaiguan){
					this.style.background= 'url(./images/da/heizi.png)';
					this.style.backgroundSize = 'cover';
					kaiguan = false; 
					dict1[id] = true;
					hei += 1 ; 
					ll[0].innerHTML = hei ;
					if( panduan(dict1,id)) {
						var str = '黑棋赢了！';
						cxx[0].style.display='block';
						cxx[0].style.marginTop='0px';
	 					ads[0].innerHTML=str;
						return ;
						// location.reload();
					};
				}else{
					this.style.background= 'url(./images/da/baizi.png)';
					this.style.backgroundSize = 'cover';
					kaiguan = true;
					dict2[id] = true;
					bai+=1;
					ll[1].innerHTML = bai ;
	 				if( panduan(dict2,id) ) {
	 					var str = '白棋赢了！';
	 					home.backgroundColor = '#000';
	 					cxx[0].style.marginTop='0px';
	 					ads[0].innerHTML=str;
	 					return ; 
	 					// location.reload();
	 				};
				}		
			this.setAttribute('aa','true');
		};
	}

	var dds = function(){
		$('luotuo')[0].style.marginTop = '-768px' ; 
	}
	$('start')[0].onclick = function(){
		dds();
	}
	var cc = 0 ,dd = 0; 
	for(var i = 0 ; i<$('zou').length ; i++){
		$('zou')[i].style.backgroundPositionX = -200*i+'px';
		$('zou2')[i].style.backgroundPositionX = -200*i+'px';
	}
	
	var length = 100 ; 
	setInterval(function(){
			$('zou')[dd].style.display = 'none';
			$('zou')[cc].style.display = 'block';
			$('zou2')[dd].style.display = 'none';
			$('zou2')[cc].style.display = 'block';
			dd=cc ; 
			cc = cc + 1;
			if(cc==10){
				cc=0;
			}
	},150);

	setInterval(function(){
		length += 20 ; 
		$('pp')[0].style.right = length +'px';
		$('pp')[1].style.left = length +'px';
		if(length >= 600 ){
			length = -150;
		}
	},100)
	vic[0].onclick = function(){
 		location.reload();
	}



































	

};/*这里是结束的那个花括号*/

