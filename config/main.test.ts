import { setBaseTestProviders } from "@angular/core/testing"
import {
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS,
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS
} from "@angular/platform-browser-dynamic/testing"
import { ionicProviders } from "ionic-angular"

setBaseTestProviders(
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  [
    TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS,
    ionicProviders()
  ]
)
