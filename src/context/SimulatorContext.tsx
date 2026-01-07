import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AssessmentData {
  // Tool 1: Business Profile
  businessName: string;
  industry: string;
  employeeCount: string;
  annualRevenue: string;
  
  // Tool 2: AI Readiness
  currentTools: string[];
  technicalCapability: number;
  budget: string;
  timeline: string;
  
  // Tool 3: Priority Areas
  painPoints: string[];
  goals: string[];
  preferredApproach: string;
}

interface SimulatorContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  assessmentData: AssessmentData;
  updateAssessmentData: (data: Partial<AssessmentData>) => void;
  resetAssessment: () => void;
  isComplete: boolean;
  setIsComplete: (complete: boolean) => void;
}

const defaultAssessmentData: AssessmentData = {
  businessName: '',
  industry: '',
  employeeCount: '',
  annualRevenue: '',
  currentTools: [],
  technicalCapability: 3,
  budget: '',
  timeline: '',
  painPoints: [],
  goals: [],
  preferredApproach: '',
};

const SimulatorContext = createContext<SimulatorContextType | undefined>(undefined);

export function SimulatorProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [assessmentData, setAssessmentData] = useState<AssessmentData>(defaultAssessmentData);
  const [isComplete, setIsComplete] = useState(false);

  const updateAssessmentData = (data: Partial<AssessmentData>) => {
    setAssessmentData(prev => ({ ...prev, ...data }));
  };

  const resetAssessment = () => {
    setCurrentStep(1);
    setAssessmentData(defaultAssessmentData);
    setIsComplete(false);
  };

  return (
    <SimulatorContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        assessmentData,
        updateAssessmentData,
        resetAssessment,
        isComplete,
        setIsComplete,
      }}
    >
      {children}
    </SimulatorContext.Provider>
  );
}

export function useSimulator() {
  const context = useContext(SimulatorContext);
  if (context === undefined) {
    throw new Error('useSimulator must be used within a SimulatorProvider');
  }
  return context;
}
