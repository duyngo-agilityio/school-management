import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://school-management-admin-dashboard.vercel.app/signin',
      lastModified: new Date(),
    },
    {
      url: 'https://school-management-admin-dashboard.vercel.app/signup',
      lastModified: new Date(),
    },
  ];
}
