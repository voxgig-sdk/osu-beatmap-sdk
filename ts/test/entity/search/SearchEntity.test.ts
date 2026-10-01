

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"approved_date":{"a":true,"fo":"date-time","h":"Approved Date","n":"approved_date","r":false,"sh":"Date when beatmap was approved/ranked","t":"`$STRING`","key$":"approved_date","index$":0},"ar":{"a":true,"fo":"float","h":"Ar","n":"ar","r":false,"sh":"Approach rate","t":"`$NUMBER`","key$":"ar","index$":1},"artist":{"a":true,"h":"Artist","n":"artist","r":false,"sh":"Song artist","t":"`$STRING`","key$":"artist","index$":2},"beatmapset_id":{"a":true,"h":"Beatmapset Id","n":"beatmapset_id","r":false,"sh":"Beatmap set ID","t":"`$INTEGER`","key$":"beatmapset_id","index$":3},"bpm":{"a":true,"fo":"float","h":"Bpm","n":"bpm","r":false,"sh":"Beats per minute","t":"`$NUMBER`","key$":"bpm","index$":4},"creator":{"a":true,"h":"Creator","n":"creator","r":false,"sh":"Beatmap creator username","t":"`$STRING`","key$":"creator","index$":5},"cs":{"a":true,"fo":"float","h":"Cs","n":"cs","r":false,"sh":"Circle size","t":"`$NUMBER`","key$":"cs","index$":6},"difficulty_rating":{"a":true,"fo":"float","h":"Difficulty Rating","n":"difficulty_rating","r":false,"sh":"Star rating","t":"`$NUMBER`","key$":"difficulty_rating","index$":7},"favourite_count":{"a":true,"h":"Favourite Count","n":"favourite_count","r":false,"sh":"Number of favorites","t":"`$INTEGER`","key$":"favourite_count","index$":8},"hp":{"a":true,"fo":"float","h":"Hp","n":"hp","r":false,"sh":"HP drain","t":"`$NUMBER`","key$":"hp","index$":9},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Beatmap ID","t":"`$INTEGER`","key$":"id","index$":10},"last_updated":{"a":true,"fo":"date-time","h":"Last Updated","n":"last_updated","r":false,"sh":"Last update date","t":"`$STRING`","key$":"last_updated","index$":11},"length":{"a":true,"h":"Length","n":"length","r":false,"sh":"Song length in seconds","t":"`$INTEGER`","key$":"length","index$":12},"max_combo":{"a":true,"h":"Max Combo","n":"max_combo","r":false,"sh":"Maximum combo","t":"`$INTEGER`","key$":"max_combo","index$":13},"mode":{"a":true,"h":"Mode","n":"mode","r":false,"sh":"Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania)","t":"`$INTEGER`","key$":"mode","index$":14},"od":{"a":true,"fo":"float","h":"Od","n":"od","r":false,"sh":"Overall difficulty","t":"`$NUMBER`","key$":"od","index$":15},"playcount":{"a":true,"h":"Playcount","n":"playcount","r":false,"sh":"Total play count","t":"`$INTEGER`","key$":"playcount","index$":16},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"Beatmap status (ranked, qualified, loved, etc.)","t":"`$STRING`","key$":"status","index$":17},"title":{"a":true,"h":"Title","n":"title","r":false,"sh":"Song title","t":"`$STRING`","key$":"title","index$":18},"version":{"a":true,"h":"Version","n":"version","r":false,"sh":"Difficulty name","t":"`$STRING`","key$":"version","index$":19}},"id":{"field":"id","name":"id"},"name":"search","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /search","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":50,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"mode","or":"mode","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/search","q":{"exist":["limit","mode","offset","q","status"]},"r":{},"s":[{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body.beatmaps`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"search","name__orig":"search","Name":"Search","name_":"search","name-":"search","NAME":"SEARCH","index$":2}, {"active":true,"entity":"search","key$":"BasicSearchFlow","kind":"basic","name":"BasicSearchFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"search_ref01"}}],"index$":0}]}, 'Search', {"GET /search":{"protocol":"http","parameters":[{"name":"q","in":"query","description":"Search query string","required":false,"schema":{"type":"string"},"index$":0},{"name":"mode","in":"query","description":"Game mode filter (0=osu!, 1=Taiko, 2=Catch, 3=Mania)","required":false,"schema":{"type":"integer","enum":[0,1,2,3]},"index$":1},{"name":"status","in":"query","description":"Beatmap status (ranked, qualified, loved, pending, etc.)","required":false,"schema":{"type":"string"},"index$":2},{"name":"offset","in":"query","description":"Pagination offset","required":false,"schema":{"type":"integer","default":0},"index$":3},{"name":"limit","in":"query","description":"Number of results to return","required":false,"schema":{"type":"integer","default":50,"maximum":100},"index$":4}]}})
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
  
