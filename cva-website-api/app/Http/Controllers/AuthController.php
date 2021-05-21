<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterUserRequest;
use App\Http\Resources\UserResource;
use App\Professional;
use App\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use function Psy\debug;
use DB;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function register(RegisterUserRequest $userRegisterRequest)
    {
        $userData = $userRegisterRequest->validated();

        $user = User::where('special_code',  $userData['token'])->first();
        if($user == null){
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $user['password'] = bcrypt($userData['password']);
        $user['special_code'] = null;
        $user->update([$user]);
        $credentials = [];
        $credentials['email'] = $user['email'];
        $credentials['password'] = $userRegisterRequest['password'];
        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithSessionDetails($token);
    }

    public function delete(User $userToDelete)
    {
        $user = Auth::user();

        if ($user->can('destroy', $userToDelete)) {
            $user->delete();
            return $user;
        } else {
            abort('403', 'Unauthenticated');
        }
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        
        $credentials = request(['email', 'password']);
        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithSessionDetails($token);
    }


    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

    protected function respondWithSessionDetails($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => new UserResource(auth()->guard()->user())
        ]);
    }
}
