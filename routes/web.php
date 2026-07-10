<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/download-cv', function () {
    $file = public_path('CV_Fahreza_Adam_Nuardiansyah.pdf');
    return response()->download($file, 'CV_Fahreza_Adam_Nuardiansyah.pdf');
});
