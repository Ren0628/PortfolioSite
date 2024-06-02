<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactFormController;

Route::get('/home', function () {
    return Inertia::render('Home', [
        'imageUrl' => asset('img'),
    ]);
});

Route::post('/contact', [ContactFormController::class, 'store'])->name('contact.store');
