<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddProfessionalRequest;
use App\Http\Requests\DeleteUserRequest;
use App\Mail\registerProfessional;
use App\Professional;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;

class AdminController extends Controller
{
    public function store(AddProfessionalRequest $request){
        // register user with random password.
        $validated = $request->validated();
        $validated['special_code'] = $this->generateRandomString(32);
        $validated['password'] = bcrypt($this->generateRandomString(32)); // this is a random password that will be changed using the specialcode.
        User::create($validated);
        $data['token'] =  $validated['special_code'];
        Mail::send('mail.email', $data, function($message) use ($validated) {
            $message->to($validated['email'], $validated['email'])->subject('Registreer een account voor CVA ketenzorg');
        });
    }


    public function users(){
        return User::all();
    }

    public function deleteUser(User $user){
        $user->delete();
    }

    private function generateRandomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
}
