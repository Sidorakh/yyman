export {YYOptionsMain,YYOptionsAndroid,YYOptionsWindows, YYOptionsHTML5, YYOptionsMac, YYOptionsOperaGX, YYOptionsFile, YYOptionsLinux} from "./types/options";

if (require.main !== module) {
    process.exit();
}

import './cmdline';