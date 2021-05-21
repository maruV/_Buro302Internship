<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactMessageRequest;
use App\Professional;
use function foo\func;
use Illuminate\Http\Request;
use Mail;

class ContactController extends Controller
{
    public function contactMessage(ContactMessageRequest $request)
    {

        $validated = $request->validated();
        $professional = Professional::find($validated['professional_id']);

        try {
            Mail::send('mail.contact-message-to-client', ['professional' => $professional, 'validated' => $validated],
                function ($message) use ($validated) {
                    $message->to($validated['email'])->subject('Contactformulier - CVA Ketenzorg');
                });
        } catch (\Exception $e) {
            return $e;
        }
        try {
            Mail::send('mail.contact-message-to-professional', ['professional' => $professional, 'validated' => $validated],
                function ($message) use ($professional) {
                    $message->to($professional->user->email)->subject('Contactformulier - CVA Ketenzorg');
                }
            );
        }catch (\Exception $e) {
            return $e;
        }





    }
}
