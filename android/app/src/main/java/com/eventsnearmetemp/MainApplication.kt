package com.eventsnearmetemp

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeApplicationEntryPoint.loadReactNative
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.soloader.SoLoader

class MainApplication : Application(), ReactApplication {

  override val reactHost: ReactHost by lazy {
    getDefaultReactHost(
      context = applicationContext,
      packageList =
        PackageList(this).packages.apply {
          // add manual packages here if needed
        },
    )
  }

  override fun onCreate() {
    super.onCreate()

    // ✅ REQUIRED for native modules stability (maps, etc.)
    SoLoader.init(this, false)

    loadReactNative(this)
  }
}