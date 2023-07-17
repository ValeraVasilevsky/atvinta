import { DESIGN, FRONTEND } from "@/constants/production/robotType";

export type TRobot = "FrontEnd" | "Design";
export type TStabilizer = "Male" | "Female";

export interface IRobot {
  id: string;
  type: TRobot;
  stabilizer: TStabilizer;
  path: string;
  canCreate: boolean;
  created: boolean;
}

export const ROBOTS: IRobot[] = [
  {
    id: FRONTEND,
    type: "FrontEnd",
    stabilizer: "Female",
    path: "production/canCreateFrontFemale.png",
    canCreate: true,
    created: false,
  },
  {
    id: FRONTEND,
    type: "FrontEnd",
    stabilizer: "Male",
    path: "production/canCreateFrontMale.png",
    canCreate: true,
    created: false,
  },
  {
    id: DESIGN,
    type: "Design",
    stabilizer: "Female",
    path: "production/canCreateDesignerFemale.png",
    canCreate: true,
    created: false,
  },
  {
    id: DESIGN,
    type: "Design",
    stabilizer: "Male",
    path: "production/canCreateDesignerMale.png",
    canCreate: true,
    created: false,
  },

  {
    id: FRONTEND,
    type: "FrontEnd",
    stabilizer: "Female",
    path: "production/blockedFrontFemale.png",
    canCreate: false,
    created: false,
  },
  {
    id: FRONTEND,
    type: "FrontEnd",
    stabilizer: "Male",
    path: "production/blockedFrontMale.png",
    canCreate: false,
    created: false,
  },
  {
    id: DESIGN,
    type: "Design",
    stabilizer: "Female",
    path: "production/blockedDesignerFemale.png",
    canCreate: false,
    created: false,
  },
  {
    id: DESIGN,
    type: "Design",
    stabilizer: "Male",
    path: "production/blockedDesignerMale.png",
    canCreate: false,
    created: false,
  },

  {
    id: FRONTEND,
    type: "FrontEnd",
    stabilizer: "Female",
    path: "production/createdFrontFemale.png",
    canCreate: false,
    created: true,
  },
  {
    id: FRONTEND,
    type: "FrontEnd",
    stabilizer: "Male",
    path: "production/createdFrontMale.png",
    canCreate: false,
    created: true,
  },
  {
    id: DESIGN,
    type: "Design",
    stabilizer: "Female",
    path: "production/createdDesignerFemale.png",
    canCreate: false,
    created: true,
  },
  {
    id: DESIGN,
    type: "Design",
    stabilizer: "Male",
    path: "production/createdDesignerMale.png",
    canCreate: false,
    created: true,
  },
];
