export const THEME_KEY      = 'mooc_theme'
export const OPTION_LETTERS = ['A', 'B', 'C', 'D'] as const
export const QUESTIONS_PER_WEEK = 10
export const QUICK_COUNTS       = [10, 20, 30, 50] as const

import type { SubjectId } from './types'

export interface SubjectConfig {
  id: SubjectId;
  title: string;
  weekCount: number;
  questionsPerWeek: number;
  weekLabels: Record<number, string>;
}

export const SUBJECTS: Record<SubjectId, SubjectConfig> = {
  'gender': {
    id: 'gender',
    title: 'Contextualising Gender',
    weekCount: 12,
    questionsPerWeek: 10,
    weekLabels: {
      1: 'Simone de Beauvoir & Second Wave',
      2: 'Black Feminism & Intersectionality',
      3: 'Toni Morrison & Queer Theory',
      4: 'Queer History & Identity',
      5: 'LGBTQ+ Literature & Law',
      6: 'Butler, Irigaray & Kristeva',
      7: 'Gender in Translation',
      8: 'Performativity & Social Movements',
      9: 'Masculinity Studies',
      10: 'Body, Technology & Cyberculture',
      11: 'Biopolitics & Posthumanism',
      12: 'Cyborg Feminism & Covid',
    }
  },
  'analytics': {
    id: 'analytics',
    title: 'Data Analytics',
    weekCount: 12,
    questionsPerWeek: 10,
    weekLabels: {
      1: 'Module 1: Introduction',
      2: 'Module 2: Descriptive Analytics',
      3: 'Module 3: Probability',
      4: 'Module 4: Distributions',
      5: 'Module 5: Sampling',
      6: 'Module 6: Distributions 2',
      7: 'Module 7: Estimation',
      8: 'Module 8: Hypothesis Testing',
      9: 'Module 9: ANOVA',
      10: 'Module 10: Regression',
      11: 'Module 11: Classification',
      12: 'Module 12: Clustering & Decision Trees',
    }
  },
  'iot': {
    id: 'iot',
    title: 'Industrial IoT',
    weekCount: 12,
    questionsPerWeek: 15,
    weekLabels: {
      1: 'Sensors, Actuators & Wireless Protocols',
      2: 'Lean Manufacturing, Industry 4.0 & Smart Factories',
      3: 'AR/VR, CPS, Big Data & AI in Industry',
      4: 'Cybersecurity, IIoT & Smart Sensing',
      5: 'IIoT Business Models, IIRA & Value Frameworks',
      6: 'Industrial Protocols, 5G & Gas Sensing',
      7: 'LPWAN, Zigbee, Edge Computing & SCADA',
      8: 'ML, Deep Learning, Cloud & IIoT Analytics',
      9: 'SDN, Fog Computing, Hadoop & IIoT Data Challenges',
      10: 'IIoT Security, 6TiSCH, Smart Factories & Supply Chain',
      11: 'Healthcare IoT, Smart Grid, RFID & Facility Management',
      12: 'Oil & Gas, UAVs, Pharmaceuticals & Industry Case Studies',
    }
  }
}
