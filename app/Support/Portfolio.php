<?php

namespace App\Support;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class Portfolio
{
    private const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'webp', 'gif'];

    /**
     * Custom metadata by asset path: {folder}/{filename}
     *
     * @var array<string, array{title: string, slug?: string, category?: string, categorySlug?: string}>
     */
    private const FILENAME_OVERRIDES = [
        'enterancegate/IMG_20260324_Birthday backdrop.jpg' => [
            'title' => 'Birthday backdrop',
            'slug' => 'birthday-backdrop',
        ],
        'enterancegate/Welcome board decor.jpg' => [
            'title' => 'Welcome board decor',
            'slug' => 'welcome-board-decor',
        ],
        'roundtablecenterpeices/site_installation.jpg' => [
            'title' => 'Site installation',
            'slug' => 'site-installation',
            'category' => 'Site Installation',
            'categorySlug' => 'site-installation',
        ],
    ];

    /** Wedding typology folders under public/assets */
    private const WEDDING_FOLDERS = [
        [
            'folder' => 'enterancegate',
            'label' => 'Entrance Gate',
            'slug' => 'entrance-gate',
        ],
        [
            'folder' => 'weddingmondap',
            'label' => 'Wedding Mandap',
            'slug' => 'wedding-mandap',
        ],
        [
            'folder' => 'receptionstage',
            'label' => 'Reception Stage',
            'slug' => 'reception-stage',
        ],
        [
            'folder' => 'roundtablecenterpeices',
            'label' => 'Round Table Centerpiece',
            'slug' => 'round-table-centerpiece',
        ],
    ];

    /** @return list<array{label: string, slug: string|null, weddingGroup?: bool}> */
    public static function filters(): array
    {
        return [
            ['label' => 'All', 'slug' => null],
            ['label' => 'Wedding', 'slug' => 'wedding', 'weddingGroup' => true],
            ['label' => 'Entrance Gate', 'slug' => 'entrance-gate'],
            ['label' => 'Wedding Mandap', 'slug' => 'wedding-mandap'],
            ['label' => 'Reception Stage', 'slug' => 'reception-stage'],
            ['label' => 'Round Table Centerpiece', 'slug' => 'round-table-centerpiece'],
            ['label' => 'Site Installation', 'slug' => 'site-installation'],
            ['label' => 'Luxury Events', 'slug' => 'luxury-events'],
        ];
    }

    public static function categorySlug(string $label): string
    {
        foreach (self::filters() as $filter) {
            if ($filter['label'] === $label && $filter['slug'] !== null) {
                return $filter['slug'];
            }
        }

        return Str::slug($label);
    }

    public static function categoryLabel(?string $slug): ?string
    {
        if ($slug === null) {
            return 'All';
        }

        if ($slug === 'corporate') {
            return 'Site Installation';
        }

        foreach (self::filters() as $filter) {
            if ($filter['slug'] === $slug) {
                return $filter['label'];
            }
        }

        return null;
    }

    /** @return list<string> */
    public static function weddingCategorySlugs(): array
    {
        return array_column(self::WEDDING_FOLDERS, 'slug');
    }

    /**
     * @return list<array{
     *   title: string,
     *   src: string,
     *   category: string,
     *   alt: string,
     *   slug: string,
     *   categorySlug: string
     * }>
     */
    public static function items(): array
    {
        $items = array_merge(
            self::itemsFromWeddingFolders(),
            self::legacyItems(),
        );

        return self::ensureUniqueSlugs($items);
    }

    /**
     * @return list<array{
     *   title: string,
     *   src: string,
     *   category: string,
     *   alt: string,
     *   slug: string,
     *   categorySlug: string
     * }>
     */
    public static function itemsForFilter(?string $categorySlug): array
    {
        $all = self::items();

        if ($categorySlug === null) {
            return $all;
        }

        if ($categorySlug === 'wedding') {
            $weddingSlugs = self::weddingCategorySlugs();

            return array_values(array_filter(
                $all,
                static fn (array $item): bool => in_array($item['categorySlug'], $weddingSlugs, true),
            ));
        }

        return array_values(array_filter(
            $all,
            static fn (array $item): bool => $item['categorySlug'] === $categorySlug,
        ));
    }

    /**
     * @return array{
     *   title: string,
     *   src: string,
     *   category: string,
     *   alt: string,
     *   slug: string,
     *   categorySlug: string
     * }|null
     */
    public static function findItem(string $categorySlug, string $itemSlug): ?array
    {
        foreach (self::itemsForFilter($categorySlug) as $item) {
            if ($item['slug'] === $itemSlug) {
                return $item;
            }
        }

        return null;
    }

    /** @return list<array{title: string, src: string, category: string, alt: string, slug: string, categorySlug: string}> */
    private static function itemsFromWeddingFolders(): array
    {
        $items = [];

        foreach (self::WEDDING_FOLDERS as $definition) {
            $directory = public_path('assets/'.$definition['folder']);

            if (! File::isDirectory($directory)) {
                continue;
            }

            $files = File::files($directory);

            usort($files, static fn ($a, $b) => strcmp($a->getFilename(), $b->getFilename()));

            $index = 0;

            foreach ($files as $file) {
                if (! self::isImageFile($file->getFilename())) {
                    continue;
                }

                $index++;
                $filename = $file->getFilename();
                $itemKey = $definition['slug'].'-'.str_pad((string) $index, 2, '0', STR_PAD_LEFT);
                $filenameKey = $definition['folder'].'/'.$filename;
                $override = self::FILENAME_OVERRIDES[$filenameKey] ?? null;
                $title = $override['title'] ?? self::compositionTitle($definition['label'], $index);
                $slug = $override['slug'] ?? $itemKey;
                $category = $override['category'] ?? $definition['label'];
                $categorySlug = $override['categorySlug'] ?? $definition['slug'];

                $items[] = [
                    'title' => $title,
                    'src' => self::assetPublicUrl($definition['folder'], $filename),
                    'category' => $category,
                    'alt' => 'WOW Events — '.$title,
                    'slug' => $slug,
                    'categorySlug' => $categorySlug,
                ];
            }
        }

        return $items;
    }

    /** @return list<array{title: string, src: string, category: string, alt: string, slug: string, categorySlug: string}> */
    private static function legacyItems(): array
    {
        $items = [];

        foreach (SiteContent::portfolioImages() as $row) {
            $category = $row['category'];

            if (in_array($category, ['Wedding'], true)) {
                continue;
            }

            if (! str_starts_with($row['src'] ?? '', '/assets/')) {
                continue;
            }

            $slug = Str::slug($row['title']);
            $categorySlug = self::categorySlug($category);

            $items[] = [
                'title' => $row['title'],
                'src' => $row['src'],
                'category' => $category,
                'alt' => $row['alt'],
                'slug' => $slug !== '' ? $slug : 'composition',
                'categorySlug' => $categorySlug,
            ];
        }

        return $items;
    }

    /**
     * @param  list<array{title: string, src: string, category: string, alt: string, slug: string, categorySlug: string}>  $items
     * @return list<array{title: string, src: string, category: string, alt: string, slug: string, categorySlug: string}>
     */
    private static function ensureUniqueSlugs(array $items): array
    {
        $counts = [];

        foreach ($items as &$item) {
            $base = $item['slug'];
            $category = $item['categorySlug'];
            $counts[$category][$base] = ($counts[$category][$base] ?? 0) + 1;

            if ($counts[$category][$base] > 1) {
                $item['slug'] = $base.'-'.$counts[$category][$base];
            }
        }

        return $items;
    }

    private static function isImageFile(string $filename): bool
    {
        $extension = strtolower(pathinfo($filename, PATHINFO_EXTENSION));

        return in_array($extension, self::IMAGE_EXTENSIONS, true);
    }

    private static function assetPublicUrl(string $folder, string $filename): string
    {
        return '/assets/'.$folder.'/'.rawurlencode($filename);
    }

    private static function compositionTitle(string $categoryLabel, int $number): string
    {
        return sprintf('%s — %02d', $categoryLabel, $number);
    }
}
