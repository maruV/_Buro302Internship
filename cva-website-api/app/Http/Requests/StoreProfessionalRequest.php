<?php

namespace App\Http\Requests;

use App\Professional;
use Illuminate\Foundation\Http\FormRequest;

class StoreProfessionalRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if ($this->route()->getName() === 'professionals.create') {
            return $this->user()->can('create', Professional::class);
        } else if ($this->route()->getName() === 'professionals.update'){
            return $this->user()->can('update', $this->professional);
        }
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'therapy_type_id' => 'required|int',
            'user_id' => 'int',
            'professional_name' => 'required|string|max:150',
            'office_name' => 'required|string',
            'email_addresses' => 'required|string',
            'phone_numbers' => 'required|string',
            'street' => 'required|string',
            'postal' => 'required|string',
            'city' => 'required|string',
            'work_experience' => 'required|string',
            'work_days' => 'required|string',
            'information' => 'required|string',
            'website_url' => 'string',
            'specialty' => 'string',
            'longitude' => 'string',
            'latitude' => 'string',
            'image' => 'image'
        ];
    }
}
