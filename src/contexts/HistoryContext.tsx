'use client';
import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useEffect, useCallback } from 'react';

export type HistoryItem = {
  id: string;
  tool: 'Coach' | 'Skills' | 'UniFinder' | 'Job Analysis';
  input: any;
  output: any;
  timestamp: string;
};

type HistoryContextType = {
  history: HistoryItem[];
  addToHistory: (item: Omit<HistoryItem, 'id' | 'timestamp'>) => void;
  clearHistory: () => void;
  isLoading: boolean;
};

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

export function HistoryProvider({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem('careerCompassHistory');
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
    } catch (error) {
      console.error("Failed to load history from localStorage", error);
    }
    setIsLoading(false);
  }, []);

  const addToHistory = useCallback((item: Omit<HistoryItem, 'id' | 'timestamp'>) => {
    setHistory(prevHistory => {
      const newHistoryItem: HistoryItem = {
        ...item,
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
      };
      const updatedHistory = [newHistoryItem, ...prevHistory];
      try {
        localStorage.setItem('careerCompassHistory', JSON.stringify(updatedHistory));
      } catch (error) {
        console.error("Failed to save history to localStorage", error);
      }
      return updatedHistory;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    try {
      localStorage.removeItem('careerCompassHistory');
    } catch (error) {
      console.error("Failed to clear history from localStorage", error);
    }
  }, []);

  return (
    <HistoryContext.Provider value={{ history, addToHistory, clearHistory, isLoading }}>
      {children}
    </HistoryContext.Provider>
  );
}

export function useHistory() {
  const context = useContext(HistoryContext);
  if (context === undefined) {
    throw new Error('useHistory must be used within a HistoryProvider');
  }
  return context;
}
