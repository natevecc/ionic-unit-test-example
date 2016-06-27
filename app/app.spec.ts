import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from "@angular/core/testing"

import { MyApp } from "./app"

// inject MyApp before each test loading it's dependencies
beforeEachProviders(() => [MyApp])

describe("MyApp", () => {

  it("initialises with root page", inject([MyApp], (myApp: MyApp) => {
    expect(myApp.rootPage).not.toBeNull()
  }))
})
