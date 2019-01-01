<?php

namespace App\Http\Controllers;

use App\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Book::orderBy(request('column') ? request('column') : 'updated_at', request('direction') ? request('direction') : 'desc')
            ->search(request('search'))
            ->with('category', 'author')
            ->paginate());
    }
    public function search()
    {
        return response()->json(Book::search(request('search'))->paginate());
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->validate([
            'isbn' => 'required|unique:books,isbn',
            'title' => 'required',
            'date_of_publication' => 'required',
            'category_id' => 'required|exists:categories,id',
            'author_id' => 'required|exists:authors,id',
        ]);
        $book = new Book;
        $book->isbn = $input['isbn'];
        $book->title = $input['title'];
        $book->date_of_publication = $input['date_of_publication'];
        $book->category_id = $input['category_id'];
        $book->author_id = $input['author_id'];
        $book->save();

        return response()->json($book);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Book $book
     * @return \Illuminate\Http\Response
     */
    public function show(Book $book)
    {
        return response()->json(Book::whereId($book->id)->with('category', 'author')->first());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Book $book
     * @return \Illuminate\Http\Response
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Book $book
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Book $book)
    {
        $input = $request->validate([
            'isbn' => 'required|unique:books,isbn,' . $book->isbn,
            'title' => 'required',
            'date_of_publication' => 'required',
            'category_id' => 'required|exists:categories,id',
            'author_id' => 'required|exists:authors,id',
        ]);
        $book->isbn = $input['isbn'];
        $book->title = $input['title'];
        $book->date_of_publication = $input['date_of_publication'];
        $book->category_id = $input['category_id'];
        $book->author_id = $input['author_id'];
        $book->save();

        return response()->json($book);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Book $book
     * @return \Illuminate\Http\Response
     */
    public function destroy(Book $book)
    {
        return response()->json($book->delete());
    }
}
