<?
header("Content-Type: text/html; charset=UTF-8");

	include "php/config.php";	//Session �� DB ���ἳ��
	include "php/util.php";		//���� ��ƿ��Ƽ �Լ�
	
	//mysql ����
	$connect = my_connect($host, $dbid, $dbpass, $dbname);

	$event_name = addslashes($event_name);
	$date = addslashes($date);
	$content = addslashes($content);
	mysql_query("SET NAMES utf8");

$query = "insert into club(event_image, event_name, date, content)
values('$event_image','$event_name','$date','$content')"; 

$result = mysql_query($query, $connect) or die(mysql_error());

if(!$result) {
	err_msg("�����ͺ��̽� ������ �߻��Ͽ����ϴ�.");
}
else {
	echo "<script>
			window.alert('���������� ���� �ԷµǾ����ϴ�.');
		</script>";
echo "<meta http-equiv='Refresh' content='0;url=event.php'>";
}

?>

