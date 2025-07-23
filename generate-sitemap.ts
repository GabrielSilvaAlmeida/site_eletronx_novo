import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { dirname } from 'path';

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

  const outputPath = './src/sitemap.xml';

  // cria a pasta se não existir
  const outputDir = dirname(outputPath);
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  writeFileSync(outputPath, sitemap);
  console.log('✅ Sitemap gerado em:', outputPath);
})();