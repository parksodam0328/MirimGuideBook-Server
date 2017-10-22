<?
header("Content-Type: text/html; charset=UTF-8");
	include "php/config.php";	//Session 및 DB 연결설정
	include "php/util.php";		//각종 유틸리티 함수
	
	//mysql 연결
	$connect = my_connect($host, $dbid, $dbpass, $dbname);

	$intro_sub = addslashes($intro_sub);
	mysql_query("SET NAMES utf8");

	if($location_image) {
	$file_ext = substr(strchr($location_image, "."), 1);
	if($file_ext!='jpg'&&$file_ext!='jpeg'&&$file_ext!='gif'&&$file_ext!='bmp'&&$file_ext!='png') {
		err_msg("이미지 파일만 올릴 수 있습니다.");
	}
	if(!$location_image) {
		err_msg("지정한 파일이 없거나 파일크기가 0KB입니다.");
	}
}
$savedir = "upload/location_image";
$query = "insert into location(number, public_transport, location_image, school_office, floor, teacher, intro)
values('$number','$public_transport','$location_image','$school_office','$floor', '$teacher','$intro')"; 

$result = mysql_query($query, $connect) or die(mysql_error());

if(!$result) {
	err_msg("데이터베이스 오류가 발생하였습니다.");
}
else {
	echo "<script>
			window.alert('정상적으로 값이 입력되었습니다.');
		</script>";
echo "<meta http-equiv='Refresh' content='0;url=location.php'>";
}

?>

