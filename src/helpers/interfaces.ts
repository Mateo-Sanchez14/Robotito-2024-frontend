/**
 * Interface representing the position of a hand-controlled robot arm.
 */
export interface PositionInterface {
  /**
   * Controls the height of the hand.
   */
  elevacion: number;
  /**
   * Controls the distance of the hand from the base.
   */
  distancia: number;
  /**
   * Controls the rotation of the arm.
   */
  rotacion: number;
  /**
   * Controls the opening or closing of the hand.
   * 0 is open, 50 is closed.
   */
  mano: number;
}

export interface RobotAPIInterface {
  e: number;
  d: number;
  r: number;
  m: number;
}
