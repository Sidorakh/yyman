export {YYOptionsMain,YYOptionsAndroid,YYOptionsWindows, YYOptionsHTML5, YYOptionsMac, YYOptionsOperaGX, YYOptionsFile, YYOptionsLinux} from "./types/options";
import cmd from './cmdline';
if (require.main == module) {
    cmd();
}

