<?php
require 'vendor/autoload.php';

$app = new \Slim\Slim();
$app->get('/:id', function($id = '') use ($app) {
	$app->render('editor.php', array('id' => $id));
});

$app->post('/create', function() {
	// Create Z content
});

$app->post('/update/:id', function($id) {
	// Update Z content
});