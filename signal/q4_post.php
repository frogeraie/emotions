<?php
$file = 'data/reponse4.txt';
// Open the file to get existing content
$current = file_get_contents($file);
// Append a new person to the file
$current = print_r($_POST['docu3']."\n",true);
// Write the contents back to the file
file_put_contents($file, $current,FILE_APPEND);
 header("Location: vers5_fadein.html");
?>
