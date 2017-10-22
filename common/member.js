
function checkSubjectInput(){
   var form = document.form1;
   var stringRegx = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

  if(!form.grade.value) {
     alert("학년을 입력하세요!");
	 form.grade.focus();
	 return;
  }
  if(!IsNumber(form.grade.name)){
    alert("학년은 숫자이어야 합니다!");
	form.grade.focus();
	return;
  }
  if(form.grade.value<1||form.grade.value>3){
	alert("학년 범위에서 벗어났습니다");
	form.grade.focus();
	return;
  }
  if(!form.major.value) {
    alert("학과를 입력하세요!");
	form.major.focus();
	return;
  }
  if(stringRegx.test(form.major.value)==true) { 
	alert("특수문자가 포함되어있습니다. 특수문자를 제외해주세요!");
	form.major.focus();
	return;
  } 
  if(!form.name_sub.value) {
    alert("과목을 입력하세요!");
	form.name_sub.focus();
	return;
  }
  if(stringRegx.test(form.name_sub.value)==true) { 
	 alert("특수문자가 포함되어있습니다. 특수문자를 제외해주세요!");
	 form.name_sub.focus();
	 return ;
  } 
  if(!form.intro_sub.value) {
     alert("과목 소개를 입력해주세요!");
	 form.intro_sub.focus();
	 return ;
  }
  if(form.intro_sub.value.length>100) {
     alert("과목 소개는 100자를 넘을 수 없습니다!");
	 form.intro_sub.focus();
	 return ;
  }
  if(!form.teacher.value) {
     alert("선생님 성함을 입력하세요!");
	 form.teacher.focus();
	 return ;
  }
   if(stringRegx.test(form.teacher.value)==true) { 
	 alert("특수문자가 포함되어있습니다. 특수문자를 제외해주세요!");
	 form.teacher.focus();
	 return ;
  } 
   if(stringRegx.test(form.room.value)==true) { 
	 alert("특수문자가 포함되어있습니다. 특수문자를 제외해주세요!");
	 form.room.focus();
	 return ;
  } 
  form.submit();
  }

function checkRuleInput(){
   var form = document.form1;

  if(!form.number.value) {
     alert("번호를 입력하세요!");
	 form.number.focus();
	 return;
  }
  if(!IsNumber(form.number.name)){
    alert("번호는 숫자이어야 합니다!");
	form.number.focus();
	return;
  }
  if(!form.division_number.value) {
    alert("구분번호를 입력하세요!");
	form.division_number.focus();
	return;
  }
  if(!IsNumber(form.division_number.name)){
    alert("구분번호는 숫자이어야 합니다!");
	form.division_number.focus();
	return;
  }
  if(form.division_number.value<1||form.division_number.value>3){
	alert("구분 번호 범위에서 벗어났습니다");
	form.division_number.focus();
	return;
  }
  if(!form.content.value) {
     alert("규정 내용을 입력해주세요!");
	 form.content.focus();
	 return ;
  }
  if(form.content.value.length>100) {
     alert("규정 내용은 100자를 넘을 수 없습니다!");
	 form.content.focus();
	 return ;
  }
  form.submit();
  }

function checkClubInput(){
   var form = document.form1;
   var stringRegx = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

  if(!form.number.value) {
     alert("구분번호를 입력하세요!");
	 form.number.focus();
	 return;
  }
  if(!IsNumber(form.number.name)){
    alert("구분번호는 숫자이어야 합니다!");
	form.number.focus();
	return;
  }
  if(form.number.value<1||form.number.value>3){
	alert("구분 번호 범위에서 벗어났습니다");
	form.number.focus();
	return;
  }
  if(!form.club_name.value) {
     alert("동아리명을 입력해주세요!");
	 form.club_name.focus();
	 return ;
  }
  if(stringRegx.test(form.club_name.value)==true) { 
	 alert("특수문자가 포함되어있습니다. 특수문자를 제외해주세요!");
	 form.club_name.focus();
	 return ;
  }
  if(!form.club_room.value) {
     alert("동아리실을 입력해주세요!");
	 form.club_room.focus();
	 return ;
  }
  if(stringRegx.test(form.club_room.value)==true) { 
	 alert("특수문자가 포함되어있습니다. 특수문자를 제외해주세요!");
	 form.club_room.focus();
	 return ;
  }
  if(!form.teacher.value) {
     alert("담당교사를 입력해주세요!");
	 form.teacher.focus();
	 return ;
  }
  if(stringRegx.test(form.teacher.value)==true) { 
	 alert("특수문자가 포함되어있습니다. 특수문자를 제외해주세요!");
	 form.teacher.focus();
	 return ;
  }
  if(!form.intro.value) {
     alert("소개를 입력해주세요!");
	 form.intro.focus();
	 return ;
  }
  if(form.intro.value.length>200) {
     alert("소개는 200자를 넘을 수 없습니다!");
	 form.intro.focus();
	 return ;
  }
  form.submit();
  }


function checkEdit(){
   var form = document.form1;
  
  if(!form.passwd.value) {
     alert("비밀번호를 입력하세요!");
	 form.passwd.focus();
	 return ;
  }
    if(!IsPW(form.passwd.name)) {
     alert("비밀번호는 4 ~ 10자의 영문자나 숫자 또는 조합된 문자열이어야 합니다!");
	 form.passwd.focus();
	 form.passwd.select();
	 return;
  }
 
  if(form.passwd.value != form.passwd2.value) {
     alert("입력하신 비밀번호가 일치하지 않습니다.\n다시 확인하시고 넣어주십시오!");
	 form.passwd2.focus();
	 form.passwd2.select();
	 return;
  }


  if(!form.phone1.value) {
     alert("전화번호를 입력하세요!");
     form.phone1.focus();
	 return;
  }
  
  if(!form.phone2.value) {
     alert("전화번호를 입력하세요!");
     form.phone2.focus();
	 return;
  }
  if(!form.phone3.value) {
     alert("전화번호를 입력하세요!");
     form.phone3.focus();
	 return;
  }

  if(form.phone1.value) {
     if(!IsNumber(form.phone1.name)){
         alert("전화번호는 숫자이어야 합니다!");
	     form.phone1.focus();
	     return;
	  }
   }
 
  if(form.phone2.value) {
     if(!IsNumber(form.phone2.name)){
         alert("전화번호는 숫자이어야 합니다!");
	     form.phone2.focus();
	     return;
	  }
  }

   if(form.phone3.value) {
     if(!IsNumber(form.phone3.name)){
         alert("전화번호는 숫자이어야 합니다!");
	     form.phone3.focus();
	     return;
	  }
   }


  if(!form.email.value) {
     alert("이메일을 입력하세요!");
     form.email.focus();
	 return;
   }

   if (form.email.value.indexOf("@") < 0){
    alert('이메일 주소 형식이 틀립니다.');
    form.email.focus();
	return; 
   }

   if (form.email.value.indexOf("/") >= 0){
     alert('이메일 주소 형식이 틀립니다.');
     form.email.focus();
     return; 
    }

  form.submit();
 
 }


function lost_checkInput1(){
   var form = document.form1;
   
  
  if(!form.name.value) {
     alert("이름을 입력하세요!");
	 form.name.focus();
	 return ;
  }


 if(!form.jumin1.value) {
     alert("주민등록번호를 입력하세요!");
	 form.jumin1.focus();
	 return;
  }
    if(form.jumin1.value) {
	  if(!IsNumber(form.jumin1.name)){
         alert("주민등록번호는 숫자이어야 합니다!");
	     form.jumin1.focus();
	     return;
	  }
  }
 if(!form.jumin2.value) {
     alert("주민등록번호를 입력하세요!");
	 form.jumin2.focus();
	 return;
  }
  if(form.jumin2.value) {
      if(!IsNumber(form.jumin2.name)){
         alert("주민등록번호는 숫자이어야 합니다!");
	     form.jumin2.focus();
	     return;
	  }
  }
	var chk =0 
	var yy = form.jumin1.value.substring(0,2) 
	var mm = form.jumin1.value.substring(2,4) 
	var dd = form.jumin1.value.substring(4,6) 
	var sex = form.jumin2.value.substring(0,1) 

	if ((form.jumin1.value.length!=6)||(yy <25||mm <1||mm>12||dd<1)){ 
	alert ("주민등록번호를 바로 입력하여 주십시오."); 
	form.jumin1.focus(); 
	return ; 
	} 

	if ((sex != 1 && sex !=2 )||(form.jumin2.value.length != 7 )){ 
	alert ("주민등록번호를 바로 입력하여 주십시오."); 
	form.jumin2.focus(); 
	return; 
	} 

	// 주민등록번호 체크 

	for (var i = 0; i <=5 ; i++){ 
	chk = chk + ((i%8+2) * parseInt(form.jumin1.value.substring(i,i+1))) 
	} 

	for (var i = 6; i <=11 ; i++){ 
	chk = chk + ((i%8+2) * parseInt(form.jumin2.value.substring(i-6,i-5))) 
	} 

	chk = 11 - (chk %11) 
	chk = chk % 10 

	if (chk != form.jumin2.value.substring(6,7)) 
	{ 
	alert ("유효하지 않은 주민등록번호입니다."); 
	form.jumin1.focus(); 
	return; 
	} 

	   form.submit();
	  }



	function lost_checkInput2(){
	   var form = document.form2;
	   
	  if(!form.id.value) {
		 alert("ID를 입력하세요!");
		 form.id.focus();
		 return ;
	  }

	  if(!form.name.value) {
		 alert("이름을 입력하세요!");
		 form.name.focus();
		 return ;
	  }


	 if(!form.jumin1.value) {
		 alert("주민등록번호를 입력하세요!");
		 form.jumin1.focus();
		 return;
	  }

	 if(!form.jumin2.value) {
		 alert("주민등록번호를 입력하세요!");
		 form.jumin2.focus();
		 return;
	  }

	var chk =0 
	var yy = form.jumin1.value.substring(0,2) 
	var mm = form.jumin1.value.substring(2,4) 
	var dd = form.jumin1.value.substring(4,6) 
	var sex = form.jumin2.value.substring(0,1) 

	if ((form.jumin1.value.length!=6)||(yy <25||mm <1||mm>12||dd<1)){ 
	alert ("주민등록번호를 바로 입력하여 주십시오."); 
	form.jumin1.focus(); 
	return ; 
	} 

	if ((sex != 1 && sex !=2 )||(form.jumin2.value.length != 7 )){ 
	alert ("주민등록번호를 바로 입력하여 주십시오."); 
	form.jumin2.focus(); 
	return; 
	} 

	// 주민등록번호 체크 

	for (var i = 0; i <=5 ; i++){ 
	chk = chk + ((i%8+2) * parseInt(form.jumin1.value.substring(i,i+1))) 
	} 

	for (var i = 6; i <=11 ; i++){ 
	chk = chk + ((i%8+2) * parseInt(form.jumin2.value.substring(i-6,i-5))) 
	} 

	chk = 11 - (chk %11) 
	chk = chk % 10 

	if (chk != form.jumin2.value.substring(6,7)) 
	{ 
	alert ("유효하지 않은 주민등록번호입니다."); 
	form.jumin1.focus(); 
	return; 
	} 

   form.submit();
  }


function focus_move(){
 var str = document.form1.jumin1.value.length;
  if(str == 6)
	document.form1.jumin2.focus();
}

function focus_move2(){
 var str = document.form2.jumin1.value.length;
  if(str == 6)
	document.form2.jumin2.focus();
}


 function IsID(formname) {
     var form=eval("document.form1." + formname);

     if(form.value.length < 4 || form.value.length > 10) {
         return false;
     }
     for(var i=0; i < form.value.length; i++) {
         var chr = form.value.substr(i,1);
         if((chr < '0' || chr > '9') && (chr < 'a' || chr > 'z')) {
            return false;
         }
     }
     return true;
  }

  function IsPW(formname) {
     var form=eval("document.form1." + formname);

     if(form.value.length < 4 || form.value.length > 10) {
         return false;
     }
     for(var i=0; i < form.value.length; i++) {
         var chr = form.value.substr(i,1);
         if((chr < '0' || chr > '9') && (chr < 'a' || chr > 'z') && ( chr < 'A' || chr > 'Z')) {
            return false;
         }
     }
     return true;
  }

    
  function IsNumber(formname) {
     var form=eval("document.form1." + formname);

	 for(var i=0; i < form.value.length; i++) {
	     var chr = form.value.substr(i,1);
		 if((chr < '0' || chr > '9')) {
		    return false;
		 }
     }
     return true;
  }

 
 function check_ID_Window(ref) {
   var id= eval(document.form1.id);

   if(!id.value) {
      alert('아이디(ID)를 입력하신 후에 확인하세요!');
	  id.focus();
	  return;
   }else {
      ref = ref + "?id=" + id.value;
	  var window_left = (screen.width-640)/2;
	  var window_top = (screen.height-480)/2;
	  window.open(ref,"checkIDWin",'width=400,height=200,scrollbars=no,status=no,top=' + window_top + ',left=' + window_left + '');
   }
}

  function ZipWindow(ref,what) {
     var window_left = (screen.width-640)/2;
     var window_top = (screen.height-480)/2;
     window.open(ref,"zipWin",'scrollbars=yes,width=420,height=250,status=no,top=' + window_top + ',left=' + window_left + '');
  }

//-->