import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'seasonal-diet-favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (foodId: string) => {
    setFavorites(prev =>
      prev.includes(foodId)
        ? prev.filter(id => id !== foodId)
        : [...prev, foodId]
    );
  };

  const isFavorite = (foodId: string) => favorites.includes(foodId);

  return { favorites, toggleFavorite, isFavorite };
}
