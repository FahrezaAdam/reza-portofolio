<?php
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

require __DIR__ . '/../vendor/autoload.php';

$app = require_once __DIR__.'/../bootstrap/app.php';

// Force the storage path to /tmp which is the only writable directory on Vercel
$app->useStoragePath('/tmp/storage');

$app->handleRequest(Request::capture());
