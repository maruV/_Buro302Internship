<?php

namespace App\Http\Controllers;

use App\TherapyType;
use Illuminate\Http\Request;

class TherapyTypeController extends Controller
{
    public function index (){
        return TherapyType::all();
    }
}
