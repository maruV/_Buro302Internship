<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    public function before(User $user)
    {
        if ($user->isAdmin()) {
            return true;
        }
    }

    public function create()
    {
    }

    public function update(User $user, User $userToUpdate)
    {
        return $user->id === $userToUpdate->id;
    }

    public function destroy (User $user, User $userToDelete){
        return $user->id === $userToDelete->id;
    }
}
