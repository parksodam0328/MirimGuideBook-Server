<?
header("Content-Type: text/html; charset=UTF-8");
	include "php/util.php";
	include "php/config.php";	
	$connect = my_connect($host, $dbid, $dbpass, $dbname);

	$intro = addslashes($intro);
	mysql_query("SET NAMES utf8");

	$query = "update location2 set
			school_office='$school_office',
			teacher ='$teacher',
			floor ='$floor',
			intro ='$intro'
			  where id='$num'";
	$result = mysql_query($query, $connect);
	
	if(!$result) {
		err_msg("DB �۾��� ������ �߻��߽��ϴ�.");
	}
	else {
	echo "<script>
			window.alert('������ ���������� �����Ǿ����ϴ�.');
		</script>";
	echo "<meta http-equiv='Refresh' content='0;url=location1_view.php?num=$num'>";
	}

	

?>

