'use strict'

import { listenAndServe } from 'https://deno.land/std/http/mod.ts'

const body = 'Hello World\n'
const options = { port: 3000 }

listenAndServe(options, req => {
  req.respond({ body })
})
