import { ConfigValues } from "./config.interface";

export class Config {
  public layoutBanner:string;
  constructor(configValues:ConfigValues){
    this.layoutBanner = configValues.layoutBanner;
  }
}