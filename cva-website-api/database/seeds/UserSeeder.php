<?php

use App\UserRole;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $adminRole = UserRole::where('name', 'admin')->first();
        $professionalRole = UserRole::where('name', 'professional')->first();


        DB::table('users')->insert(array(
            ['email' => 'admin@admin.com', 'password' =>bcrypt('admin'), 'role_id' => $adminRole->id],
            ['email' => 'user@user.com', 'password' =>bcrypt('user'), 'role_id' => $professionalRole->id],
        ));

        factory(\App\User::class, 50)->create();

    }
}
