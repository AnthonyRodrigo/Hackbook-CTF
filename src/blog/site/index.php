<?php session_start();?> 

<!DOCTYPE html>
<html lang=fr>

    <head>
        <meta charset="utf-8" />
        <title>Blog</title>
        <link href="/style.css" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">

    </head>


    <body>

        <header> 
            <nav>
                <a class="nav_link" href="/">Home</a>
                <a class="nav_link" href="/cv">CV</a>
            </nav>
        </header>
        
        
        
        <main>
            <h1>Blog  Kevin </h1>
            
            <p>Welcome on my awesome blog which gives you some wonderful advices to begin in cybersecurity  </p>
            
            <?php include("../articles.php"); ?>
        </main>
    </body>

</html>