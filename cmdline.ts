import {YYOptionsMain,YYOptionsAndroid,YYOptionsWindows, YYOptionsHTML5, YYOptionsMac, YYOptionsOperaGX, YYOptionsFile, YYOptionsLinux} from "./types/options";
import fs from 'fs';
import path from 'path'
import { parseArgs } from "util";

export default function cmd() {
    const params = parseArgs({
        options: {
            'help': {
                type: 'string'
            },
            'get-option-android': {
                type: 'string',
                multiple: true,
            },
            'get-option-html5': {
                type: 'string',
                multiple: true,
            },
            'get-option-linux': {
                type: 'string',
                multiple: true,
            },
            'get-option-mac': {
                type: 'string',
                multiple: true,
            },
            'get-option-main': {
                type: 'string',
                multiple: true,
            },
            'get-option-operagx': {
                type: 'string',
                multiple: true,
            },
            'get-option-windows': {
                type: 'string',
                multiple: true,
            },
            'format': {
                type: 'string',
            },
        },
        strict: false,
    });
    //console.log(params);
    const formats = ['json','text'];


    const args = Object.keys(params.values);
    if (args.includes('help')) {
        // assume help requested
        console.log(`Help`)
        process.exit();
    }

    let format = formats[0];
    if (typeof(params.values.format) === 'string') {
        if (formats.includes(params.values.format.toLowerCase())) {
            format = params.values.format.toLowerCase();
        }
    }
    let project = params.positionals[0];

    if (project == undefined) {
        console.error('ERROR: Path not provided');
        process.exit();
    }

    if (fs.statSync(project).isDirectory()) {
        // assume it's a project folder , try to find a YYP
        const candidates = fs.readdirSync(project);
        for (const candidate of candidates) {
            if (fs.statSync(path.join(project,candidate)).isFile() && candidate.endsWith('.yyp')) {
                // assume this is the YYP
                project = path.join(project,candidate);
            }
        }
    }
    const directory = path.dirname(project);    // project directory

    // loading YYP will go here eventually, nothing important in it yet though

    // cache for loaded files - should only need to load them once
    const cache = new Map<string,Object>();
    const modified_files: {[key: string]: boolean} = {};

    const output: {[key: string]: any} = {};

    for (const arg of args) {
        if (arg == 'format') continue;
        const rhs = params.values[arg];
        console.log(`${arg}: ${rhs}`);
        
        const options = ['android','html5','ios','linux','mac','main','operagx','tvos','windows'];

        if (arg.startsWith('get-option') || arg.startsWith('set-option')) {
            const type = arg.slice(4).replace('option-','');
            
            if (!options.includes(type)) {
                console.error(`ERROR: ${type} not found`);
                continue;
            }

            if (!cache.has(`options-${type}`)) {
                const str = fs.readFileSync(path.join(directory,'options',type,`options_${type}.yy`),'utf8');

            let obj: YYOptionsFile;
            switch (type) {
                case 'android': obj = YYOptionsAndroid.parse(str); break;
                case 'html5': obj = YYOptionsHTML5.parse(str); break;
                case 'linux': obj = YYOptionsLinux.parse(str); break;
                case 'mac': obj = YYOptionsMac.parse(str); break;
                case 'main': obj = YYOptionsMain.parse(str); break;
                case 'operagx': obj = YYOptionsOperaGX.parse(str); break;
                case 'windows': obj = YYOptionsWindows.parse(str); break;
                default: 
                    // UH. YOU SHOULDN'T BE HERE
                    console.error(`Platform ${type} not yet implemnted`)
                    process.exit();
            }
            cache.set(`options-${type}`,obj);
        }
        if (!cache.has(`options-${type}`)) {
            // som,ething ahs gone hgorribly wrong
            process.exit();
        }
        const yy = cache.get(`options-${type}`) as YYOptionsFile;
        if (arg.startsWith('get')) {
            output[`${rhs}`] = yy.get(`${rhs}`);
        }
        if (arg.startsWith('set')) {

        }
        
    }

}
}