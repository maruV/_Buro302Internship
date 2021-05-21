<?php

use App\UserRole;
use Faker\Generator as Faker;

$factory->define(\App\Professional::class, function (Faker $faker) {

    $professionalRole = UserRole::where('name', 'professional')->first();

    $user_ids_already_used = App\Professional::pluck('user_id')->toArray();
    $user_ids_already_used[] = 2;

    $user_ids = App\User::where('role_id', $professionalRole->id)
        ->whereNotIn('id', $user_ids_already_used)->pluck('id')->toArray();

    $therapy_type_ids = App\TherapyType::pluck('id')->toArray();

    $numberOfPhoneNumbers = rand(1, 2);

    for ($i = 0; $i < $numberOfPhoneNumbers; $i++) {
        if (!isset($phoneNumbers) || !isset($email_addresses)) {
            $email_addresses = $faker->email;
            $phoneNumbers = $faker->phoneNumber;
        } else {
            $phoneNumbers .= ' of ' . $faker->phoneNumber;
            $email_addresses .= ' en ' . $faker->email;
        }
    }

    $latitude = '51.' . rand(79,85);
    $longitude = '5.' . rand(70, 95);

    return [
        'user_id' => $faker->randomElement($user_ids),
        'therapy_type_id' => $faker->randomElement($therapy_type_ids),
        'professional_name' => $faker->name,
        'office_name' => $faker->company,
        'email_addresses' => $email_addresses,
        'phone_numbers' => $phoneNumbers,
        'street' => $faker->streetAddress,
        'postal' => rand(1,9) . rand(1,9) . rand(1,9) . rand(1,9) . 'AA',
        'city' => $faker->city,
        'work_experience' => $faker->sentence,
        'work_days' => 'maandag, dinsdag',
        'information' => $faker->text,
        'image_url' => '',
        'website_url' => 'https://www.b302.nl',
        'specialty' => rand(0, 1) === 1 ?'Neurologie, duizeligheid longziekte, pijn (TENS)' : null,

        'latitude' => $latitude,
        'longitude' => $longitude
    ];
});
