<?
	include "php/config.php";	//Session 및 DB 연결설정
	include "php/util.php";		//각종 유틸리티 함수
	
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
		<title>위치 관리</title>
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
									<span class="symbol"><img src="images/logo.svg" alt="" /></span><span class="title">Mirim Guide Book</span>
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
							<li><a href="admission.php">Admission</a></li>
							<li><a href="experience.php">Experience</a></li>
							<li><a href="employment.php">Employment</a></li>
							<li><a href="event.php">Event</a></li>
						</ul>
					</nav>

				<!-- Main -->
					<div id="main">
						<div class="inner">
							<h1>Location</h1>
							<span class="image main"><img src="images/pic13.jpg" alt="" /></span>
							<center>
							<form name="form1" method="post" action="admission_check.php">
								<table>
									<tr>
										<td>
											<table width="100%">
												<tr>
													<td colspan="7">
														<font size="6"><a href="php_admin.php"><b>HOME</b></a>
														&gt; Admission</font>
												</tr>
<!-- 										<tr> -->
<!-- 											<td colspan="7">학과</td> -->
<!-- 										</tr> -->
										<tr>
											<td>구분번호</td>
											<td><input type="text" name="number"></td>
										</tr>
										<tr>
											<td>학과이름</td>
											<td><input type="text" name="major"></td>
										</tr>
										<tr>
											<td>학과소개</td>
											<td><textarea type="text" name="major_intro"></textarea></td>
										</tr>
										<tr>
											<td>학과이미지</td>
											<td><input type="file" name="major_image"></td>
										</tr>
										<tr>
											<td colspan="7">설명회</td>
										</tr>
										<tr>
											<td>장소</td>
											<td><input type="text" name="room"></td>
										</tr>
										<tr>
											<td>날짜</td>
											<td><input type="text" name="date"></td>
										</tr>
										<tr>
											<td>신청방법</td>
											<td><input type="text" name="apply"></td>
										</tr>
										<tr>
											<td>포스터</td>
											<td><input type="file" name="poster"></td>
										</tr>
										<tr>
											<td colspan="7">FAQ</td>
										</tr>
										<tr>
											<td>번호</td>
											<td><input type="text" name="apply_number"></td>
										</tr>
										<tr>
											<td>제목</td>
											<td><input type="text" name="title"></td>
										</tr>
										<tr>
											<td>내용</td>
											<td><textarea type="text" name="content" cols="50" rows="15"></textarea></td>
										</tr>
										<tr>
											<td colspan="7">
											<center>
											<a href="javascript:checkAdmissionInput()"><img src="img/butn_ok.gif"></a>
											<a href="php_admin.php">
											<img src="img/btn_cancel.gif"></a>
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