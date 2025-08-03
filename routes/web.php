<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\recipeController;   //imported class
                                    //php artisan make:controller (controllername)  TO CREATE CONTROLLER
Route::get('/', function () {
    return redirect()->route('login');
});

Route::get('/recipe-page', [recipeController::class, 'getRecipes'])->name('recipepage');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/Home', function () {
    return Inertia::render('Home');
})->name('home');
    
Route::post('/submit-recipe', [recipeController::class, 'recipeDetails'])->name('submitRecipee');  //import class for recipeController

Route::get('/Home', function () {
    return Inertia::render('Home');
})->middleware(['auth', 'verified'])->name('home');




/*Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});*/

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
