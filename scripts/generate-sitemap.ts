import fs from 'fs';
import path from 'path';
import { generateSitemap } from '../src/utils/generateSitemap';

const sitemap = generateSitemap();
fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap); 