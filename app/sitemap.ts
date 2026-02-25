import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.smilehandyman.com'
    const lastModified = new Date("2025-01-01")

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'weekly',
            priority: 1,
            alternates: {
                languages: {
                    ko: `${baseUrl}/ko`,
                },
            },
        },
        {
            url: `${baseUrl}/ko`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.8,
            alternates: {
                languages: {
                    en: baseUrl,
                },
            },
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.3,
        },
    ]
}
