<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ro'yxatdan o'tish</title>
</head>
<body>
    <?php 
     $servername = "localhost";
     $username = "root";
     $password = "";
     $dbname = "veb_acadamey";
     $bazaga_ulanish = mysqli_connect($servername, $username, $password, $dbname);
        if($bazaga_ulanish->connection_error){
            die("bazaga ulanishda muamo bor:  ". $bazaga_ulanish.connection_error);
        }
        $id=null,
        $ism = $_POST['ism'];
        $email=$_POST['email'];
        $parol=$_POST[parol];
        $qiymat_jonatish="INSERT INTO sign_up VALUES(null, '$ism','$email','$parol')";
        if(mysqli_query($bazaga_ulanish , $qiymat_jonatish)){
            echo "malumot saqlandi";
     }else{
         echo "Muammo bor:".mysqli_error($bazaga_ulanish);
     }

    ?>
</body>
</html>