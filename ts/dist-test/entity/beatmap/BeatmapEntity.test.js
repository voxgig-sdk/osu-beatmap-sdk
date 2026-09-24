"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('BeatmapEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when OSU_BEATMAP_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('OSU_BEATMAP_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.OsuBeatmapSDK.test();
        const ent = testsdk.Beatmap();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.OSU_BEATMAP_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'beatmap.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "approved_date": { "a": true, "fo": "date-time", "h": "Approved Date", "n": "approved_date", "r": false, "sh": "Date when beatmap was approved/ranked", "t": "`$STRING`", "key$": "approved_date", "index$": 0 }, "ar": { "a": true, "fo": "float", "h": "Ar", "n": "ar", "r": false, "sh": "Approach rate", "t": "`$NUMBER`", "key$": "ar", "index$": 1 }, "artist": { "a": true, "h": "Artist", "n": "artist", "r": false, "sh": "Song artist", "t": "`$STRING`", "key$": "artist", "index$": 2 }, "beatmapset_id": { "a": true, "h": "Beatmapset Id", "n": "beatmapset_id", "r": false, "sh": "Beatmap set ID", "t": "`$INTEGER`", "key$": "beatmapset_id", "index$": 3 }, "bpm": { "a": true, "fo": "float", "h": "Bpm", "n": "bpm", "r": false, "sh": "Beats per minute", "t": "`$NUMBER`", "key$": "bpm", "index$": 4 }, "creator": { "a": true, "h": "Creator", "n": "creator", "r": false, "sh": "Beatmap creator username", "t": "`$STRING`", "key$": "creator", "index$": 5 }, "cs": { "a": true, "fo": "float", "h": "Cs", "n": "cs", "r": false, "sh": "Circle size", "t": "`$NUMBER`", "key$": "cs", "index$": 6 }, "difficulty_rating": { "a": true, "fo": "float", "h": "Difficulty Rating", "n": "difficulty_rating", "r": false, "sh": "Star rating", "t": "`$NUMBER`", "key$": "difficulty_rating", "index$": 7 }, "favourite_count": { "a": true, "h": "Favourite Count", "n": "favourite_count", "r": false, "sh": "Number of favorites", "t": "`$INTEGER`", "key$": "favourite_count", "index$": 8 }, "hp": { "a": true, "fo": "float", "h": "Hp", "n": "hp", "r": false, "sh": "HP drain", "t": "`$NUMBER`", "key$": "hp", "index$": 9 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Beatmap ID", "t": "`$INTEGER`", "key$": "id", "index$": 10 }, "last_updated": { "a": true, "fo": "date-time", "h": "Last Updated", "n": "last_updated", "r": false, "sh": "Last update date", "t": "`$STRING`", "key$": "last_updated", "index$": 11 }, "length": { "a": true, "h": "Length", "n": "length", "r": false, "sh": "Song length in seconds", "t": "`$INTEGER`", "key$": "length", "index$": 12 }, "max_combo": { "a": true, "h": "Max Combo", "n": "max_combo", "r": false, "sh": "Maximum combo", "t": "`$INTEGER`", "key$": "max_combo", "index$": 13 }, "mode": { "a": true, "h": "Mode", "n": "mode", "r": false, "sh": "Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania)", "t": "`$INTEGER`", "key$": "mode", "index$": 14 }, "od": { "a": true, "fo": "float", "h": "Od", "n": "od", "r": false, "sh": "Overall difficulty", "t": "`$NUMBER`", "key$": "od", "index$": 15 }, "playcount": { "a": true, "h": "Playcount", "n": "playcount", "r": false, "sh": "Total play count", "t": "`$INTEGER`", "key$": "playcount", "index$": 16 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "Beatmap status (ranked, qualified, loved, etc.)", "t": "`$STRING`", "key$": "status", "index$": 17 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "Song title", "t": "`$STRING`", "key$": "title", "index$": 18 }, "version": { "a": true, "h": "Version", "n": "version", "r": false, "sh": "Difficulty name", "t": "`$STRING`", "key$": "version", "index$": 19 } }, "id": { "field": "id", "name": "id" }, "name": "beatmap", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /beatmaps/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/beatmaps/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "beatmaps" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "beatmap", "name__orig": "beatmap", "Name": "Beatmap", "name_": "beatmap", "name-": "beatmap", "NAME": "BEATMAP", "index$": 0 }, { "active": true, "entity": "beatmap", "key$": "BasicBeatmapFlow", "kind": "basic", "name": "BasicBeatmapFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "beatmap_ref01", "srcdatavar": "beatmap_ref01_data", "suffix": "_dt0" }, "m": { "id": "beatmap01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-beatmap_ref01" } }], "index$": 0 }] }, 'Beatmap', { "GET /beatmaps/{id}": { "protocol": "http", "operationId": "getBeatmapById", "responses": { "200": { "description": "Successful response", "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "description": "Beatmap ID", "type": "integer", "key$": "id" }, "beatmapset_id": { "description": "Beatmap set ID", "type": "integer", "key$": "beatmapset_id" }, "title": { "description": "Song title", "type": "string", "key$": "title" }, "artist": { "description": "Song artist", "type": "string", "key$": "artist" }, "creator": { "description": "Beatmap creator username", "type": "string", "key$": "creator" }, "version": { "description": "Difficulty name", "type": "string", "key$": "version" }, "difficulty_rating": { "description": "Star rating", "format": "float", "type": "number", "key$": "difficulty_rating" }, "mode": { "description": "Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania)", "type": "integer", "key$": "mode" }, "status": { "description": "Beatmap status (ranked, qualified, loved, etc.)", "type": "string", "key$": "status" }, "bpm": { "description": "Beats per minute", "format": "float", "type": "number", "key$": "bpm" }, "length": { "description": "Song length in seconds", "type": "integer", "key$": "length" }, "max_combo": { "description": "Maximum combo", "type": "integer", "key$": "max_combo" }, "cs": { "description": "Circle size", "format": "float", "type": "number", "key$": "cs" }, "ar": { "description": "Approach rate", "format": "float", "type": "number", "key$": "ar" }, "od": { "description": "Overall difficulty", "format": "float", "type": "number", "key$": "od" }, "hp": { "description": "HP drain", "format": "float", "type": "number", "key$": "hp" }, "playcount": { "description": "Total play count", "type": "integer", "key$": "playcount" }, "favourite_count": { "description": "Number of favorites", "type": "integer", "key$": "favourite_count" }, "approved_date": { "description": "Date when beatmap was approved/ranked", "format": "date-time", "type": "string", "key$": "approved_date" }, "last_updated": { "description": "Last update date", "format": "date-time", "type": "string", "key$": "last_updated" } }, "x-ref": "#/components/schemas/Beatmap", "index$": 0 } } } }, "404": { "description": "Beatmap not found" }, "500": { "description": "Internal server error" } }, "parameters": [{ "name": "id", "in": "path", "description": "Beatmap ID", "required": true, "schema": { "type": "integer" }, "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let beatmap_ref01_data = Object.values(setup.data.existing.beatmap)[0];
        // LOAD
        const beatmap_ref01_ent = client.Beatmap();
        const beatmap_ref01_match_dt0 = {};
        beatmap_ref01_match_dt0.id = beatmap_ref01_data.id;
        const beatmap_ref01_data_dt0 = (await beatmap_ref01_ent.load(beatmap_ref01_match_dt0)).data();
        (0, node_assert_1.default)(beatmap_ref01_data_dt0.id === beatmap_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/beatmap/BeatmapTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.OsuBeatmapSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['beatmap01', 'beatmap02', 'beatmap03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'OSU_BEATMAP_TEST_BEATMAP_ENTID': idmap,
        'OSU_BEATMAP_TEST_LIVE': 'FALSE',
        'OSU_BEATMAP_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['OSU_BEATMAP_TEST_BEATMAP_ENTID'];
    const live = 'TRUE' === env.OSU_BEATMAP_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['OSU_BEATMAP_TEST_BEATMAP_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.OsuBeatmapSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.OSU_BEATMAP_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=BeatmapEntity.test.js.map