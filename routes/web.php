<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
                                    //php artisan make:controller (controllername)  TO CREATE CONTROLLER
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');
    
Route::post('/submit', [UserController::class, 'recipeDetails']);  //import class for UserController

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



/*Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});*/

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
