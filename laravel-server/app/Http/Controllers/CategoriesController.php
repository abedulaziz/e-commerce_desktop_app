<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoriesController extends Controller
{
    public function uploadCategory(Request $request) {

        $validator = $request->validate([
            "name" => "required|unique:categories",
            "desc" => "required",
        ]);

        Category::insert([
            "name" => $request->name,
            "desc" => $request->desc,
        ]);

        return response()->json([
            "message" => "Category successfully added",
        ], 201);
    }

    // display items related to the selected category
    public function displayItems(Request $request) {

        $token = $request->categ_id;
        $items = Category::find($categ)->items;

        return response()->json([
            "message" => "Success",
            "items" => $items,
        ], 201);
    }

    public function listCategories(Request $request) {

        if (auth()->user()) {
            return response()->json([
                "isAuthorised" => true,
                "categories" => Category::select("id", "name", "desc", "img_path")->get(),
            ]);
        }
        else {
            return response()->json([
                "isAuthorised" => false,
                "categories" => Category::select("id", "name", "desc", "img_path")->get(),
            ]);
        }


    }
}
