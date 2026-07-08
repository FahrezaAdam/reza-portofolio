<?php

// Ensure /tmp directories exist for Laravel's read/write needs on Vercel
@mkdir('/tmp/storage/framework/views', 0777, true);
@mkdir('/tmp/bootstrap/cache', 0777, true);
@mkdir('/tmp/storage/logs', 0777, true);

// Force Laravel to use /tmp for all cache and compiled files
$_ENV['VIEW_COMPILED_PATH'] = '/tmp/storage/framework/views';
$_ENV['APP_SERVICES_CACHE'] = '/tmp/bootstrap/cache/services.php';
$_ENV['APP_PACKAGES_CACHE'] = '/tmp/bootstrap/cache/packages.php';
$_ENV['APP_CONFIG_CACHE'] = '/tmp/bootstrap/cache/config.php';
$_ENV['APP_ROUTES_CACHE'] = '/tmp/bootstrap/cache/routes.php';
$_ENV['APP_EVENTS_CACHE'] = '/tmp/bootstrap/cache/events.php';

// Let Laravel boot normally
require __DIR__ . '/../public/index.php';
