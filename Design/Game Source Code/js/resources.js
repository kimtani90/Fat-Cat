game.resources = [

    /* Graphics.
     * @example
     * { name: "example", type:"image", src: "data/img/example.png" },
     */
    { name: "title_screen",    type:"image",   src: "data/img/gui/title_screen.png"},
    { name: "level3",         type:"image",   src: "data/img/level3.png" },
    { name: "tileset",         type:"image",   src: "data/img/tileset.png" },
    { name: "background",      type:"image",   src: "data/img/background.png" },
    { name: "backgroundImage",      type:"image",   src: "data/img/backgroundImage.png" },
    { name: "clouds",          type:"image",   src: "data/img/clouds.png" },
    { name: "game_over1",      type:"image",   src: "data/img/gui/game_over1.jpg"},
    { name: "game_over2",      type:"image",   src: "data/img/gui/game_over2.png"},
    { name: "game_over_died",  type:"image",   src: "data/img/gui/you_died.jpg"},
    { name: "game_over_slow",  type:"image",   src: "data/img/gui/too_slow.jpg"},
    { name: "you_won",          type:"image",   src: "data/img/gui/you_won.jpg"},

    /* Maps.
     * @example
     * { name: "example01", type: "tmx", src: "data/map/example01.tmx" },
     * { name: "example01", type: "tmx", src: "data/map/example01.json" },
     */
    { name: "map1",            type: "tmx",    src: "data/map/map1.tmx" },
    { name: "map2",            type: "tmx",    src: "data/map/map2.json" },


    /* Tilesets.
     * @example
     * { name: "example01", type: "tsx", src: "data/map/example01.tsx" },
     * { name: "example01", type: "tsx", src: "data/map/example01.json" },
     */
    { name: "tileset",         type: "tsx",    src: "data/map/tileset.tsx" },
    { name: "level",         type: "tsx",    src: "data/map/level.tsx" },

    /* Background music.
     * @example
     * { name: "example_bgm", type: "audio", src: "data/bgm/" },
     */
    { name: "dst-gameforest",  type: "audio",  stream: true, src: "data/bgm/" },

    /* Sound effects.
     * @example
     * { name: "example_sfx", type: "audio", src: "data/sfx/" }
     */
    { name: "cling",           type: "audio",  src: "data/sfx/" },
    { name: "die",             type: "audio",  src: "data/sfx/" },
    { name: "enemykill",       type: "audio",  src: "data/sfx/" },
    { name: "jump",            type: "audio",  src: "data/sfx/" },


    /* Atlases
     * @example
     * { name: "example_tps", type: "json", src: "data/img/example_tps.json" },
     */
    // texturePacker
    { name: "texture",         type: "json",   src: "data/img/texture.json" },
    { name: "texture",         type: "image",  src: "data/img/texture.png" },
    { name: "UI_Assets",       type: "image",  src: "data/img/UI_Assets.png" },
    { name: "UI_Assets",       type: "json",   src: "data/img/UI_Assets.json" },

    /* Bitmap Font
    * @example
    * { name: "example_fnt", type: "image", src: "data/img/example_fnt.png" },
    * { name: "example_fnt", type: "binary", src: "data/img/example_fnt.fnt" },
    */
    { name: "PressStart2P", type:"image", src: "data/fnt/PressStart2P.png" },
    { name: "PressStart2P", type:"binary", src: "data/fnt/PressStart2P.fnt"}
];
