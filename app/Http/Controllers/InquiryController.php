<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class InquiryController extends Controller
{
    public function storeContact(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:180'],
            'email' => ['required', 'email', 'max:255'],
            'message' => ['required', 'string', 'max:5000'],
        ]);

        //
        /** @todo Persist contact inquiries (mail, CRM, ticketing). Data: $validated */

        return redirect()
            ->back()
            ->with('success', 'Thank you. Our concierge desk will reply within one business day.');
    }

    public function storeBooking(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:180'],
            'email' => ['required', 'email', 'max:255'],
            'event_type' => ['required', 'string', 'max:180'],
            'event_date' => ['nullable', 'string', 'max:64'],
            'location' => ['nullable', 'string', 'max:255'],
            'budget' => ['nullable', 'string', 'max:120'],
            'notes' => ['nullable', 'string', 'max:8000'],
        ]);

        //
        /** @todo Route booking payloads to planners; data: $validated */

        return redirect()
            ->back()
            ->with('success', 'Your inquiry is curated. Expect a discreet follow-up shortly.');
    }
}
