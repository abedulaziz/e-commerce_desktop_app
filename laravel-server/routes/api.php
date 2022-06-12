<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\ItemsController;
use App\Http\Controllers\CategoriesController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// user routes
Route::group(['middleware' => 'api'], function($router) {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
});

// items routes
Route::post("/upload-items", [ItemsController::class, "uploadItem"]);
Route::post("/favorite-item", [ItemsController::class, "favoriteItem"]);
Route::post("/unfavorite-item", [ItemsController::class, "unFavoriteItem"]);
Route::post("/list-favorited-items", [ItemsController::class, "listFavorited"]);

// categories routes
Route::post("/upload-categories", [CategoriesController::class, "uploadCategory"]);
Route::post("/items", [CategoriesController::class, "displayItems"]);

Route::resource('/products', 'App\Http\Controllers\ProductController');
