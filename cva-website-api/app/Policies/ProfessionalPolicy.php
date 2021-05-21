<?php

namespace App\Policies;

use App\Professional;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProfessionalPolicy
{
    use HandlesAuthorization;

    public function before(User $user)
    {
        if ($user->isAdmin()) {
            return true;
        }
    }

    public function create(User $user)
    {
        return !$user->professional;
    }

    public function update(User $user, Professional $professional)
    {
        return $user->id === $professional->user_id;
    }
}
