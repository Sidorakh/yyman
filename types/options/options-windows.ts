import {json_safe_value,unsafe_stringify,unsafe_init} from '../../util';

const key_list = [
    ['$GMWindowsOptions', 'internal_gm_windows_options'],
    ['%Name', 'internal_name'],
    ['name','name'],
    ["option_windows_allow_fullscreen_switching","allow_fullscreen_switching"],
    ["option_windows_borderless","use_borderless_window"],
    ["option_windows_company_info","company_info"],
    ["option_windows_copyright_info","copyright_info"],
    ["option_windows_copy_exe_to_dest","copy_exe_to_test"],
    ["option_windows_description_info","description_info"],
    ["option_windows_disable_sandbox","disable_sandbox"],
    ["option_windows_display_cursor","display_cursor"],
    ["option_windows_display_name","display_name"],
    ["option_windows_enable_steam","enable_steam"],
    ["option_windows_executable_name","executable_name"],
    ["option_windows_icon","icon"],
    ["option_windows_installer_finished","installer_finished"],
    ["option_windows_installer_header","installer_header"],
    ["option_windows_interpolate_pixels","interpoalte_pixels"],
    ["option_windows_license","license"],
    ["option_windows_nsis_file","nsis_file"],
    ["option_windows_product_info","product_info"],
    ["option_windows_resize_window","allow_resize_window"],
    ["option_windows_save_location","save_location"],
    ["option_windows_scale","scale_type"],
    ["option_windows_sleep_margin","sleep_margin"],
    ["option_windows_splash_screen","splash"],
    ["option_windows_start_fullscreen","start_fullscreen"],
    ["option_windows_steam_use_alternative_launcher","steam_use_alternative_launcher"],
    ["option_windows_texture_page","texture_page_size"],
    ["option_windows_use_splash","use_splash"],
    ["option_windows_version","version"],
    ["option_windows_vsync","enable_vsync"],
    ['resourceType','internal_resource_type'],
    ['resourceVersion','internal_resource_version'],
];

export default class YYOptionsWindows {
    project_format: string = '2024.13';
    
    yydata = {
        internal_gm_windows_options: 'v3',
        internal_name: 'Windows',
        internal_resource_type: 'GMWindowsOptions',
        internal_resource_version: '2.0',
        name: 'Windows',                            // name
    
        allow_fullscreen_switching: false,          // option_windows_allow_fullscreen_switching
        use_borderless_window: false,               // option_windows_borderless_window
        company_info: 'YoYo Games Ltd',             // option_windows_company_info
        copyright_info: '',                         // option_windows_copyright_info
        copy_exe_to_test: false,                    // option_windows_copy_exe_to_dest
        description_info: 'A GameMaker Game',       // option_windows_description_info
        disable_sandbox: false,                     // option_windows_disable_sandbox
        display_cursor: true,                       // option_windows_display_cursor
        display_name: 'Created with GameMaker',     // option_windows_display_name
        enable_steam: false,                        // option_windows_enable_steam
        executable_name: '${projecvt_name}.exe',    // option_windows_executable_name
        icon: '${base_options_dir}/windows/icons/icon.ico',    //option_windows_icon
        installer_finished: '${base_options_dir}/windows/installer/finished.bmp',  // option_windows_installer_finished
        installer_header: '${base_options_dir}/windows/installer/header.bmp', // option_windows_installer_header
        interpoalte_pixels: false,                  // option_windows_interpolate_pixels
        license: '${base_options_dir}/windows/installer/license.txt',  // option_windows_license
        nsis_file: '${base_options_dir}/windows/installer/nsis_script.nsi',    // option_windows_nsis_file
        product_info: 'Created with GameMaker',     // option_windows_product_info
        allow_resize_window: false,                 // option_windows_resize_window
        save_location: 0,                           // option_windows_save_location
        scale_type: 0,                              // option_windows_scale
        sleep_margin: 10,                           // option_windows_sleep_margin
        splash: '${base_options_dir}/windows/splash/splash.png',   // option_windows_splash_screen
        start_fullscreen: false,                    // option_windows_start_fullscreen
        steam_use_alternative_launcher: false,      // option_windows_steam_use_alternative_launcher
        texture_page_size: '2048x2048',             // option_windows_texture_page
        use_splash: false,                          // option_windows_use_splash
        version: '0.0.0.0',                         // option_windows_version
        enable_vsync: false,                        // option_windows_vsync
    }


    

    stringify() {
        return unsafe_stringify(key_list,this.yydata);
    }

    static parse(v: string) {
        const yy = new YYOptionsWindows();
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
        return this.yydata[key as keyof YYOptionsWindows["yydata"]];
    }

    set(key: string, value: string | number | boolean) {
        if (typeof(value) == typeof(this.yydata[key as keyof YYOptionsWindows["yydata"]])) {
            // @ts-ignore
            this.yydata[key as keyof YYOptionsWindows["yydata"]] = value;
        } else throw new Error(`invalid type ${typeof(value)} for field ${key}, expected ${typeof(this.yydata[key as keyof YYOptionsWindows["yydata"]])}`)
    }

}