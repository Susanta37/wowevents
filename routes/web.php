<?php

use App\Http\Controllers\InquiryController;
use App\Http\Controllers\MarketingController;
use Illuminate\Support\Facades\Route;

Route::get('/', [MarketingController::class, 'home'])->name('home');
Route::get('/about', [MarketingController::class, 'about'])->name('about');
Route::get('/services', [MarketingController::class, 'services'])->name('services');
Route::get('/our-work/{category}/{slug}', [MarketingController::class, 'portfolioShow'])->name('portfolio.show');
Route::get('/our-work/{category}', [MarketingController::class, 'portfolioCategory'])->name('portfolio.category');
Route::get('/our-work', [MarketingController::class, 'portfolio'])->name('portfolio');
Route::get('/blog', [MarketingController::class, 'blog'])->name('blog.index');
Route::get('/blog/{slug}', [MarketingController::class, 'blogShow'])->name('blog.show');
Route::get('/contact', [MarketingController::class, 'contact'])->name('contact');

Route::post('/contact', [InquiryController::class, 'storeContact'])->name('contact.store');
Route::get('/book-now', [MarketingController::class, 'book'])->name('book');

Route::post('/book-now', [InquiryController::class, 'storeBooking'])->name('book.store');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
