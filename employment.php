<?
	include "php/config.php";	//Session 및 DB 연결설정
	include "php/util.php";		//각종 유틸리티 함수
	include "php/auth.php";

	
	//mysql 연결
	$connect = my_connect($host, $dbid, $dbpass, $dbname);
?>

<!DOCTYPE HTML>
<!--
	Phantom by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title>취업 관리</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main.css" />
		
		<script src="assets/js/jquery.min.js"></script>
		<script src="assets/js/skel.min.js"></script>
		<script src="assets/js/util.js"></script>
		<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
		<script src="assets/js/main.js"></script>
		<script src="common/member.js"></script>
		<script src="common/global.js"></script>
		<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
	</head>
	<body>
		<!-- Wrapper -->
			<div id="wrapper">

				<!-- Header -->
					<header id="header">
						<div class="inner">

							<!-- Logo -->
								<a href="php_admin.php" class="logo">
									<span class="symbol"><img src="images/logo.png" alt="" /></span><span class="title">Mirim Guide Book</span>
								</a>

							<!-- Nav -->
								<nav>
									<ul>
										<li><a href="#menu">Menu</a></li>
									</ul>
								</nav>

						</div>
					</header>

				<!-- Menu -->
					<nav id="menu">
						<h2>Menu</h2>
						<ul>
							<li><a href="intro.php">Introduce</a></li>
							<li><a href="subject.php">Subject</a></li>
							<li><a href="rule.php">Rule</a></li>
							<li><a href="club.php">Club</a></li>
							<li><a href="location.php">Location</a></li>
							<li><a href="entrance.php">Entrance</a></li>
							<li><a href="experience.php">Experience</a></li>
							<li><a href="employment.php">Employment</a></li>
							<li><a href="event.php">Event</a></li>
						</ul>
					</nav>

				<!-- Main -->
					<div id="main">
						<div class="inner">
							<h1>Employment</h1>
							<span class="image main"><img src="images/pic13.jpg" alt="" /></span>
							<center>
							<form name="form1" method="post" action="employment_check1.php">
								<table>
									<tr>
										<td>
											<table width="100%">
												<tr>
													<td colspan="7">
														<font size="6"><a href="php_admin.php"><b>Mirim Guide Book</b></a>
														&gt; Employment</font>
												</tr>
										<tr>
											<td>년도</td>
											<td><input type="text" name="year"></td>
										</tr>
										<tr>
											<td>취업현황</td>
											<td><input type="text" name="employ_now"></td>
										</tr>
										<tr>
											<td colspan="7">
											<center>
											<a href="javascript:checkEmploymentInput1()"><input type="button" value="확인"></a>
											<a href="employment1_list.php">
											<input type="button" value="목록"></a>
											<a href="php_admin.php">
											<input type="button" value="취소"></a>
											</center>
											</td>
										</tr>
										</table>
									</table>
								</form>
								<form name="form2" method="post" action="employment_check2.php">
								<table>
									<tr>
										<td>
											<table width="100%">
										<tr>
											<td>회사명</td>
											<td><input type="text" name="company_name"></td>
										</tr>
										<tr>
											<td>분야</td>
											<td><input type="text" name="field"></td>
										</tr>
										<tr>
											<td>홈페이지주소</td>
											<td><input type="text" name="website"></td>
										</tr>
										<tr>
											<td colspan="7">
											<center>
											<a href="javascript:checkEmploymentInput2()"><input type="button" value="확인"></a>
											<a href="employment2_list.php">
											<input type="button" value="목록"></a>
											<a href="php_admin.php">
											<input type="button" value="취소"></a>
											</center>
											</td>
										</tr>
										</table>
									</table>
								</form>
							</center>
						</div>
					</div>
				<!-- Footer -->
				<center>
					<footer id="footer">
						<div class="inner">
							<ul class="copyright">
								<li> 미림가이드북</li><li>뉴미디어솔루션과 2학년 5반 박소담, 정유경</li>
							</ul>
						</div>
					</footer>
				</center>
			

		<!-- Scripts -->
		
<!-- 			<script src="assets/js/jquery.min.js"></script> -->
<!-- 			<script src="assets/js/skel.min.js"></script> -->
<!-- 			<script src="assets/js/util.js"></script> -->
<!--  -->
<!-- 			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]--> -->
<!-- 			<script src="assets/js/main.js"></script> -->

	</body>
</html>