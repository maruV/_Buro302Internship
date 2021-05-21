<?php

use Illuminate\Database\Seeder;

class TherapyTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('therapy_types')->insert(array(
            ['name' => 'Fysiotherapie', 'color_code' => '#6e2354'],
            ['name' => 'Oefentherapie', 'color_code' => '#26394b'],
            ['name' => 'Logopedie', 'color_code' => '#f6a500'],
            ['name' => 'Ergotherapie', 'color_code' => '#637c6a'],
            ['name' => 'Dietist', 'color_code' => '#b6374c'],
            ['name' => 'Revalidatie', 'color_code' => '#a4b3bb'],
            ['name' => 'Zorguitleen', 'color_code' => '#76c5b8'],
            ['name' => 'Ziekenhuizen', 'color_code' => '#f23434']
        ));
    }
}
