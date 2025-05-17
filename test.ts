import {YYOptionsMain,YYOptionsAndroid,YYOptionsWindows, YYOptionsHTML5, YYOptionsMac, YYOptionsOperaGX, YYOptionsLinux} from "./types/options";
import fs from 'fs';

const options = [
    {name: 'main', class: YYOptionsMain},
    {name: 'windows', class: YYOptionsWindows},
    {name: 'android', class: YYOptionsAndroid},
    {name: 'html5', class: YYOptionsHTML5},
    {name: 'mac', class: YYOptionsMac},
    {name: 'operagx', class: YYOptionsOperaGX},
    {name: 'linux', class: YYOptionsLinux},
];

for (const platform of options) {
    //console.log(`testing options for ${platform.name}`)
    const yyfile = fs.readFileSync(`./test/test game/options/${platform.name}/options_${platform.name}.yy`,'utf8');
    const yyobj = platform.class.parse(yyfile);
    const newstr = yyobj.stringify();
    fs.writeFileSync(`./test/test game/options/${platform.name}/options_${platform.name}_new.yy`,newstr,'utf8');
    console.log(`${platform.name} options match: ${newstr == yyfile}`);
}