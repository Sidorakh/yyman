import {json_safe_value,unsafe_stringify,unsafe_init} from '../../util';

const key_list = [
    ['$GMLinuxOptions', 'internal_gm_linux_options'],
    ['%Name', 'internal_name'],
    ['name','name'],
    ["option_linux_allow_fullscreen","allow_fullscreen"],
    ["option_linux_disable_sandbox","disable_sandbox"],
    ["option_linux_display_cursor","display_cursor"],
    ["option_linux_display_name","display_name"],
    ["option_linux_display_splash","displaY_splash"],
    ["option_linux_enable_steam","enable_steam"],
    ["option_linux_homepage","homepage"],
    ["option_linux_icon","icon"],
    ["option_linux_interpolate_pixels","interpolate_pixels"],
    ["option_linux_long_desc","long_description"],
    ["option_linux_maintainer_email","maintainer_email"],
    ["option_linux_resize_window","allow_resize_window"],
    ["option_linux_scale","scale_type"],
    ["option_linux_short_desc","short_description"],
    ["option_linux_splash_screen","splash"],
    ["option_linux_start_fullscreen","start_fullscreen"],
    ["option_linux_sync","enable_vsync"],
    ["option_linux_texture_page","texture_page_size"],
    ["option_linux_version","version"],
    ['resourceType','internal_resource_type'],
    ['resourceVersion','internal_resource_version'],
];

export default class YYOptionsLinux {
    project_format: string = '2024.13';
    yydata = {
        internal_gm_linux_options: 'v3',
        internal_name: 'Linux',
        internal_resource_type: 'GMLinuxOptions',
        internal_resource_version: '2.0',
        name: 'Linux',                             // name

        allow_fullscreen: false,                  // option_linux_allow_fullscreen
        disable_sandbox: false,                   // option_linux_disable_sandbox
        display_cursor: true,                     // option_linux_display_cursor
        display_name: 'Created with GameMaker',    // option_linux_display_name
        displaY_splash: false,                    // option_linux_display_splash
        enable_steam: false,                      // option_linux_enable_steam
        homepage: 'https://wwww.yoyogames.com',    // option_linux_homepage
        icon: '${base_options_dir}/linux/icons/64.png',  // option_linux_icon
        interpolate_pixels: true,                 // option_linux_interpolate_pixels
        long_description: '',                      // option_linux_long_desc
        maintainer_email: '',                      // option_linux_maintainer_email
        allow_resize_window: false,               // option_linux_resize_window
        scale_type: 0,                             // option_linux_scale
        short_description: '',                     // option_linux_short_desc
        splash: '',                                // option_linux_splash_screen
        start_fullscreen: false,                  // option_linux_start_fullscreen
        enable_vsync: false,                      // option_linux_sync
        texture_page_size: '2048x2048',            // option_linux_texture_page
        version: '1.0.0.0',                        // option_linux_version
    }



    

    stringify() {
        return unsafe_stringify(key_list,this.yydata);
    }

    static parse(v: string) {
        const yy = new YYOptionsLinux();
        unsafe_init(v,key_list,yy.yydata);
        return yy;
    }

    get_version() {
        const [major,minor,patch,last] = this.yydata.version.split('.');
        return {
            major, minor, patch, last
        }
    }

    set_version(major: string | number,minor: string | number,patch: string | number, last?: string | number) {
        this.yydata.version = `${major}.${minor}.${patch}.${last ?? 0}`;
    }
    

    static list_options() {
        return key_list.map(v=>v[1]);
    }

    
    get(key: string) {
        if ((this as any)[key] == undefined) return undefined;
        return this.yydata[key as keyof YYOptionsLinux["yydata"]];
    }

    set(key: string, value: string | number | boolean) {
        if ((this as any)[key] == undefined) return undefined;
        if (typeof(value) == typeof(this.yydata[key as keyof YYOptionsLinux["yydata"]])) {
            // @ts-ignore
            this.yydata[key as keyof YYOptionsLinux["yydata"]] = value;
        } else throw new Error(`invalid type ${typeof(value)} for field ${key}, expected ${typeof(this.yydata[key as keyof YYOptionsLinux["yydata"]])}`)
    }
}