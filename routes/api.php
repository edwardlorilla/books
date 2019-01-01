<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware(['auth:api'])->group(function () {
    Route::get('/authors/search', 'AuthorController@search');
    Route::get('/books/search', 'BookController@search');
    Route::get('/categories/search', 'CategoryController@search');
    Route::get('/users/search', 'UserController@search');
    Route::apiResources([
        '/authors' => 'AuthorController',
        '/books' => 'BookController',
        '/categories' => 'CategoryController',
        '/users' => 'UserController',
        '/borrows' => 'BorrowController',
    ]);
});