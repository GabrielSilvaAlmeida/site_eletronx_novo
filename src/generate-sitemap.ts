import { writeFileSync } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

(async () => {
  const smStream = new SitemapStream({ hostname: 'https://eletronx.com' });

  const routes = [
    '/',
    '/home',
    '/servicos',
    '/hemodinamica',
    '/politica',
    '/sobre',
    '/produtos',
    
  ];

  routes.forEach(route => smStream.write({ url: route, changefreq: 'weekly', priority: 0.8 }));
  smStream.end();

  const sitemap = await streamToPromise(smStream).then(data => data.toString());
  writeFileSync('./dist/browser/eletronx-site/sitemap.xml', sitemap);
})();