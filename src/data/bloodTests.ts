import { BloodTest, TestCategory } from '../types';

export const testCategories: TestCategory[] = [
  { id: 'heart', name: 'Heart', icon: '❤️' },
  { id: 'diabetes', name: 'Diabetes', icon: '🩸' },
  { id: 'liver', name: 'Liver', icon: '🫁' },
  { id: 'kidney', name: 'Kidney', icon: '🫘' },
];

export const bloodTests: BloodTest[] = [
  {
    id: '1',
    name: 'Lipid Profile',
    description: 'Cholesterol, HDL, LDL, Triglycerides',
    price: 400,
    duration: '24 hours',
    category: 'heart',
    popular: true,
  },
  {
    id: '2',
    name: 'Sugar (Fasting)',
    description: 'Blood glucose level after fasting',
    price: 70,
    duration: '4 hours',
    category: 'diabetes',
    popular: true,
  },
  {
    id: '3',
    name: 'LFT (Liver Function Test)',
    description: 'Complete liver health assessment',
    price: 450,
    duration: '24 hours',
    parameters: 11,
    category: 'liver',
    popular: true,
  },
  {
    id: '4',
    name: 'KFT (Kidney Function Test)',
    description: 'Urea, Creatinine, Uric Acid levels',
    price: 450,
    duration: '24 hours',
    parameters: 5,
    category: 'kidney',
    popular: true,
  },
  {
    id: '5',
    name: 'HbA1c',
    description: 'Average blood sugar over 3 months',
    price: 400,
    duration: '24 hours',
    category: 'diabetes',
    popular: true,
  },
  {
    id: '6',
    name: 'Full Body Checkup',
    description: 'Complete health screening package',
    price: 2200,
    duration: '48 hours',
    parameters: 70,
    category: 'package',
    popular: true,
  },
];
