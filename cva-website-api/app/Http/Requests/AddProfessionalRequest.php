<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AddProfessionalRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // TODO check if admin
        return true; //$this->user();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|string|email|max:150|unique:users'
        ];
    }
}
