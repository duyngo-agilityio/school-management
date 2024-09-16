import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://school-management-admin-dashboard.vercel.app/teachers',
      lastModified: new Date(),
    },
    {
      url: 'https://school-management-admin-dashboard.vercel.app/students',
      lastModified: new Date(),
    },
  ];
}
