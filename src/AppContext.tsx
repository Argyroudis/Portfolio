import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the STATES and STATE_ORDER
const STATES = {
  START: 'start',
  WARRIOR: 'warrior',
  WEAPONS: 'weapons',
  EXPERIENCE: 'experience',
};

const STATE_ORDER = [STATES.START, STATES.WARRIOR, STATES.WEAPONS, STATES.EXPERIENCE];

// Define the shape of the context value
interface AppContextType {
  currentStep: string;
  setCurrentStep: (step: string) => void;
  STATES: typeof STATES;
  STATE_ORDER: string[];
}

// Create the context with a default value
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a Provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<string>(STATES.START);

  return (
    <AppContext.Provider value={{ currentStep, setCurrentStep, STATES, STATE_ORDER }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
