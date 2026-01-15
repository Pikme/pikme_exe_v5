import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const DATA_DIR = path.join(process.cwd(), 'data');

export async function getEntityBySlug<T>(category: string, slug: string): Promise<T | null> {
  try {
    const files = await glob(`${DATA_DIR}/${category}/**/${slug}.json`);
    if (files.length === 0) return null;
    const content = fs.readFileSync(files[0], 'utf8');
    return JSON.parse(content) as T;
  } catch (error) {
    return null;
  }
}

export async function getAllEntities<T>(category: string): Promise<T[]> {
  try {
    const files = await glob(`${DATA_DIR}/${category}/**/*.json`);
    return files.map(file => JSON.parse(fs.readFileSync(file, 'utf8')) as T);
  } catch (error) {
    return [];
  }
}

export async function getEntitiesByState<T>(category: string, state: string): Promise<T[]> {
  try {
    const stateSlug = state.toLowerCase().replace(/ /g, '-');
    const files = await glob(`${DATA_DIR}/${category}/**/${stateSlug}/**/*.json`);
    return files.map(file => JSON.parse(fs.readFileSync(file, 'utf8')) as T);
  } catch (error) {
    return [];
  }
}
