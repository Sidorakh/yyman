import {json_safe_value,unsafe_stringify,unsafe_init} from '../../util';

const key_list = [
    ["$GMAndroidOptions","internal_gm_android_options"],
    ["%Name","internal_name"],
    ["name","name"],
    ["option_android_application_tag_inject","inject_to_application_tag"],
    ["option_android_arch_arm64","build_for_arm64"],
    ["option_android_arch_armv7","build_for_armv7"],
    ["option_android_arch_x86_64","build_for_x86_64"],
    ["option_android_attribute_allow_backup","allow_local_backup"],
    ["option_android_build_tools","build_tools"],
    ["option_android_compile_sdk","compile_sdk"],
    ["option_android_device_support","dont_require_gpu"],
    ["option_android_display_layout","display_layout"],
    ["option_android_display_name","display_name"],
    ["option_android_edge_to_edge_display","enable_edge_to_edge_display"],
    ["option_android_facebook_app_display_name","facebook_app_display_name"],
    ["option_android_facebook_id","facebook_id"],
    ["option_android_gamepad_support","android_gamepad_support"],
    ["option_android_google_apk_expansion","use_google_apk_expansion"],
    ["option_android_google_cloud_saving","google_use_cloud_saving"],
    ["option_android_google_dynamic_asset_delivery","use_google_dynamic_asset_delivery"],
    ["option_android_google_licensing_public_key","google_licensing_public_key"],
    ["option_android_google_services_app_id","google_services_appid"],
    ["option_android_gradle_plugin_version","gradle_plugin_version"],
    ["option_android_gradle_version","gradle_version"],
    ["option_android_icon_adaptivebg_hdpi","icon_adaptive_bg_hdpi"],
    ["option_android_icon_adaptivebg_ldpi","icon_adaptive_bg_ldpi"],
    ["option_android_icon_adaptivebg_mdpi","icon_adaptive_bg_mdpi"],
    ["option_android_icon_adaptivebg_xhdpi","icon_adaptive_bg_xhdpi"],
    ["option_android_icon_adaptivebg_xxhdpi","icon_adaptive_bg_xxhdpi"],
    ["option_android_icon_adaptivebg_xxxhdpi","icon_adaptive_bg_xxxhdpi"],
    ["option_android_icon_adaptive_generate","generate_adaptive_icons"],
    ["option_android_icon_adaptive_hdpi","icon_adaptive_hdpi"],
    ["option_android_icon_adaptive_ldpi","icon_adaptive_ldpi"],
    ["option_android_icon_adaptive_mdpi","icon_adaptive_mdpi"],
    ["option_android_icon_adaptive_xhdpi","icon_adaptive_xhdpi"],
    ["option_android_icon_adaptive_xxhdpi","icon_adaptive_xxhdpi"],
    ["option_android_icon_adaptive_xxxhdpi","icon_adaptive_xxxhdpi"],
    ["option_android_icon_hdpi","icon_hdpi"],
    ["option_android_icon_ldpi","icon_ldpi"],
    ["option_android_icon_mdpi","icon_mdpi"],
    ["option_android_icon_xhdpi","icon_xhdpi"],
    ["option_android_icon_xxhdpi","icon_xxhdpi"],
    ["option_android_icon_xxxhdpi","icon_xxxhdpi"],
    ["option_android_install_location","install_location"],
    ["option_android_interpolate_pixels","interpolate_pixels"],
    ["option_android_launchscreen_fill","launchscreen_fill"],
    ["option_android_lint","run_lint"],
    ["option_android_logcat","logcat"],
    ["option_android_minimum_sdk","min_sdk"],
    ["option_android_orient_landscape","orientation_allow_landscape"],
    ["option_android_orient_landscape_flipped","orientation_allow_landscape_flipped"],
    ["option_android_orient_portrait","orientation_allow_portrait"],
    ["option_android_orient_portrait_flipped","orientation_allow_portrait_flipped"],
    ["option_android_package_company","package_company"],
    ["option_android_package_domain","package_domain"],
    ["option_android_package_product","package_product"],
    ["option_android_permission_bluetooth","permmission_bluetooth"],
    ["option_android_permission_internet","permission_internet"],
    ["option_android_permission_network_state","permission_access_network_state"],
    ["option_android_permission_read_phone_state","permission_read_phone_state"],
    ["option_android_permission_record_audio","permission_record_audio"],
    ["option_android_permission_write_external_storage","permission_write_external_storage"],
    ["option_android_proguard_minifying","minify_enabled"],
    ["option_android_proguard_shrinking","shrink_resources"],
    ["option_android_scale","scale_mode"],
    ["option_android_screen_depth","screen_depth"],
    ["option_android_sleep_margin","sleep_margin"],
    ["option_android_splashscreen_background_colour","splash_colour"],
    ["option_android_splash_screens_landscape","splash_landscape"],
    ["option_android_splash_screens_portrait","splash_portrait"],
    ["option_android_splash_time","splash_minimum_time"],
    ["option_android_support_lib","support_library"],
    ["option_android_sync_amazon","sync_amazon"],
    ["option_android_target_sdk","target_sdk"],
    ["option_android_texture_page","texture_page_size"],
    ["option_android_tools_from_version","tools_from_version"],
    ["option_android_tv_banner","tv_banner_image"],
    ["option_android_tv_isgame","is_game"],
    ["option_android_tv_supports_leanback","supports_leanback"],
    ["option_android_use_facebook","use_facebook"],
    ["option_android_version","version"],
    ["resourceType","internal_resource_type"],
    ["resourceVersion","internal_resource_version"],

];


type YYOptionAndroidField = keyof YYOptionsAndroid["yydata"];

export default class YYOptionsAndroid {
    project_format: string = '2024.13';
    yydata = {
        internal_gm_android_options: 'v3',                     // $GMMainOptions
        internal_name: 'Android',                              // %Name
        internal_resource_type: 'GMAndroidOptions',            // resourceType
        internal_resource_version: '2.0',                      // resourceVersion
        
        name: "Android",                                       // name
        
        /* general */ 
        display_name: '',                                      // option_android_display_name
        version: '0.0.1',                                      // option_android_version
        package_domain: 'com',                                 // option_android_package_domain
        package_company: 'company',                            // option_android_package_company
        package_product: 'product',                            // option_android_package_product
    
        /* general -> build settings */ 
        tools_from_version: false,                            // option_android_tools_from_version
        build_tools: '',                                       // option_android_build_tools
        support_library: '35.0.0',                             // option_android_support_lib
        target_sdk: '35',                                      // option_android_target_sdk
        min_sdk: '21',                                         // option_android_minimum_sdk
        compile_sdk: '35',                                     // option_android_compile_sdk
        gradle_version: '8.9',                                 // option_android_gradle_version
        gradle_plugin_version: '8.7.0',                        // option_android_gradle_version
    
        /* general -> architecture */
        build_for_armv7: true,                                // option_android_arch_armv7
        build_for_arm64: true,                                // option_android_arch_arm64
        build_for_x86_64: true,                               // option_android_arch_x86_64
    
        /* general -> orientation */
        orientation_allow_landscape: true,                    // option_android_orient_landscape
        orientation_allow_landscape_flipped: true,            // option_android_orient_landscape_flipped
        orientation_allow_portrait: true,                     // option_android_orient_portrait
        orientation_allow_portrait_flipped: true,             // option_android_orient_portrait_flipped
    
        /* general -> misc */
        android_gamepad_support: false,                       // option_android_gamepad_support
        run_lint: false,                                      // option_android_lint
        install_location: 0,                                   // option_android_install_location
        sleep_margin: 4,                                       // option_android_sleep_margin
        logcat: 'yoyo:V DEBUG:V AndroidRuntime:V',             // option_android_logcat
    
        /* adaptive icons */
        
        
        generate_adaptive_icons: false,                       // option_android_icon_adaptive_generate
    
        /* adaptive icons -> foregrounds */
        icon_adaptive_ldpi: '${base_options_dir}/android/icons_adaptive/ldpi.png',             // option_android_icon_adaptive_ldpi
        icon_adaptive_mdpi: '${base_options_dir}/android/icons_adaptive/mdpi.png',             // option_android_icon_adaptive_mdpi
        icon_adaptive_hdpi: '${base_options_dir}/android/icons_adaptive/hdpi.png',             // option_android_icon_adaptive_hdpi
        icon_adaptive_xhdpi: '${base_options_dir}/android/icons_adaptive/xhdpi.png',           // option_android_icon_adaptive_xhdpi
        icon_adaptive_xxhdpi: '${base_options_dir}/android/icons_adaptive/xxhdpi.png',         // option_android_icon_adaptive_xxhdpi
        icon_adaptive_xxxhdpi: '${base_options_dir}/android/icons_adaptive/xxxhdpi.png',       // option_android_icon_adaptive_xxxhdpi
        
        /* adaptive icons -> backgrounds */
        icon_adaptive_bg_ldpi: '${base_options_dir}/android/icons_adaptivebg/ldpi.png',             // option_android_icon_adaptivebg_ldpi
        icon_adaptive_bg_mdpi: '${base_options_dir}/android/icons_adaptivebg/mdpi.png',             // option_android_icon_adaptivebg_mdpi
        icon_adaptive_bg_hdpi: '${base_options_dir}/android/icons_adaptivebg/hdpi.png',             // option_android_icon_adaptivebg_hdpi
        icon_adaptive_bg_xhdpi: '${base_options_dir}/android/icons_adaptivebg/xhdpi.png',           // option_android_icon_adaptivebg_xhdpi
        icon_adaptive_bg_xxhdpi: '${base_options_dir}/android/icons_adaptivebg/xxhdpi.png',         // option_android_icon_adaptivebg_xxhdpi
        icon_adaptive_bg_xxxhdpi: '${base_options_dir}/android/icons_adaptivebg/xxxhdpi.png',       // option_android_icon_adaptivebg_xxxhdpi
        
        
        /* graphics */
    
        interpolate_pixels: false,                            // option_android_interpolate_pixels
        enable_edge_to_edge_display: false,                   // option_android_edge_to_edge_display
        display_layout: 'LAYOUT_IN_DISPLAY_CUTOUT_MODE_DEFAULT',   // option_android_display_layout
        screen_depth: 0,                                       // option_android_screen_depth
        dont_require_gpu: 0,                                   // option_android_device_support
        scale_mode: 0,                                         // option_android_scale
        texture_page_size: '2048x2048',                        // option_android_texture_page
    
    
        /* icons */
        icon_ldpi: '${base_options_dir}/android/icons/ldpi.png',             // option_android_icon_ldpi
        icon_mdpi: '${base_options_dir}/android/icons/mdpi.png',             // option_android_icon_mdpi
        icon_hdpi: '${base_options_dir}/android/icons/hdpi.png',             // option_android_icon_hdpi
        icon_xhdpi: '${base_options_dir}/android/icons/xhdpi.png',           // option_android_icon_xhdpi
        icon_xxhdpi: '${base_options_dir}/android/icons/xxhdpi.png',         // option_android_icon_xxhdpi
        icon_xxxhdpi: '${base_options_dir}/android/icons/xxxhdpi.png',       // option_android_icon_xxxhdpi
        
            
        /* images */
    
        splash_landscape: '${base_options_dir}/android/splash/landscape.png',      // option_android_splash_screens_landscape
        splash_portrait: '${base_options_dir}/android/splash/portrait.png',        // option_android_splash_screens_portrait
        splash_minimum_time: 0,                                                    // option_android_splash_time
        splash_colour: 255,                                                        // option_android_splashscreen_background_colour
        launchscreen_fill: 0,                                                      // option_android_launchscreen_fill
    
        /* images -> android TV */
        tv_banner_image: '${base_options_dir}/android/tv_banner.png',              // option_android_tv_banner
    
    
        /* packaging */
    
        /* packaging -> proguard */
        minify_enabled: false,                                // option_android_proguard_minifying
        shrink_resources: false,                              // option_android_proguard_shrinking
    
        /* packaging -> google */
        use_google_apk_expansion: false,                      // option_android_google_apk_expansion
        use_google_dynamic_asset_delivery: false,             // option_android_google_dynamic_asset_delivery
        google_licensing_public_key: '',                       // option_android_google_licensing_public_key
    
        is_game: true,                                        // option_android_tv_isgame
        supports_leanback: true,                              // option_android_tv_supports_leanback
    
    
        /* permissions */
    
        permission_write_external_storage: false,             // option_android_permission_write_external_storage
        permission_read_phone_state: false,                   // option_android_permission_read_phone_state
        permission_access_network_state: false,               // option_android_permission_network_state
        permission_internet: true,                            // option_android_permission_internet
        permmission_bluetooth: true,                          // option_android_permission_bluetooth
        permission_record_audio: false,                       // option_android_permission_record_audio   
        inject_to_application_tag: "",                         // option_android_application_tag_inject
        allow_local_backup: false,                            // option_android_attribute_allow_backup
    
        /* unused / deprecated */
        
        google_use_cloud_saving: false,                       // option_android_google_cloud_saving
        google_services_appid: '',                             // option_android_google_services_app_id
        facebook_app_display_name: '',                         // option_android_facebook_app_display_name
        facebook_id: '',                                       // option_android_facebook_id
        sync_amazon: false,                                   // option_android_sync_amazon
        use_facebook: false,                                  // option_android_use_facebook
    }
    
    stringify() {
        return unsafe_stringify(key_list,this.yydata);
    }

    static parse(v: string) {
        const yy = new YYOptionsAndroid();
        unsafe_init(v,key_list,yy.yydata);
        return yy;
    }


    get_version() {
        const [major,minor,patch] = this.yydata.version.split('.');
        return {
            major, minor, patch, last: 0
        }
    }
    set_version(major: string | number,minor: string | number,patch: string | number) {
        this.yydata.version = `${major}.${minor}.${patch}`;
    }
    
    static list_options() {
        return key_list.map(v=>v[1]);
    }
    
    get(key: string) {
        if ((this as any)[key] == undefined) return undefined;
        return this.yydata[key as keyof YYOptionsAndroid["yydata"]];

    }

    set(key: string, value: string | number | boolean) {
        if (typeof(value) == typeof(this.yydata[key as keyof YYOptionsAndroid["yydata"]])) {
            // @ts-ignore
            this.yydata[key as keyof YYOptionsAndroid["yydata"]] = value;
        } else throw new Error(`invalid type ${typeof(value)} for field ${key}, expected ${typeof(this.yydata[key as keyof YYOptionsAndroid["yydata"]])}`)
    }
}