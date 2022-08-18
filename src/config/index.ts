import { Config } from "./config";
import { ConfigValues } from "./config.interface";
const configValues:ConfigValues = {
    layoutBanner: import.meta.env.VITE_LAYOUT_BANNER
}
export const configs: Config = new Config(configValues);
export default configValues;