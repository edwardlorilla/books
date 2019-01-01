<?php

namespace App\Http\Controllers;

use App\Borrow;
use Illuminate\Http\Request;

class BorrowController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Borrow::orderBy(request('column') ? request('column') : 'updated_at', request('direction') ? request('direction') : 'desc')
            ->search(request('search'))
            ->with('book', 'user')
            ->paginate());
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->validate([
            'book_id' => 'required|exists:books,id',
            'user_id' => 'required|exists:users,id',
            'date_issued' => 'required',
            'date_due_for_return' => 'required',
        ]);
        $borrow = new Borrow;
        $borrow->book_id = $input['book_id'];
        $borrow->user_id = $input['user_id'];
        $borrow->date_issued = $input['date_issued'];
        $borrow->date_due_for_return = $input['date_due_for_return'];
        $borrow->save();

        return response()->json($borrow);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Borrow  $borrow
     * @return \Illuminate\Http\Response
     */
    public function show(Borrow $borrow)
    {
        return response()->json(Borrow::whereId($borrow->id)->with('book', 'user')->first());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Borrow  $borrow
     * @return \Illuminate\Http\Response
     */
    public function edit(Borrow $borrow)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Borrow  $borrow
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Borrow $borrow)
    {
        $input = $request->validate([
            'book_id' => 'required|exists:books,id',
            'user_id' => 'required|exists:users,id',
            'date_issued' => 'required',
            'date_due_for_return' => 'required',
        ]);
        $borrow->book_id = $input['book_id'];
        $borrow->user_id = $input['user_id'];
        $borrow->date_issued = $input['date_issued'];
        $borrow->date_due_for_return = $input['date_due_for_return'];
        $borrow->save();

        return response()->json($borrow);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Borrow  $borrow
     * @return \Illuminate\Http\Response
     */
    public function destroy(Borrow $borrow)
    {
        return response()->json($borrow->delete());
    }
}
