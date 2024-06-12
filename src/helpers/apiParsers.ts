import { PositionInterface, RobotAPIInterface } from "./interfaces";

export const parsePositionRequest = (
  data: PositionInterface
): RobotAPIInterface => {
  return {
    e: data.elevacion,
    d: data.distancia,
    r: data.rotacion,
    m: data.mano,
  };
};
