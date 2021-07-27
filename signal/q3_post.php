<?php
$file = 'data/reponse3.txt';
// Open the file to get existing content
$current = file_get_contents($file);
// Append a new person to the file
$current = print_r($_POST['docu2']."\n",true);
// Write the contents back to the file
file_put_contents($file, $current,FILE_APPEND);
 header("Location: vers4_fadein.html");
?>
