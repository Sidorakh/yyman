import {json_safe_value,unsafe_stringify,unsafe_init} from '../../util';

const key_list = [
    ['$GMMainOptions', 'internal_gm_main_options'],
    ['%Name', 'internal_name'],
    ['name','name'],
    ['option_audio_error_behaviour','hide_audio_errors'],
    ['option_author','author'],
    ['option_collision_compatibility','collision_compatibility_mode'],
    ['option_copy_on_write_enabled','enable_array_copy_on_write'],
    ['option_draw_colour','draw_colour'],
    ['option_gameguid','game_guid'],
    ['option_gameid','game_id'],
    ['option_game_speed','fps'],
    ['option_legacy_json_parsing','legacy_json_parsing'],
    ['option_legacy_number_conversion','legacy_number_conversion'],
    ['option_legacy_other_behaviour','legacy_other_behaviour'],
    ['option_mips_for_3d_textures','mips_for_3d_textures'],
    ['option_remove_unused_assets','remove_unused_assets'],
    ['option_sci_usesci','use_source_control'],
    ['option_spine_licence','accepted_spine_license'],
    ['option_steam_app_id','steam_appid'],
    ['option_template_description','template_description'],
    ['option_template_icon','template_icon'],
    ['option_template_image','template_image'],
    ['option_window_colour','window_colour'],
    ['resourceType','internal_resource_type'],
    ['resourceVersion','internal_resource_version'],
];

export default class YYOptionsMain {
    project_format: string = '2024.13';
    
    yydata = {
        internal_gm_main_options:  'v3',
        internal_name:  'Main',
        internal_resource_type:  'GMMainOptions',
        internal_resource_version:  '2.0',
    
        name:  'Main',                          // name
        game_id:  '0',                          // option_gameid
        game_guid:  'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF', // option_gameguid
        
        template_description: '',             // option_template_description
        template_icon:  "${base_options_dir}/main/template_icon.png",    // option_template_icon
        template_image:  "${base_options_dir}/main/template_image.png",  // option_template_image
    
        uses_source_control:  false,            // option_sci_usesci
        accepted_spine_license:  false,         // option_spine_licence
        mips_for_3d_textures:  false,           // option_mips_for_3d_textures
    
        draw_colour:  4294967295,               // option_draw_colour
        window_color:  0,                       // option_window_colour
    
        steam_appid:  '0',                      // option_steam_appid
        author:  '',                            // option_author
        fps:  60,                               // option_game_speed
        remove_unused_assets:  true,            // option_remove_unused_assets
        
        hide_audio_errors:  false,              // option_audio_error_behaviour
        collision_compatibility_mode:  false,   // option_collision_compatibility
        legacy_json_parsing:  false,            // option_legacy_json_parsing
        legacy_number_conversion:  false,       // option_legacy_number_conversion
        legacy_other_behaviour:  false,         // option_legacy_other_behaviour
        enable_array_copy_on_write:  false,     // option_copy_on_write_enabled
    }

    stringify() {
        return unsafe_stringify(key_list,this.yydata);
    }

    static parse(v: string) {
        const yy = new YYOptionsMain();
        unsafe_init(v,key_list,yy.yydata);
        return yy;
    }

    static list_options() {
        return key_list.map(v=>v[1]);
    }

    
    get(key: string) {
        return this.yydata[key as keyof YYOptionsMain["yydata"]];
    }

    set(key: string, value: string | number | boolean) {
        if (typeof(value) == typeof(this.yydata[key as keyof YYOptionsMain["yydata"]])) {
            // @ts-ignore
            this.yydata[key as keyof YYOptionsMain["yydata"]] = value;
        } else throw new Error(`invalid type ${typeof(value)} for field ${key}, expected ${typeof(this.yydata[key as keyof YYOptionsMain["yydata"]])}`)
    }
}