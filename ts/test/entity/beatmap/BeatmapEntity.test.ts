

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


describe('BeatmapEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when OSU_BEATMAP_TEST_LIVE=TRUE.
  afterEach(liveDelay('OSU_BEATMAP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = OsuBeatmapSDK.test()
    const ent = testsdk.Beatmap()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.OSU_BEATMAP_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'beatmap.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"approved_date":{"a":true,"fo":"date-time","h":"Approved Date","n":"approved_date","r":false,"sh":"Date when beatmap was approved/ranked","t":"`$STRING`","key$":"approved_date","index$":0},"ar":{"a":true,"fo":"float","h":"Ar","n":"ar","r":false,"sh":"Approach rate","t":"`$NUMBER`","key$":"ar","index$":1},"artist":{"a":true,"h":"Artist","n":"artist","r":false,"sh":"Song artist","t":"`$STRING`","key$":"artist","index$":2},"beatmapset_id":{"a":true,"h":"Beatmapset Id","n":"beatmapset_id","r":false,"sh":"Beatmap set ID","t":"`$INTEGER`","key$":"beatmapset_id","index$":3},"bpm":{"a":true,"fo":"float","h":"Bpm","n":"bpm","r":false,"sh":"Beats per minute","t":"`$NUMBER`","key$":"bpm","index$":4},"creator":{"a":true,"h":"Creator","n":"creator","r":false,"sh":"Beatmap creator username","t":"`$STRING`","key$":"creator","index$":5},"cs":{"a":true,"fo":"float","h":"Cs","n":"cs","r":false,"sh":"Circle size","t":"`$NUMBER`","key$":"cs","index$":6},"difficulty_rating":{"a":true,"fo":"float","h":"Difficulty Rating","n":"difficulty_rating","r":false,"sh":"Star rating","t":"`$NUMBER`","key$":"difficulty_rating","index$":7},"favourite_count":{"a":true,"h":"Favourite Count","n":"favourite_count","r":false,"sh":"Number of favorites","t":"`$INTEGER`","key$":"favourite_count","index$":8},"hp":{"a":true,"fo":"float","h":"Hp","n":"hp","r":false,"sh":"HP drain","t":"`$NUMBER`","key$":"hp","index$":9},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Beatmap ID","t":"`$INTEGER`","key$":"id","index$":10},"last_updated":{"a":true,"fo":"date-time","h":"Last Updated","n":"last_updated","r":false,"sh":"Last update date","t":"`$STRING`","key$":"last_updated","index$":11},"length":{"a":true,"h":"Length","n":"length","r":false,"sh":"Song length in seconds","t":"`$INTEGER`","key$":"length","index$":12},"max_combo":{"a":true,"h":"Max Combo","n":"max_combo","r":false,"sh":"Maximum combo","t":"`$INTEGER`","key$":"max_combo","index$":13},"mode":{"a":true,"h":"Mode","n":"mode","r":false,"sh":"Game mode (0=osu!, 1=Taiko, 2=Catch, 3=Mania)","t":"`$INTEGER`","key$":"mode","index$":14},"od":{"a":true,"fo":"float","h":"Od","n":"od","r":false,"sh":"Overall difficulty","t":"`$NUMBER`","key$":"od","index$":15},"playcount":{"a":true,"h":"Playcount","n":"playcount","r":false,"sh":"Total play count","t":"`$INTEGER`","key$":"playcount","index$":16},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"Beatmap status (ranked, qualified, loved, etc.)","t":"`$STRING`","key$":"status","index$":17},"title":{"a":true,"h":"Title","n":"title","r":false,"sh":"Song title","t":"`$STRING`","key$":"title","index$":18},"version":{"a":true,"h":"Version","n":"version","r":false,"sh":"Difficulty name","t":"`$STRING`","key$":"version","index$":19}},"id":{"field":"id","name":"id"},"name":"beatmap","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /beatmaps/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/beatmaps/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"beatmaps"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"beatmap","name__orig":"beatmap","Name":"Beatmap","name_":"beatmap","name-":"beatmap","NAME":"BEATMAP","index$":0}, {"active":true,"entity":"beatmap","key$":"BasicBeatmapFlow","kind":"basic","name":"BasicBeatmapFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"beatmap_ref01","srcdatavar":"beatmap_ref01_data","suffix":"_dt0"},"m":{"id":"beatmap01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-beatmap_ref01"}}],"index$":0}]}, 'Beatmap', {"GET /beatmaps/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"Beatmap ID","required":true,"schema":{"type":"integer"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let beatmap_ref01_data = Object.values(setup.data.existing.beatmap)[0] as any

    // LOAD
    const beatmap_ref01_ent = client.Beatmap()
    const beatmap_ref01_match_dt0: any = {}
    beatmap_ref01_match_dt0.id = beatmap_ref01_data.id
    const beatmap_ref01_data_dt0 = (await beatmap_ref01_ent.load(beatmap_ref01_match_dt0)).data()
    assert(beatmap_ref01_data_dt0.id === beatmap_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/beatmap/BeatmapTestData.json')

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
    ['beatmap01','beatmap02','beatmap03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'OSU_BEATMAP_TEST_BEATMAP_ENTID': idmap,
    'OSU_BEATMAP_TEST_LIVE': 'FALSE',
    'OSU_BEATMAP_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['OSU_BEATMAP_TEST_BEATMAP_ENTID']

  const live = 'TRUE' === env.OSU_BEATMAP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['OSU_BEATMAP_TEST_BEATMAP_ENTID']
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
  
