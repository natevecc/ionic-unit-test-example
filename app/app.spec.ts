import {
  beforeEachProviders,
  beforeEach,
  describe,
  expect,
  it,
  inject
} from "@angular/core/testing"

import { MyApp } from "./app"
import { Platform } from "ionic-angular"

// reset MyApp before each test loading it's dependencies
beforeEachProviders(() => [MyApp])

describe("MyApp", () => {

  it("initialises with root page", inject([MyApp], (myApp: MyApp) => {
    expect(myApp.rootPage).not.toBeNull()
  }))

  it("calls Platform#ready", inject([Platform], (platform: Platform) => {
    spyOn(platform, "ready").and.callThrough()
    let app = new MyApp(platform)
    expect(platform.ready).toHaveBeenCalled()
  }))
})
