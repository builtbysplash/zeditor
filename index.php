<?php
require 'vendor/autoload.php';

$app = new \Slim\Slim();

define('URL', 'http://zeditor.dev');

$app->get('/(:id)', function($id = null) use ($app) {
	if ($id != null) {
		$text = ":all x : :nat x = x";
	}
	else {
		$text = "";
	}
	
	$app->render('editor.php', array('id' => $id, 'text' => $text));
});

$app->post('/create', function() {
	echo 'create';
	// Create Z content
});

$app->post('/update/:id', function($id) {
	// Update Z content
});

$app->run();