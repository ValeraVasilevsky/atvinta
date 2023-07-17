import { IRobot, ROBOTS, TRobot, TStabilizer } from "@/constants/robots";

export const getRobotImage = ({
  type,
  stabilizer,
  canCreate,
  created,
}: {
  type: TRobot;
  stabilizer: TStabilizer;
  canCreate: boolean;
  created: boolean;
}): string => {
  const robot = ROBOTS.find(
    (elem) =>
      elem.type === type &&
      elem.stabilizer === stabilizer &&
      elem.canCreate === canCreate &&
      elem.created === created
  ) as IRobot;

  return robot.path;
};
