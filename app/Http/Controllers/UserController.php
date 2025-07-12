<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
   public function recipeDetails(Request $request)
    {
         dd('Form submitted!', $request->all());
        $incomingFields = $request->validate([
            'title' => ['required', 'string', 'min:3', 'max:255'], //could be like this
            'servings' => 'required|string|max:255',
            'ingredients' => 'required|string',
            'instructions' => 'required|string',
            'picture' => 'nullable|image|max:50000', // Max 50mb upload size
        ]);

        if ($request->hasFile('picture')) {
            $validated['picture'] = $request->file('picture')->store('uploads', 'public');
        }

        $recipedetails = User::create($incomingFields);

        return back()->with('success', 'Recipe submitted successfully!'); //response back for testing
       
    }
}
