"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface CompareItem {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface CompareContextType {
  compareItems: CompareItem[];
  addToCompare: (item: CompareItem) => void;
  removeFromCompare: (id: string) => void;
  isInCompare: (id: string) => boolean;
  toggleCompare: (item: CompareItem) => void;
  clearCompare: () => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export function CompareProvider({ children }: { children: ReactNode }) {
  const [compareItems, setCompareItems] = useState<CompareItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('compare');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('compare', JSON.stringify(compareItems));
  }, [compareItems]);

  const addToCompare = (item: CompareItem) => {
    setCompareItems(current => {
      if (current.length >= 4) {
        alert('You can only compare up to 4 items');
        return current;
      }
      return [...current, item];
    });
  };

  const removeFromCompare = (id: string) => {
    setCompareItems(current => current.filter(item => item.id !== id));
  };

  const isInCompare = (id: string) => {
    return compareItems.some(item => item.id === id);
  };

  const toggleCompare = (item: CompareItem) => {
    if (isInCompare(item.id)) {
      removeFromCompare(item.id);
    } else {
      addToCompare(item);
    }
  };

  const clearCompare = () => {
    setCompareItems([]);
  };

  return (
    <CompareContext.Provider value={{
      compareItems,
      addToCompare,
      removeFromCompare,
      isInCompare,
      toggleCompare,
      clearCompare,
    }}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
} 