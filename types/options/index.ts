import YYOptionsMain from './options-main';
import YYOptionsAndroid from './options-android';
import YYOptionsWindows from './options-windows';
import YYOptionsHTML5 from './options-html5';
import YYOptionsMac from './options-mac';
import YYOptionsOperaGX from './options-operagx';
import YYOptionsLinux from './options-linux'

export {YYOptionsMain, YYOptionsAndroid, YYOptionsWindows, YYOptionsHTML5, YYOptionsMac, YYOptionsOperaGX, YYOptionsLinux}


export type YYOptionsFile = YYOptionsMain | YYOptionsAndroid | YYOptionsWindows | YYOptionsHTML5 | YYOptionsMac | YYOptionsOperaGX | YYOptionsLinux;
