
import { Context } from './Context'


class OsuBeatmapError extends Error {

  isOsuBeatmapError = true

  sdk = 'OsuBeatmap'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  OsuBeatmapError
}

