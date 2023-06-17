
<?php session_start();?> 

<!DOCTYPE html>
<html lang=fr>

    <head>
        <meta charset="utf-8" />
        <title>Blog</title>
        <link href="style.css" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    </head>


<body>
    <?php


    //informations to connect to DB
    $host = "blog-mysql";
    $dbname = "blog";
    $charset = "utf8";
    $port = "3306";



    //Receiving post request to validate/unvalidate credentials
    if (isset($_POST['username']) &&  isset($_POST['password'])) {

        try {
            $pdo = new PDO( 
                dsn: "mysql:host=$host;dbname=$dbname;charset=$charset;port=$port",
                username: "login_user",
                password: "login_password",
            );
        

            //Avoid DOS by stack_queries,error_based or time_based blind => filter SLEEP and GTID_SUBSET queries
            if(
                strpos($_POST['username'],"SLEEP") !=false ||
                strpos($_POST['username'],"GTID_SUBSET")!=false ||
                strpos($_POST['password'],"SLEEP")!=false ||
                strpos($_POST['password'],"GTID_SUBSET")!=false
            ){
                echo "That's not a good idea to try to hack me or maybe it is ?";
            }
            else{

                //vulnerable sql query to validate credentials 
                $db_query = $db_query = "SELECT * FROM Users WHERE username = '".$_POST['username']."' AND passwd = '".$_POST['password']."';";
                $requestPassword = $pdo->query($db_query); 
                $passwords = $requestPassword->fetchAll();

                //check the credentials are valid or not
                if( count($passwords) != 0){
                    $_SESSION['adminLogged'] = true;
                }
                else{
                    echo "bAD credeNtIals Mister :(";
                }
            }
        
        } catch (PDOException $e) {
            throw new PDOException(
                message: $e->getMessage(),
                code: (int)$e->getCode()
            );
        }
            
        
    }
    ?>

    <!-- HTML formular for the connexion -->
    <?php if(!isset($_SESSION['adminLogged'])): ?>
        
    <form action="/login/index.php" method="POST" class="form_class">
        
        <?php if(isset($errorMessage)) : ?>
            <div class="alert alert-danger" role="alert">
                <?php echo $errorMessage; ?>
            </div>
        <?php endif; ?>
            
        <div class="form_div">
            <label for="username">username</label>
            <input class="form_field" type="text" id="username" name="username" placeholder="admin" required>
        </div>
        <div class="form_div">
            <label for="password">password</label>
            <input class="form_field" type="password" id="password" name="password" placeholder="password" required>
        </div>
        <button class="submit_class" type="submit" value="Send">Send</button>
    </form>

    <!-- Admin connected -->
    <?php else: ?>
        <div>
            <p> Admin logged in </p>
        </div>
    <?php endif; ?>

    </body>

<footer>        
        <br>
        <a class="nav_link" href="/index.php">Home</a>
</footer>