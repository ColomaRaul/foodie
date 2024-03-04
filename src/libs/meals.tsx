import { MealDB } from '@/interfaces/db_interfaces';
import sql from 'better-sqlite3';

const db = new sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //throw new Error('Not able to fetch meals');
  return db.prepare('SELECT * FROM meals').all();
}

export function getMealBySlug(slug: string) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}