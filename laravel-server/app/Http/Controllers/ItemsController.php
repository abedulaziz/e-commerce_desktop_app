<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\Favorited_items;

class ItemsController extends Controller
{
    // upload an item (admin page)
    public function uploadItem(Request $request) {

        Item::insert([
            "name" => $request->name,
            "desc" => $request->desc,
            "category_id" => $request->category_id,
        ]);

        return response()->json([
            "message" => "Item successfully added",
        ], 201);
    }

    // favorite item
    public function favoriteItem(Request $request) {

        Favorited_items::insert([
            "user_id" => $request->user_id,
            "item_id" => $request->item_id,
        ]);

        return response()->json([
            "message" => "Item favoritied",
        ], 201);
    }

    // unfavorite item
    public function unFavoriteItem(Request $request) {

        Favorited_items::where([
            "user_id", $request->user_id,
            "item_id", $request->item_id,
        ])->delete();

        return response()->json([
            "message" => "Item unfavoritied",
        ], 201);
    }

    // display favorited items
    public function listFavorited(Request $request) {

        $user_id = $request->user_id;
        $data = Favorited_items::where("user_id", $user_id)->get();

        return response()->json([
            "message" => "Success",
            "data" => $data,
        ], 201);
    }
}
