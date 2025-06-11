import { v4 as uuidv4 } from 'uuid';

export interface Habit {
    id: string;
    name: string;
    frequency: 'daily' | 'weekly' | 'monthly';
    lastCompleted: string | null; // Última fecha en que se completó
    createdAt: string; // Fecha de creación
}

export function saveHabits(habits: Habit[]): void {
    localStorage.setItem('habits', JSON.stringify(habits));
}

export function loadHabits(): Habit[] {
    const habits = localStorage.getItem('habits');
    return habits ? JSON.parse(habits) : [];
}

export function generateToken(): string {
    return uuidv4(); // Genera un UUID único
}