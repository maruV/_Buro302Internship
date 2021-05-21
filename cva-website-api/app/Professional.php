<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Professional extends Model
{
    protected $guarded = [
        'id', 'created_at', 'updated_at',
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function user (){
        return $this->belongsTo(User::class);
    }

    public function therapyType(){
        return $this->belongsTo(TherapyType::class);
    }
}
