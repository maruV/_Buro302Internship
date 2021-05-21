<?php

use Illuminate\Http\Request;


Route::get('/', function () {
    $routes = [];
    foreach (\Route::getRoutes()->getIterator() as $route) {
        if ($route->uri !== '/' && strpos($route->uri, '_debugbar') !== 0) {
            $routes[] = $route->uri . ': ' . $route->methods[0];
        }
    }
    return $routes;
});

Route::get('professionals', 'ProfessionalController@index')->name('professionals.index');
Route::get('professionals/{professional}', 'ProfessionalController@show')->name('professionals.show');
Route::get('therapy-types', 'TherapyTypeController@index')->name('therapy-types.index');

Route::group([
    'prefix' => 'auth'
], function ($router) {
    Route::post('register', 'AuthController@register');
    Route::post('', 'AuthController@login');
    Route::delete('', 'AuthController@logout');
    Route::patch('', 'AuthController@refresh');
    Route::get('', 'AuthController@me');
});

Route::post('contact-message', 'ContactController@contactMessage');


Route::group([
    'middleware' => 'auth'
], function () {
    Route::post('professionals', 'ProfessionalController@store')->name('professionals.create');
    Route::patch('professionals/{professional}', 'ProfessionalController@update')->name('professionals.update');
});
Route::group([
    'middleware' => 'auth',
    'prefix' => 'admin'
], function () {
    Route::post('professional', 'AdminController@store');
    Route::get('users', 'AdminController@users');
    Route::delete('user/{user}', 'AdminController@deleteUser');
});




