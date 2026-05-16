
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { OsuBeatmapSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await OsuBeatmapSDK.test()
    equal(null !== testsdk, true)
  })

})
