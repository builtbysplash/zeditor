<?php
require 'vendor/autoload.php';

$app = new \Slim\Slim();

define('URL', 'http://localhost/zeditor');

function createNewZed($content, $pdo = null) {
    if ($pdo == null) {
        $pdo = new PDO("mysql:host=localhost;dbname=zeditor", 'root', '');
    }
    $pdo->query("set names utf8");
    $unique = false;
    $id = '';
    while ($unique == false) {
        $id = substr(str_shuffle(MD5(microtime())), 0, 6);
        $query = $pdo->prepare("select count(id) from zed where id=:id");
        $query->bindParam(':id', $id);
        $query->execute();
        $result = $query->fetchColumn(0);
        if ($result == 0) 
        {
            $unique = true;
        }
    }
    // Insert new zed
    $query = $pdo->prepare("insert into zed (id, content) values(:id, :content)");
    $query->bindParam(':id', $id);
    $query->bindParam(':content', $content);
    $query->execute();
    $pdo = null;
    return $id;
}

$app->get('/(:id)', function($id = null) use ($app) {
    if ($id != null) {
        $pdo = new PDO("mysql:host=localhost;dbname=zeditor", 'root', '');
        $pdo->query("set names utf8");
        $query = $pdo->prepare("select content from zed where id=:id");
        $query->bindParam(':id', $id);
        $query->execute();
        $content = $query->fetchColumn(0);
        $pdo = null;
    }
    else {
        $content = "";
    }   
    $app->render('editor.php', array('id' => $id, 'content' => $content));
});

$app->get('/:id/fork', function($id) use ($app) {
    $pdo = new PDO("mysql:host=localhost;dbname=zeditor", 'root', '');
    $pdo->query("set names utf8");
    $query = $pdo->prepare("select content from zed where id=:id");
    $query->bindParam(':id', $id);
    $query->execute();
    $content = $query->fetchColumn(0);
    $pdo = null;
    $app->render('editor.php', array('id' => '', 'content' => $content));
});

$app->post('/create', function() {
    // Create Z content
    $content = $_POST['content'];
    $id = createNewZed($content);
    echo json_encode($id);
});

$app->post('/fork/:id', function($id) {
    // Fork echo json_encode($id);Z content
    $pdo = new PDO("mysql:host=localhost;dbname=zeditor", 'root', '');
    $pdo->query("set names utf8");
    $query = $pdo->prepare("select content from zed where id=:id");
    $query->bindParam(':id', $id);
    $query->execute();
    $content = $query->fetchColumn(0);
    $id = createNewZed($content, $pdo);
    $pdo = null;
    echo json_encode($id);
});

$app->run();