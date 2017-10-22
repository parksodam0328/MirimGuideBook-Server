<?
header("Content-Type: text/html; charset=UTF-8");

	include "php/config.php";	//Session 및 DB 연결설정
	include "php/util.php";		//각종 유틸리티 함수
	
	//mysql 연결
	$connect = my_connect($host, $dbid, $dbpass, $dbname);

	$employ_now = addslashes($employ_now);
	$company_name = addslashes($company_name);
	$field = addslashes($field);
	$website = addslashes($website);
	mysql_query("SET NAMES utf8");

$query = "insert into employment(employ_now, company_name, field, website, year)
values('$employ_now','$company_name','$field','$website','$year')"; 

$result = mysql_query($query, $connect) or die(mysql_error());

if(!$result) {
	err_msg("데이터베이스 오류가 발생하였습니다.");
}
else {
	echo "<script>
			window.alert('정상적으로 값이 입력되었습니다.');
		</script>";
echo "<meta http-equiv='Refresh' content='0;url=employment.php'>";
}

?>

