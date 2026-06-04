<?php

namespace App\Support;

/**
 * Demo content for the marketing site — replace with database-driven models later.
 */
class SiteContent
{
    /** @return list<array{title:string, excerpt:string, body:string, image:string, slug:string, date:string}> */
    public static function blogPosts(): array
    {
        return [
            [
                'title' => 'The Art of Atmospheric Lighting',
                'slug' => 'atmospheric-lighting',
                'excerpt' => 'Why layered light transforms a ballroom—and how we plan every luminous moment.',
                'body' => "<p>For five-star gatherings, lighting is choreography. We design in three acts: welcoming pools of warmth as guests arrive, sculptural washes for speeches and dining, then a restrained sparkle for dancing or closing reflections.</p><p>Venue architecture dictates our palette—we never overwhelm historical mouldings—and every circuit is plotted with graceful dimming cues so transitions feel cinematic, never theatrical.</p><p>WOW Events rehearses fades with operators well before doors open so your gala feels inevitable, effortless, unforgettable.</p>",
                'image' => 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2400&auto=format&fit=crop',
                'date' => 'April 28, 2026',
            ],
            [
                'title' => 'Corporate Summits Without the Sterile Feeling',
                'slug' => 'corporate-warm-minimalism',
                'excerpt' => 'Elevated brand moments for leadership retreats and board celebrations.',
                'body' => "<p>Rare resin tables, tonal florals drawn from city skylines, and acoustic treatments hidden in greenery keep board summits focussed yet human.</p><p>Our teams script arrival flows that reduce bottleneck anxiety and design seating so every executive conversation has privacy without isolation.</p>",
                'image' => '/assets/8.jpeg',
                'date' => 'April 12, 2026',
            ],
            [
                'title' => 'Seated Dinners Down to the Last Detail',
                'slug' => 'seated-dinner-excellence',
                'excerpt' => 'Service choreography, plating windows, and the quiet luxury of perfect timing.',
                'body' => "<p>An intimate twelve-course sequence requires more than mise en place—we plot server tracks, garnish timing, wine reveals, and music hits with the sous-chef mindset.</p><p>Chocolate and gold accents honour your palette references while plating stays restrained so taste leads.</p>",
                'image' => 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2400&auto=format&fit=crop',
                'date' => 'March 3, 2026',
            ],
        ];
    }

    /** @return list<array{title:string, src:string, category:string, alt:string}> */
    public static function portfolioImages(): array
    {
        return [
            ['title' => 'Noir Ballroom Gala', 'src' => 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop', 'category' => 'Luxury Events', 'alt' => 'Elegant wedding reception ballroom'],
            ['title' => 'Garden Soirée', 'src' => 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1400&auto=format&fit=crop', 'category' => 'Wedding', 'alt' => 'Outdoor decorated event tent'],
            ['title' => 'Leadership Pavilion', 'src' => 'https://images.unsplash.com/photo-1523580494863-6f303122598c?q=80&w=1400&auto=format&fit=crop', 'category' => 'Site Installation', 'alt' => 'Conference stage seating'],
            ['title' => 'Velvet Cocktail Hour', 'src' => 'https://images.unsplash.com/photo-1507914372368-b2b085b93537?q=80&w=1400&auto=format&fit=crop', 'category' => 'Luxury Events', 'alt' => 'Sophisticated bar setup'],
            ['title' => 'Coastal Vows', 'src' => 'https://images.unsplash.com/photo-1522673607200-164d1b621b47?q=80&w=1400&auto=format&fit=crop', 'category' => 'Wedding', 'alt' => 'Oceanfront ceremony'],
            ['title' => 'Board Gala', 'src' => 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1400&auto=format&fit=crop', 'category' => 'Site Installation', 'alt' => 'Formal corporate dinner hall'],
            ['title' => 'Midnight Carousel', 'src' => 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1400&auto=format&fit=crop', 'category' => 'Luxury Events', 'alt' => 'Festive marquee lights'],
            ['title' => 'Heritage Staircase Toast', 'src' => 'https://images.unsplash.com/photo-1511795409834-ef04bbd61693?q=80&w=1400&auto=format&fit=crop', 'category' => 'Wedding', 'alt' => 'Guests toasting indoors'],
            ['title' => 'Urban Terrace Brunch', 'src' => 'https://images.unsplash.com/photo-1540575467063-027a694d4679?q=80&w=1400&auto=format&fit=crop', 'category' => 'Site Installation', 'alt' => 'Rooftop corporate brunch'],
            ['title' => 'Crystalline New Year', 'src' => 'https://images.unsplash.com/photo-1496337589254-e7cbb9d9437e?q=80&w=1400&auto=format&fit=crop', 'category' => 'Luxury Events', 'alt' => 'Holiday celebration chandeliers'],
            ['title' => 'Tapestry Ballroom', 'src' => 'https://images.unsplash.com/photo-1566836610590-feab6f843b5b?q=80&w=1400&auto=format&fit=crop', 'category' => 'Wedding', 'alt' => 'Tapestry ballroom details'],
            ['title' => 'Founders Award Night', 'src' => 'https://images.unsplash.com/photo-1591115765373-ea6e097c839b?q=80&w=1400&auto=format&fit=crop', 'category' => 'Site Installation', 'alt' => 'Awards gala stage'],
            ['title' => 'Auberge Celebration', 'src' => '/assets/6.jpeg', 'category' => 'Luxury Events', 'alt' => 'WOW Events portfolio — refined gathering atmosphere'],
            ['title' => 'Pearl Reception', 'src' => '/assets/7.jpeg', 'category' => 'Wedding', 'alt' => 'WOW Events portfolio — luminous reception details'],
            ['title' => 'Site installation', 'src' => '/assets/8.jpeg', 'category' => 'Site Installation', 'alt' => 'WOW Events portfolio — site installation'],
            ['title' => 'Veranda Vows', 'src' => '/assets/9.jpeg', 'category' => 'Wedding', 'alt' => 'WOW Events portfolio — outdoor ceremony moment'],
            ['title' => 'Meridian Night', 'src' => '/assets/10.jpeg', 'category' => 'Luxury Events', 'alt' => 'WOW Events portfolio — evening gala ambience'],
            ['title' => 'Obsidian Table', 'src' => '/assets/11.jpeg', 'category' => 'Wedding', 'alt' => 'WOW Events portfolio — formal dining composition'],
            ['title' => 'Solstice Soirée', 'src' => '/assets/12.jpeg', 'category' => 'Wedding', 'alt' => 'WOW Events portfolio — celebration tableau'],
            ['title' => 'Carrara Gallery', 'src' => '/assets/13.jpeg', 'category' => 'Luxury Events', 'alt' => 'WOW Events portfolio — architectural event space'],
            ['title' => 'Ember Lounge', 'src' => '/assets/14.jpeg', 'category' => 'Wedding', 'alt' => 'WOW Events portfolio — intimate lounge styling'],
            ['title' => 'Silk Canopy', 'src' => '/assets/15.jpeg', 'category' => 'Wedding', 'alt' => 'WOW Events portfolio — draped celebration setting'],
            ['title' => 'Cortile Gala', 'src' => '/assets/16.jpeg', 'category' => 'Luxury Events', 'alt' => 'WOW Events portfolio — courtyard gala evening'],
        ];
    }

    /**
     * Home “Our work” strip: featured + grid need seven pieces; use local /assets/ frames first.
     *
     * @return list<array{title:string, src:string, category:string, alt:string}>
     */
    public static function homePortfolioPreview(): array
    {
        $all = self::portfolioImages();
        $local = array_values(array_filter(
            $all,
            static fn (array $item): bool => str_starts_with($item['src'] ?? '', '/assets/'),
        ));

        if ($local !== []) {
            return array_slice($local, 0, 7);
        }

        return array_slice($all, 0, 7);
    }

}
