
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { OsuBeatmapSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = OsuBeatmapSDK.test()
    equal(testsdk instanceof OsuBeatmapSDK, true,
      'OsuBeatmapSDK.test() must return a client synchronously')
  })

})
