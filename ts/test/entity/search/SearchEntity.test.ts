

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { OsuBeatmapSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('SearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OSU_BEATMAP_TEST_LIVE=TRUE.
  afterEach(liveDelay('OSU_BEATMAP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OsuBeatmapSDK.test()
    const ent = testsdk.Search()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OSU_BEATMAP_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"approved_date","req":false,"short":"Date when beatmap was approved/ranked","type":"`$STRING`","index$":0},{"active":true,"format":"float","name":"ar","req":false,"short":"Approach rate","type":"`$NUMBER`","index$":1},{"active":true,"name":"artist","req":false,"short":"Song artist","type":"`$STRING`","index$":2},{"active":true,"name":"beatmapset_id","req":false,"short":"Beatmap set ID","type":"`$INTEGER`","index$":3},{"active":true,"format":"float","name":"bpm","req":false,"short":"Beats per minute","type":"`$NUMBER`","index$":4},{"active":true,"name":"creator","req":false,"short":"Beatmap creator username","type":"`$STRING`","index$":5},{"active":true,"format":"float","name":"cs","req":false,"short":"Circle size","type":"`$NUMBER`","index$":6},{"active":true,"format":"float","name":"difficulty_rating","req":false,"short":"Star rating","type":"`$NUMBER`","index$":7},{"active":true,"name":"favourite_count","req":false,"short":"Number of favorites","type":"`$INTEGER`","index$":8},{"active":true,"format":"float","name":"hp","req":false,"short":"HP drain","type":"`$NUMBER`","index$":9},{"active":true,"name":"id","req":false,"short":"Beatmap ID","type":"`$INTEGER`","index$":10},{"active":true,"format":"date-time","name":"last_updated","req":false,"short":"Last update date","type":"`$STRING`","index$":11},{"active":true,"name":"length","req":false,"short":"Song length in seconds","type":"`$INTEGER`","index$":12},{"active":true,"name":"max_combo","req":false,"short":"Maximum combo","type":"`$INTEGER`","index$":13},{"active":true,"name":"mode","req":false,"short":"Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania)","type":"`$INTEGER`","index$":14},{"active":true,"format":"float","name":"od","req":false,"short":"Overall difficulty","type":"`$NUMBER`","index$":15},{"active":true,"name":"playcount","req":false,"short":"Total play count","type":"`$INTEGER`","index$":16},{"active":true,"name":"status","req":false,"short":"Beatmap status (ranked, qualified, loved, etc.)","type":"`$STRING`","index$":17},{"active":true,"name":"title","req":false,"short":"Song title","type":"`$STRING`","index$":18},{"active":true,"name":"version","req":false,"short":"Difficulty name","type":"`$STRING`","index$":19}],"id":{"field":"id","name":"id"},"name":"search","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":50,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"mode","orig":"mode","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":0,"kind":"query","name":"offset","orig":"offset","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"query","name":"q","orig":"q","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"status","orig":"status","reqd":false,"type":"`$STRING`","index$":4}]},"contract":{"id":"GET /search","json":"{\"operationId\":\"searchBeatmaps\",\"parameters\":[{\"description\":\"Search query string\",\"in\":\"query\",\"name\":\"q\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Game mode filter (0=osu!, 1=Taiko, 2=Catch, 3=Mania)\",\"in\":\"query\",\"name\":\"mode\",\"required\":false,\"schema\":{\"enum\":[0,1,2,3],\"type\":\"integer\"}},{\"description\":\"Beatmap status (ranked, qualified, loved, pending, etc.)\",\"in\":\"query\",\"name\":\"status\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Pagination offset\",\"in\":\"query\",\"name\":\"offset\",\"required\":false,\"schema\":{\"default\":0,\"type\":\"integer\"}},{\"description\":\"Number of results to return\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":50,\"maximum\":100,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"beatmaps\":{\"items\":{\"properties\":{\"approved_date\":{\"description\":\"Date when beatmap was approved/ranked\",\"format\":\"date-time\",\"type\":\"string\"},\"ar\":{\"description\":\"Approach rate\",\"format\":\"float\",\"type\":\"number\"},\"artist\":{\"description\":\"Song artist\",\"type\":\"string\"},\"beatmapset_id\":{\"description\":\"Beatmap set ID\",\"type\":\"integer\"},\"bpm\":{\"description\":\"Beats per minute\",\"format\":\"float\",\"type\":\"number\"},\"creator\":{\"description\":\"Beatmap creator username\",\"type\":\"string\"},\"cs\":{\"description\":\"Circle size\",\"format\":\"float\",\"type\":\"number\"},\"difficulty_rating\":{\"description\":\"Star rating\",\"format\":\"float\",\"type\":\"number\"},\"favourite_count\":{\"description\":\"Number of favorites\",\"type\":\"integer\"},\"hp\":{\"description\":\"HP drain\",\"format\":\"float\",\"type\":\"number\"},\"id\":{\"description\":\"Beatmap ID\",\"type\":\"integer\"},\"last_updated\":{\"description\":\"Last update date\",\"format\":\"date-time\",\"type\":\"string\"},\"length\":{\"description\":\"Song length in seconds\",\"type\":\"integer\"},\"max_combo\":{\"description\":\"Maximum combo\",\"type\":\"integer\"},\"mode\":{\"description\":\"Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania)\",\"type\":\"integer\"},\"od\":{\"description\":\"Overall difficulty\",\"format\":\"float\",\"type\":\"number\"},\"playcount\":{\"description\":\"Total play count\",\"type\":\"integer\"},\"status\":{\"description\":\"Beatmap status (ranked, qualified, loved, etc.)\",\"type\":\"string\"},\"title\":{\"description\":\"Song title\",\"type\":\"string\"},\"version\":{\"description\":\"Difficulty name\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"total\":{\"description\":\"Total number of results\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful search response\"},\"400\":{\"description\":\"Bad request - invalid parameters\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/search","segments":[{"lit":"search"}],"select":{"exist":["limit","mode","offset","q","status"]},"transform":{"req":"`reqdata`","res":"`body.beatmaps`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"search","name__orig":"search","Name":"Search","name_":"search","name-":"search","NAME":"SEARCH","index$":2}, {"active":true,"entity":"search","key$":"BasicSearchFlow","kind":"basic","name":"BasicSearchFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"search_ref01"}}],"index$":0}]}, 'Search')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let search_ref01_data = Object.values(setup.data.existing.search)[0] as any

    // LIST
    const search_ref01_ent = client.Search()
    const search_ref01_match: any = {}

    const search_ref01_list = (await search_ref01_ent.list(search_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/search/SearchTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = OsuBeatmapSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['search01','search02','search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OSU_BEATMAP_TEST_SEARCH_ENTID': idmap,
    'OSU_BEATMAP_TEST_LIVE': 'FALSE',
    'OSU_BEATMAP_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['OSU_BEATMAP_TEST_SEARCH_ENTID']

  const live = 'TRUE' === env.OSU_BEATMAP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OSU_BEATMAP_TEST_SEARCH_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new OsuBeatmapSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
