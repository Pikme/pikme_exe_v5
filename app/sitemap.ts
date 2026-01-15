import { MetadataRoute } from 'next';
import { getAllEntities } from '@/lib/cms';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://pikme.org';
  
  const categories = ['domestic-tours', 'international-tours', 'spiritual-tours', 'hotels'];
  const allUrls: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
  ];

  for (const cat of categories) {
    const entities = await getAllEntities<any>(cat);
    entities.forEach(entity => {
      // Construct URL based on category hierarchy
      let url = `${baseUrl}/${cat}/India/${entity.state.toLowerCase().replace(/ /g, '-')}/${entity.city.toLowerCase()}/${entity.slug}`;
      if (cat === 'hotels') {
        url = `${baseUrl}/hotels/India/${entity.state.toLowerCase().replace(/ /g, '-')}/${entity.city.toLowerCase()}/locality/${entity.slug}`;
      }
      
      allUrls.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  }

  return allUrls;
}
