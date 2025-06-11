import { useState, useEffect } from 'react';
import './App.css';
import { type Habit, saveHabits, loadHabits, generateToken } from './Habit';

function App() {
  const [habits, setHabits] = useState<Habit[]>(loadHabits());
  const [newHabitName, setNewHabitName] = useState('');
  const [frequency, setFrequency] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  useEffect(() => {
    saveHabits(habits);
  }, [habits]);

  const addHabit = () => {
    if (!newHabitName.trim()) return;
    const newHabit: Habit = {
      id: generateToken(),
      name: newHabitName,
      frequency,
      lastCompleted: null,
      createdAt: new Date().toISOString(),
    };
    setHabits([...habits, newHabit]);
    setNewHabitName('');
  };

  const toggleHabitCompletion = (habitId: string) => {
    const today = getTodayDate();
    setHabits(habits.map(habit => {
      if (habit.id === habitId) {
        return {
          ...habit,
          lastCompleted: habit.lastCompleted === today ? null : today,
        };
      }
      return habit;
    }));
  };

  const deleteHabit = (habitId: string) => {
    setHabits(habits.filter(habit => habit.id !== habitId));
  };

  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Habit Tracker</h1>
      
      {/* Add Habit Form */}
      <div className="mb-6 flex flex-col sm:flex-row gap-2 justify-center">
        <input
          type="text"
          value={newHabitName}
          onChange={(e) => setNewHabitName(e.target.value)}
          placeholder="Enter habit name"
          className="border rounded-lg p-2 flex-grow"
        />
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value as 'daily' | 'weekly' | 'monthly')}
          className="border rounded-lg p-2"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
        <button
          onClick={addHabit}
          className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition"
        >
          Add Habit
        </button>
      </div>

      {/* Habit List */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {habits.map(habit => (
          <div key={habit.id} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold">{habit.name}</h2>
            <p className="text-gray-500">Frequency: {habit.frequency}</p>
            <p className="text-gray-500">Created on: {new Date(habit.createdAt).toLocaleDateString()}</p>
            <button
              onClick={() => toggleHabitCompletion(habit.id)}
              className={`mt-2 w-full p-2 rounded-lg transition ${
                habit.lastCompleted === getTodayDate()
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              {habit.lastCompleted === getTodayDate() ? 'Completed' : 'Mark as Done'}
            </button>
            <button
              onClick={() => deleteHabit(habit.id)}
              className="mt-2 w-full p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
            >
              Delete Habit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;