import type { Photino } from "..";

export default abstract class APIBase {
  protected photino: Photino;
  protected abstract ns: string;

  constructor(photino: Photino) {
    this.photino = photino;
  }
}