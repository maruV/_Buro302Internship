<?php

use Illuminate\Database\Seeder;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_roles')->insert(array(
            ['id' => 1, 'name' => 'admin'],
            ['id' => 2, 'name' => 'professional']
        ));
    }
}
