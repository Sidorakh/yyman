import {json_safe_value,unsafe_stringify,unsafe_init} from '../../util';

const key_list = [
    ['$GMOperaGXOptions', 'internal_gm_operagx_options'],
    ['%Name', 'internal_name'],
    ['name','name'],
    ["option_operagx_display_cursor","display_cursor"],
    ["option_operagx_editUrl","edit_url"],
    ["option_operagx_game_name","game_name"],
    ["option_operagx_guid","guid"],
    ["option_operagx_internalShareUrl","internal_share_url"],
    ["option_operagx_interpolate_pixels","interpolate_pixels"],
    ["option_operagx_mod_editUrl","mod_edit_url"],
    ["option_operagx_mod_game_name","mod_name"],
    ["option_operagx_mod_guid","mod_guid"],
    ["option_operagx_mod_internalShareUrl","mod_internal_share_url"],
    ["option_operagx_mod_next_version","mod_next_version"],
    ["option_operagx_mod_publicShareUrl","mod_public_share_url"],
    ["option_operagx_mod_team_id","mod_team_id"],
    ["option_operagx_mod_team_name","mod_team_name"],
    ["option_operagx_mod_version","mod_version"],
    ["option_operagx_next_version","next_version"],
    ["option_operagx_publicShareUrl","public_share_url"],
    ["option_operagx_scale","scale_type"],
    ["option_operagx_team_id","team_id"],
    ["option_operagx_team_name","team_name"],
    ["option_operagx_texture_page","texture_page_size"],
    ["option_operagx_version","version"],
    ['resourceType','internal_resource_type'],
    ['resourceVersion','internal_resource_version'],
];

export default class YYOptionsOperaGX {
    project_format: string = '2024.13';
    
    yydata = {
        internal_gm_operagx_options:  'v3',
        internal_name:  'Opera GX',
        internal_resource_type:  'GMOperaGXOptions',
        internal_resource_version:  '2.0',
        name:  'Opera GX',                           // name
    
        display_cursor:  true, // option_operagx_display_cursor
        edit_url:  '', // option_operagx_editUrl
        game_name:  'Created with GameMaker',   // option_operagx_game_name
        guid:  '',  // option_operagx_guid
        internal_share_url:  '', // option_operagx_internalShareUrl
        interpolate_pixels:  false, // option_operagx_interpolate_pixels
        mod_edit_url:  '',  // option_operagx_mod_editUrl
        mod_name:  'Created with GameMaker', // option_operagx_mod_game_name
        mod_guid:  '', // option_operagx_mod_guid
        mod_internal_share_url:  '', // option_operagx_mod_internalShareUrl
        mod_next_version:  '1.0.0.0', // option_operagx_mod_next_version
        mod_public_share_url:  '', // option_operagx_mod_publicShareUrl
        mod_team_id:  '', // option_operagx_mod_team_id
        mod_team_name:  '', // option_operagx_mod_team_name
        mod_version:  '1.0.0.0', // option_operagx_mod_version
        next_version:  '1.0.0.0', // option_operagx_next_version
        public_share_url:  '', // option_operagx_publicShareUrl
        scale_type:  0, // option_operagx_scale
        team_id:  '',   // option_operagx_team_id
        team_name:  '', // option_operagx_team_name
        texture_page_size:  '2048x2048', // option_operagx_texture_page
        version:  '1.0.0.0', // option_operagx_version
    }
    



    

    stringify() {
        return unsafe_stringify(key_list,this.yydata);
    }

    static parse(v: string) {
        const yy = new YYOptionsOperaGX();
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
        return this.yydata[key as keyof YYOptionsOperaGX["yydata"]]; 
    }

    set(key: string, value: string | number | boolean) {
        if (typeof(value) == typeof(this.yydata[key as keyof YYOptionsOperaGX["yydata"]])) {
            // @ts-ignore
            this.yydata[key as keyof YYOptionsOperaGX["yydata"]] = value;
        } else throw new Error(`invalid type ${typeof(value)} for field ${key}, expected ${typeof(this.yydata[key as keyof YYOptionsOperaGX["yydata"]])}`)
    }
}