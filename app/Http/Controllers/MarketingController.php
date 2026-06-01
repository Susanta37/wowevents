<?php

namespace App\Http\Controllers;

use App\Support\Portfolio;
use App\Support\SiteContent;
use Inertia\Inertia;
use Inertia\Response;

class MarketingController extends Controller
{
    public function home(): Response
    {
        return Inertia::render('site/home', [
            'previewServices' => $this->servicesPreview(),
            'previewWork' => SiteContent::homePortfolioPreview(),
            'testimonials' => $this->testimonials(),
        ]);
    }

    public function about(): Response
    {
        return Inertia::render('site/about', [
            'timeline' => $this->timeline(),
            'testimonials' => $this->aboutTestimonials(),
        ]);
    }

    public function services(): Response
    {
        return Inertia::render('site/services', [
            'services' => $this->serviceCards(),
            'testimonials' => $this->aboutTestimonials(),
        ]);
    }

    public function portfolio(): Response
    {
        return $this->renderPortfolio(null, null);
    }

    public function portfolioCategory(string $category): Response
    {
        if (Portfolio::categoryLabel($category) === null) {
            abort(404);
        }

        return $this->renderPortfolio($category, null);
    }

    public function portfolioShow(string $category, string $slug): Response
    {
        if (Portfolio::categoryLabel($category) === null) {
            abort(404);
        }

        if (Portfolio::findItem($category, $slug) === null) {
            abort(404);
        }

        return $this->renderPortfolio($category, $slug);
    }

    private function renderPortfolio(?string $categorySlug, ?string $openItemSlug): Response
    {
        $label = Portfolio::categoryLabel($categorySlug) ?? 'All';

        return Inertia::render('site/portfolio', [
            'items' => Portfolio::itemsForFilter($categorySlug),
            'filters' => Portfolio::filters(),
            'activeCategory' => $label,
            'activeCategorySlug' => $categorySlug,
            'openItemSlug' => $openItemSlug,
        ]);
    }

    public function blog(): Response
    {
        return Inertia::render('site/blog/index', [
            'posts' => SiteContent::blogPosts(),
        ]);
    }

    public function blogShow(string $slug): Response
    {
        $posts = SiteContent::blogPosts();
        $post = collect($posts)->firstWhere('slug', $slug);

        if ($post === null) {
            abort(404);
        }

        return Inertia::render('site/blog/show', [
            'post' => $post,
            'posts' => $posts,
        ]);
    }

    public function contact(): Response
    {
        return Inertia::render('site/contact');
    }

    public function book(): Response
    {
        return Inertia::render('site/book');
    }

    /** @return list<array{title:string, href:string}> */
    private function servicesPreview(): array
    {
        return [
            ['title' => 'Full-Service Production', 'href' => '/services'],
            ['title' => 'Luxury Weddings', 'href' => '/our-work'],
            ['title' => 'Corporate Milestones', 'href' => '/services'],
            ['title' => 'Destination Design', 'href' => '/contact'],
        ];
    }

    /** @return list<array{id:string, quote:string, name:string, role:string}> */
    private function testimonials(): array
    {
        return [
            [
                'id' => 't1',
                'quote' => 'WOW staged our weekend as a living editorial—dramatic restraint, immaculate timing.',
                'name' => 'Elena Rostova',
                'role' => 'President, Meridian Hotels',
            ],
            [
                'id' => 't2',
                'quote' => 'They translated our brand ethos into choreography, tabletop, scent, sound—beyond comparison.',
                'name' => 'James Okonkwo',
                'role' => 'Chief Creative Officer',
            ],
            [
                'id' => 't3',
                'quote' => 'Our guests assumed the ballroom had been closed for redesign. It hadn’t—we simply felt transformed.',
                'name' => 'Aria Duarte',
                'role' => 'Private Client',
            ],
        ];
    }

    /** @return list<array{year:string, title:string, body:string}> */
    private function timeline(): array
    {
        return [
            ['year' => '2014', 'title' => 'Founding Moment', 'body' => 'WOW Events debuted as a concierge-style studio translating couture inspirations into tactile experiences.'],
            ['year' => '2018', 'title' => 'Global Partnerships', 'body' => 'Signature collaborations with marquee hotels anchored our production playbook across continents.'],
            ['year' => '2022', 'title' => 'Immersive Artistry', 'body' => 'Layered kinetic lighting, restrained florals, and bespoke scenography refined our hallmark cinematic pacing.'],
            ['year' => '2026', 'title' => 'Future Forward', 'body' => 'Sustainable luxury sourcing blended with obsessive craft—for clients who insist on understated perfection.'],
        ];
    }

    /** @return list<array{id:string, quote:string, name:string, role:string, event?:string, company?:string}> */
    private function aboutTestimonials(): array
    {
        return [
            [
                'id' => 'at1',
                'quote' => 'WOW Events transformed our annual gala into something our board still talks about. Every detail—from the lighting to the service flow—felt intentional and effortless.',
                'name' => 'Priya Mehta',
                'role' => 'Chief Marketing Officer',
                'company' => 'Peerless Hotels, Kolkata',
                'event' => 'Annual Leadership Gala · 2025',
            ],
            [
                'id' => 'at2',
                'quote' => 'Our daughter\'s wedding was a three-day celebration across two venues. WOW managed it all with such grace—we were able to be fully present with our family.',
                'name' => 'Arjun & Meera Banerjee',
                'role' => 'Private Clients',
                'company' => 'Kolkata',
                'event' => 'Heritage Wedding · Alipore',
            ],
            [
                'id' => 'at3',
                'quote' => 'They understood our brand ethos immediately and translated it into an immersive product launch. The feedback from our partners was exceptional.',
                'name' => 'Ananya Sharma',
                'role' => 'Director of Brand Experience',
                'company' => 'RP-Sanjiv Goenka Group',
                'event' => 'Product Launch · Salt Lake',
            ],
            [
                'id' => 'at4',
                'quote' => 'From the first concept meeting to the final toast, their team operated with military precision and artistic sensitivity. Truly world-class execution.',
                'name' => 'Rajiv Das',
                'role' => 'Managing Director',
                'company' => 'East India Corporate Forum',
                'event' => 'Board Summit · New Town',
            ],
            [
                'id' => 'at5',
                'quote' => 'I have worked with event agencies across Mumbai and Delhi. WOW Events stands apart—their in-house team and attention to atmosphere is unmatched in Bengal.',
                'name' => 'Kavitha Nair',
                'role' => 'Founder',
                'company' => 'Luxe Bridal Studio, Kolkata',
                'event' => 'Designer Showcase · Park Street',
            ],
        ];
    }

    /** @return list<array{name:string, role:string, image:string}> */
    private function team(): array
    {
        return [
            ['name' => 'Isabella Mercer', 'role' => 'Creative Director', 'image' => 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop'],
            ['name' => 'Noah Sinclair', 'role' => 'Production Lead', 'image' => 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop'],
            ['name' => 'Yuki Nakamura', 'role' => 'Experience Designer', 'image' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop'],
            ['name' => 'Marcus Léon', 'role' => 'Client Concierge', 'image' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop'],
        ];
    }

    /** @return list<array{id:string, title:string, description:string}> */
    private function serviceCards(): array
    {
        return [
            [
                'id' => 's1',
                'title' => 'Concept & Narrative',
                'description' => 'We translate lineage, brand values, or couple stories into palettes, mise en scène, and emotional pacing.',
            ],
            [
                'id' => 's2',
                'title' => 'Venue Choreography',
                'description' => 'Flow modelling, tabletop architecture, acoustics balancing, sight lines—planned like a screenplay.',
            ],
            [
                'id' => 's3',
                'title' => 'Floral Couture',
                'description' => 'Botanical palettes echoing tailoring: restraint, repetition, silhouette—never cluttered abundance.',
            ],
            [
                'id' => 's4',
                'title' => 'Lighting & Scenic',
                'description' => 'Layered luminous architecture with parabolic shadows where each toast feels sculpted.',
            ],
            [
                'id' => 's5',
                'title' => 'Gastronomy Coordination',
                'description' => 'Menu cadence plotted with plating reveals, champagne cues, dietary poetry handled quietly.',
            ],
            [
                'id' => 's6',
                'title' => 'Day-of Stewardship',
                'description' => 'White-glove teams executing minute-by-minute run-of-show with ballroom calm preserved.',
            ],
        ];
    }
}
