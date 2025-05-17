import {json_safe_value,unsafe_stringify,unsafe_init} from '../../util';

const key_list = [
    ['$GMMacOptions', 'internal_gm_mac_options'],
    ['%Name', 'internal_name'],
    ['name','name'],
    ["option_mac_allow_fullscreen","allow_fullscreen"],
    ["option_mac_allow_incoming_network","allow_incoming_network"],
    ["option_mac_allow_outgoing_network","allow_outgoing_network"],
    ["option_mac_apple_sign_in","apple_sign_in"],
    ["option_mac_app_category","app_category"],
    ["option_mac_app_id","app_id"],
    ["option_mac_arm64","build_arm64"],
    ["option_mac_build_app_store","build_for_app_store"],
    ["option_mac_build_number","build_number"],
    ["option_mac_copyright","copyright"],
    ["option_mac_disable_sandbox","disable_sandbox"],
    ["option_mac_display_cursor","display_cursor"],
    ["option_mac_display_name","display_name"],
    ["option_mac_enable_retina","enable_retina"],
    ["option_mac_enable_steam","enable_steam"],
    ["option_mac_icon_png","icon"],
    ["option_mac_installer_background_png","installer_background"],
    ["option_mac_interpolate_pixels","interpolate_pixels"],
    ["option_mac_menu_dock","menu_dock"],
    ["option_mac_min_version","minimum_version"],
    ["option_mac_output_dir","output_dir"],
    ["option_mac_resize_window","allow_resize_window"],
    ["option_mac_scale","scale_type"],
    ["option_mac_signing_identity","signing_identity"],
    ["option_mac_splash_png","splash"],
    ["option_mac_start_fullscreen","start_fullscreen"],
    ["option_mac_team_id","team_id"],
    ["option_mac_texture_page","texture_page_size"],
    ["option_mac_version","version"],
    ["option_mac_vsync","enable_vsync"],
    ["option_mac_x86_64","build_x86_64"],
    ['resourceType','internal_resource_type'],
    ['resourceVersion','internal_resource_version'],
];

export default class YYOptionsMac {
    project_format: string = '2024.13';
    
    yydata = {
        internal_gm_mac_options:  'v3',
        internal_name:  'macOS',
        internal_resource_type:  'GMMacOptions',
        internal_resource_version:  '2.0',
        name:  'macOS',                             // name
    
        allow_fullscreen:  true,                    // option_mac_allow_fullscreen
        allow_incoming_network:  false,             // option_mac_allow_incoming_network
        allow_outgoing_network:  false,             // option_mac_allow_outgoing_network
        apple_sign_in:  true,                       // option_mac_apple_sign_in
        app_category:  'Games',                     // option_mac_app_category
        app_id:  'com.company.game',                // option_mac_app_id
        build_arm64:  true,                         // option_mac_arm64
        build_for_app_store:  false,                // option_mac_build_app_store
        build_number:  0,                           // option_mac_build_number
        copyright:  '',                             // option_mac_copyright
        disable_sandbox:  false,                    // option_mac_disable_sandbox
        display_cursor:  false,                     // option_mac_display_cursor
        display_name:  'Created with GameMaker',    // option_mac_display_name
        enable_retina:  false,                      // option_mac_enable_retina
        enable_steam:  false,                       // option_mac_enable_steam
        icon:  '${base_options_dir}/mac/icons/1024.png',  // option_mac_icon_png
        installer_background:  '${base_options_dir}/mac/splash/installer_background.png', // option_mac_installer_background_png
        interpolate_pixels:  false,                 // option_mac_interpolate_pixels
        menu_dock:  false,                          // option_mac_menu_dock
        minimum_version:  '10.10',                  // option_mac_min_version
        output_dir:  '~/gamemakerstudio2',          // option_mac_output_dir
        allow_resize_window:  false,                // option_mac_resize_window
        scale_type:  0,                             // option_mac_scale
        signing_identity:  'Developer ID Application:', // option_mac_signing_identity
        splash:  '${base_options_dir}/mac/splash/splash.png', // option_mac_splash_png
        start_fullscreen:  false,                   // option_mac_start_fullscreen
        team_id:  '',                               // option_mac_team_id
        texture_page_size:  '2048x2048',            // option_mac_texture_page
        version:  '1.0.0.0',                        // option_mac_version
        enable_vsync:  false,                       // option_mac_vsync
        build_x86_64:  true,                        // option_mac_x86_64
    }


    

    stringify() {
        return unsafe_stringify(key_list,this.yydata);
    }

    static parse(v: string) {
        const yy = new YYOptionsMac();
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
        return this.yydata[key as keyof YYOptionsMac["yydata"]];
    }

    set(key: string, value: string | number | boolean) {
        if ((this as any)[key] == undefined) return undefined;
        if (typeof(value) == typeof(this.yydata[key as keyof YYOptionsMac["yydata"]])) {
            // @ts-ignore
            this.yydata[key as keyof YYOptionsMac["yydata"]] = value;
        } else throw new Error(`invalid type ${typeof(value)} for field ${key}, expected ${typeof(this.yydata[key as keyof YYOptionsMac["yydata"]])}`);
    }
}