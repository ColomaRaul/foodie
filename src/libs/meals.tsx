import sql from 'better-sqlite3';

const db = new sql('meals.db');

export async function getMeals() {
  return db.prepare('SELECT * FROM meals').all();
}