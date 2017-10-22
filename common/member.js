
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
	alert("구분 번호 범위(1 ~ 3)에서 벗어났습니다");
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
	alert("구분 번호 범위(1 ~ 3)에서 벗어났습니다");
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


function checkLocationInput(){
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
  if(form.number.value<1||form.number.value>2){
	alert("구분번호 범위(1 ~ 2)에서 벗어났습니다");
	form.number.focus();
	return;
  }
  if(!IsNumber(form.code.name)){
    alert("우편번호는 숫자이어야 합니다!");
	form.code.focus();
	return;
  }
  if(stringRegx.test(form.subway.value)==true) { 
	alert("특수문자가 포함되어있습니다. 특수문자를 제외해주세요!");
	form.subway.focus();
	return;
  } 
  if(stringRegx.test(form.bus.value)==true) { 
	alert("특수문자가 포함되어있습니다. 특수문자를 제외해주세요!");
	form.bus.focus();
	return;
  } 
  if(!IsNumber(form.floor.name)){
    alert("층 번호는 숫자이어야 합니다!");
	form.floor.focus();
	return;
  }
  if(form.floor.value<1||form.floor.value>4){
	alert("층 번호 범위(1 ~ 4)에서 벗어났습니다");
	form.floor.focus();
	return;
  }

   if(stringRegx.test(form.teacher.value)==true) { 
	 alert("특수문자가 포함되어있습니다. 특수문자를 제외해주세요!");
	 form.teacher.focus();
	 return ;
  } 
   if(form.intro.value.length>200) {
     alert("교무실 소개는 200자를 넘을 수 없습니다!");
	 form.intro.focus();
	 return ;
  }
  form.submit();
  }

function checkAdmissionInput(){
   var form = document.form1;
   var stringRegx = /[`~!@#$%^&*|\\\'\";:\/]/gi;

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
	alert("구분번호 범위(1 ~ 3)에서 벗어났습니다");
	form.number.focus();
	return;
  }
  if(stringRegx.test(form.major.value)==true) { 
	alert("특수문자가 포함되어있습니다. 특수문자를 제외해주세요!");
	form.major.focus();
	return;
  } 
   if(form.major_intro.value.length>500) {
     alert("학과 소개는 500자를 넘을 수 없습니다!");
	 form.major_intro.focus();
	 return ;
  }
  if(stringRegx.test(form.room.value)==true) { 
	alert("특수문자가 포함되어있습니다. 특수문자를 제외해주세요!");
	form.room.focus();
	return;
  } 
  if(stringRegx.test(form.date.value)==true) { 
	alert("공백을 제외한 특수문자는 제외해주세요!");
	form.date.focus();
	return;
  } 
  if(stringRegx.test(form.apply.value)==true) { 
	alert("특수문자가 포함되어있습니다. 특수문자를 제외해주세요!");
	form.apply.focus();
	return;
  } 
  if(!IsNumber(form.faq_number.name)){
    alert("번호는 숫자이어야 합니다!");
	form.faq_number.focus();
	return;
  }
   if(stringRegx.test(form.title.value)==true) { 
	alert("'?'을 제외한 특수문자는 제외해주세요!");
	form.title.focus();
	return;
  } 
   if(form.content.value.length>500) {
     alert("내용은 500자를 넘을 수 없습니다!");
	 form.content.focus();
	 return ;
  }
  form.submit();
  }


function checkEmploymentInput(){
   var form = document.form1;
   var stringRegx = /[`~!@#$^&*+()=-_<>[]{}|\\\'\";:\/?]/gi;
   var pattern = new RegExp('^(https?:\\/\\/)?'+ // 프로토콜
  '((([a-z\d](([a-z\d-]*[a-z\d])|([ㄱ-힣]))*)\.)+[a-z]{2,}|'+ // 도메인명 <-이부분만 수정됨
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // 아이피
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // 포트번호
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // 쿼리스트링
  '(\\#[-a-z\\d_]*)?$','i'); // 해쉬테그들

  if(!IsNumber(form.year.name)){
    alert("번호는 숫자이어야 합니다!");
	form.year.focus();
	return;
  }
  if(stringRegx.test(form.employ_now.value)==true) { 
	alert("특수문자가 포함되어있습니다. '%' 외에는 특수문자를 제외해주세요!");
	form.employ_now.focus();
	return;
  } 
  if(stringRegx.test(form.company_name.value)==true) { 
	alert("특수문자가 포함되어있습니다. 특수문자를 제외해주세요!");
	form.company_name.focus();
	return;
  } 
   if(stringRegx.test(form.field.value)==true) { 
	 alert("특수문자가 포함되어있습니다. 특수문자를 제외해주세요!");
	 form.field.focus();
	 return ;
  } 
  if(pattern.test(form.website.value)==true) {
     alert("홈페이지 주소가 올바르지 않습니다. 다시 입력해주세요!");
     form.website.focus();
     return;
  }
  form.submit();
  }

function checkExperienceInput(){
   var form = document.form1;
   var stringRegx = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

  if(!form.major.value) {
     alert("계열를 입력하세요!");
	 form.major.focus();
	 return;
  }
  if(stringRegx.test(form.word.value)==true) { 
	 alert("특수문자가 포함되어있습니다. 특수문자를 제외해주세요!");
	 form.word.focus();
	 return ;
  }
  form.submit();
  }

  function checkEventInput(){
   var form = document.form1;
   var stringRegx = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

  if(!form.event_name.value) {
     alert("행사명을 입력하세요!");
	 form.event_name.focus();
	 return;
  }
  if(stringRegx.test(form.event_name.value)==true) { 
	 alert("특수문자가 포함되어있습니다. 특수문자를 제외해주세요!");
	 form.event_name.focus();
	 return ;
  }
  if(!form.date.value) {
     alert("날짜를 입력하세요!");
	 form.date.focus();
	 return;
  }
  if(!form.content.value) {
     alert("내용을 입력하세요!");
	 form.content.focus();
	 return;
  }
  if(form.content.value.length>500) {
     alert("내용은 500자를 넘을 수 없습니다!");
	 form.content.focus();
	 return ;
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
