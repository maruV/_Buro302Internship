<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TherapyType extends Model
{

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function professionals(){
        $this->hasMany(Professional::class);
    }
}
