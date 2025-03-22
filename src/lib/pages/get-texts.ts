import { readdirSync } from 'node:fs';

export function getTexts() {
    try {
      const files = readdirSync('./src/lib/pages', { withFileTypes: true });
      return files.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
    } catch (error) {
      console.error(`Error reading articles:`, error);
      return [];
    }
}