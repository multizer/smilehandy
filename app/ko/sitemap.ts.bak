import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.smilehandyman.com/ko'
    const lastModified = new Date()

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'weekly',
            priority: 1,
        },
        // 여기에 나중에 /ko/services 같은 페이지가 생기면 추가할 수 있습니다.
    ]
}
