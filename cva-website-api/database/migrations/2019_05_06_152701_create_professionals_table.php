<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfessionalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('professionals', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('user_id');
            $table->unsignedInteger('therapy_type_id');

            $table->string('professional_name');
            $table->string('office_name');
            $table->string('email_addresses');
            $table->string('phone_numbers');
            $table->string('street');
            $table->string('postal');
            $table->string('city');
            $table->string('work_experience');
            $table->string('work_days');
            $table->text('information');

            $table->string('image_url')->nullable();
            $table->string('website_url')->nullable();

            $table->string('specialty')->nullable();

            $table->string('latitude')->nullable();
            $table->string('longitude')->nullable();

            $table->timestamps();


            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('therapy_type_id')->references('id')->on('therapy_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('professionals');
    }
}
