

<?php 
//Script to display the posts of the blog

//informations to connect to DB
$host = "blog-mysql";
$dbname = "blog";
$charset = "utf8";
$port = "3306";

try {
    $pdo = new PDO( 
        dsn: "mysql:host=$host;dbname=$dbname;charset=$charset;port=$port",
        username: "login_user",
        password: "login_password",
    );
    
    //Get all the posts
    $db_query = $db_query = "SELECT * FROM Posts;";
    $requestArticles = $pdo->query($db_query); 
    $articles = $requestArticles->fetchAll();

    //display all the posts
    foreach($articles as $article){
        
        //Special case for the flag :)
        if( $article["title"] == "Password" && isset($_SESSION["adminLogged"]) ){
            echo '<div class="article">';
            echo '<h2>' .$article["title"] . '</h2>';
            echo '<em>' . $article["content"] . '</em>';
            echo "</div>";

        //Normal case
        }elseif($article["title"] != "Password"){
            echo '<div class="article">';
            echo '<h2>' .$article["title"] . '</h2>';
            echo '<p>' . $article["content"] . '</p>';
            echo "</div>";

        }
    }
} catch (PDOException $e) {
    throw new PDOException(
        message: $e->getMessage(),
        code: (int)$e->getCode()
    );
}
?>