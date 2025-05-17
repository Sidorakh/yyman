import {json_safe_value,unsafe_stringify,unsafe_init} from '../../util';

const key_list = [
    ['$GMHtml5Options', 'internal_gm_main_options'],
    ['%Name', 'internal_name'],
    ['name','name'],
    ["option_html5_allow_fullscreen","allow_fullscreen"],
    ["option_html5_browser_title","browser_title"],
    ["option_html5_centregame","centre_game"],
    ["option_html5_display_cursor","display_cursor"],
    ["option_html5_facebook_app_display_name","facebook_app_display_name"],
    ["option_html5_facebook_id","facebook_id"],
    ["option_html5_flurry_enable","flurry_enabled"],
    ["option_html5_flurry_id","flurry_id"],
    ["option_html5_foldername","folder_name"],
    ["option_html5_google_analytics_enable","google_analytics_enabled"],
    ["option_html5_google_tracking_id","google_analytics_tracking_id"],
    ["option_html5_icon","icon"],
    ["option_html5_index","index_file"],
    ["option_html5_interpolate_pixels","interpolate_pixels"],
    ["option_html5_jsprepend","js_prepend"],
    ["option_html5_loadingbar","loadingbar"],
    ["option_html5_localrunalert","local_run_alert"],
    ["option_html5_outputdebugtoconsole","output_to_console"],
    ["option_html5_outputname","output_name"],
    ["option_html5_scale","scale_type"],
    ["option_html5_splash_png","splash"],
    ["option_html5_texture_page","texture_page_size"],
    ["option_html5_usebuiltinfont","use_builtin_font"],
    ["option_html5_usebuiltinparticles","use_builtin_particles"],
    ["option_html5_usesplash","use_splash"],
    ["option_html5_use_facebook","use_facebook"],
    ["option_html5_version","version"],
    ["option_html5_webgl","webgl_required"],
    ['resourceType','internal_resource_type'],
    ['resourceVersion','internal_resource_version'],
];

export default class YYOptionsHTML5 {
    project_format: string = '2024.13';
    yydata = {
        internal_gm_main_options: 'v3',
        internal_name: 'HTML5',
        internal_resource_type: 'GMHtml5Options',
        internal_resource_version: '2.0',
        name: 'Html5',                                      // name
    
        allow_fullscreen: true,                             // option_html5_allow_fullscreen
        browser_title: 'Created with GameMaker',            // option_html5_browser_title
        centre_game: false,                                 // option_html5_centregame
        display_cursor: true,                               // option_html5_display_cursor
        facebook_app_display_name: '',                      // option_html5_facebook_app_display_name
        facebook_id: '',                                    // option_html5_facebook_id
        flurry_enabled : false,                             // option_html5_flurry_enable
        flurry_id: '',                                      // option_html5_flurry_id
        folder_name: 'html5game',                           // option_html5_foldername
        google_analytics_enabled: false,                    // option_html5_google_analytics_enable
        google_analytics_tracking_id: '',                   // option_html5_google_tracking_id
        icon: '${base_options_dir}/html5/fav.ico',          // option_html5_icon
        index_file: '',                                     // option_html5_index
        interpolate_pixels: false,                          // option_html5_interpolate_pixels
        js_prepend: '',                                     // option_html5_jsprepend
        loadingbar: '',                                     // option_html5_loadingbar
        local_run_alert: true,                              // option_html5_localrunalert
        output_to_console: true,                            // option_html5_outputdebugtoconsole
        output_name: 'index.html',                          // option_html5_outputname
        scale_type: 0,                                      // option_html5_scale
        splash: '${base_options_dir}/html5/splash.png',     // option_html5_splash_png
        texture_page_size: '2048x2048',                     // option_html5_texture_page
        use_builtin_font: true,                             // option_html5_usebuiltinfont
        use_builtin_particles: true,                        // option_html5_usebuiltinparticles
        use_splash: true,                                   // option_html5_usesplash
        use_facebook: false,                                // option_html5_use_facebook
        version: '1.0.0.0',                                 // option_html5_version
        webgl_required: 2,                                  // option_html5_webgl
    }

    stringify() {
        return unsafe_stringify(key_list,this.yydata);
    }

    static parse(v: string) {
        const yy = new YYOptionsHTML5();
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
        return this.yydata[key as keyof YYOptionsHTML5["yydata"]];
    }

    set(key: keyof YYOptionsHTML5["yydata"], value: string | number | boolean) {
        if ((this as any)[key] == undefined) return undefined;
        if (typeof(value) == typeof(this.yydata[key as keyof YYOptionsHTML5["yydata"]])) {
            // @ts-ignore
            this.yydata[key] = value;
        } else throw new Error(`invalid type ${typeof(value)} for field ${key}, expected ${typeof(this.yydata[key])}`)
    }
}