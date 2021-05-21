<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProfessionalRequest;
use App\Professional;
use App\User;
use Auth;

use File;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Input;
use Intervention\Image\Facades\Image;
use Storage;

class ProfessionalController extends Controller
{
    public function index(): Collection
    {
        return Professional::with('therapyType')->orderBy('professional_name')->get();
    }

    public function store(StoreProfessionalRequest $request)
    {
        $validated = $request->validated();

        $user = Auth::user();
        $validated['user_id'] = $user->id;

        if (Input::file('image')) {
            $image = Image::make(Input::file('image'));
            $validated['image_url'] = $this->storeImage($image, $user);
            unset($validated['image']);
        }

        return Professional::create($validated);
    }

    public function show(Professional $professional): Professional
    {
        $professional = Professional::where('id', $professional->id)->with('therapyType')->first();

        return $professional;
    }

    public function update(StoreProfessionalRequest $request, Professional $professional)
    {

        $validated = $request->validated();

        $userOnProfessional = User::find($validated['user_id']);



        if (Input::file('image')) {

            $image = Image::make(Input::file('image'));
            $validated['image_url'] = $this->storeImage($image, $userOnProfessional);
            unset($validated['image']);

        }


        $professional->update($validated);

        return $professional;
    }


    private function storeImage($image, User $user)
    {

        $image->resize(null, 967, function ($constraint) {
            $constraint->aspectRatio();
        });

        $image->crop(800, 967);
        $image->encode('jpg');

        $path = 'images/' . 'professional_' . $user->id . '.jpg';

        $image->save($path);


        return '/' . $path;

    }
}
