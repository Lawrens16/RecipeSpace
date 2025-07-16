<?php
namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class recipeController extends Controller
{  
  public function recipeDetails(Request $request)
   {
       Log::info('Recipe submission route hit', ['data' => $request->all()]);
       
       try {
           
           
           Log::info('Starting validation');
           
           $request->validate([
               'title' => ['required', 'string', 'min:3', 'max:255'],
               'servings' => 'nullable|string|max:255',
               'ingredients' => 'required|string',
               'instructions' => 'required|string',
               'picture' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
           ]);
           
           Log::info('Validation passed');
           
           $imagePath = null;
           if ($request->hasFile('picture')) {
               Log::info('File detected, storing...');
               $imagePath = $request->file('picture')->store('uploads', 'public');
               Log::info('File stored at: ' . $imagePath);
           }
           
           Log::info('Creating recipe record');
           
           // Save recipe
           Recipe::create([
               'title' => $request->title,
               'servings' => $request->servings,
               'ingredients' => $request->ingredients,
               'instructions' => $request->instructions,
               'picture' => $imagePath,
           ]);
           
           Log::info('Recipe created successfully');
           
           return redirect()->route('home')->with('success', 'Recipe submitted successfully!');
           
       } catch (\Illuminate\Validation\ValidationException $e) {
           Log::error('Validation failed', ['errors' => $e->errors()]);
           return redirect()->back()->withErrors($e->errors())->withInput();
           
       } catch (\Exception $e) {
           Log::error('Recipe submission failed', [
               'message' => $e->getMessage(),
               'file' => $e->getFile(),
               'line' => $e->getLine(),
               'trace' => $e->getTraceAsString()
           ]);
           
           return redirect()->back()->with('error', 'Failed to submit recipe. Please try again.')->withInput();
       }
   }
}