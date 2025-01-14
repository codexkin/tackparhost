(function (root, client) {
  if (typeof define === 'function' && define.amd) {
    define(['popsicle'], client)
  } else if (typeof exports === 'object') {
    module.exports = client(require('popsicle'))
  } else {
    root.WebhostClient = client(root.popsicle)
  }
})(this, function (popsicle) {
  var TEMPLATE_REGEXP = /\{([^\{\}]+)\}/g

  /**
   * @param  {String} string
   * @param  {Object} interpolate
   * @param  {Object} defaults
   * @return {String}
   */
  function template (string, interpolate, defaults) {
    defaults = defaults || {}
    interpolate = interpolate || {}

    return string.replace(TEMPLATE_REGEXP, function (match, key) {
      if (interpolate[key] != null) {
        return encodeURIComponent(interpolate[key])
      }

      if (defaults[key] != null) {
        return encodeURIComponent(defaults[key])
      }

      return ''
    })
  }

  /**
   * @param  {Object} dest
   * @param  {Object} ...source
   * @return {Object}
   */
  function extend (dest /*, ...source */) {
    for (var i = 1; i < arguments.length; i++) {
      for (var key in arguments[i]) {
        dest[key] = arguments[i][key]
      }
    }

    return dest
  }

  function handleRequest (client, path, method, body, options) {
    options = extend({}, client.options, options)

    var baseUri = template(options.baseUri, options.baseUriParameters)
    var hasBody = method !== 'GET' && method !== 'HEAD'
    var reqOpts = {}

    var reqBody = hasBody && body != null ? body : options.body
    var reqQuery = !hasBody && body != null ? body : options.query

    var reqOpts = {
      url: baseUri.replace(/\/$/, '') + path,
      method: method,
      headers: extend({}, options.headers),
      body: reqBody,
      query: typeof reqQuery === 'object' ? extend({}, reqQuery) : reqQuery
    }

    if (options.user && typeof options.user.sign === 'function') {
      options.user.sign(reqOpts)
    }

    return client.request(reqOpts)
  }

  function Resource0 (uri, client) {
    this._uri = uri
    this._client = client

    this.users = new Resource1(uri + '/users', client)
    this.nps = new Resource34(uri + '/nps', client)
    this.upgrade = new Resource35(uri + '/upgrade', client)
    this.emailforwards = new Resource38(uri + '/emailforwards', client)
    this.apps = new Resource40(uri + '/apps', client)
    this.archivedApps = new Resource97(uri + '/archived-apps', client)
    this.premiumApps = new Resource98(uri + '/premium-apps', client)
    this.hostingerPricing = new Resource100(uri + '/hostinger-pricing', client)
    this.types = new Resource101(uri + '/types', client)
    this.parkedDomains = new Resource102(uri + '/parked-domains', client)
    this.categories = new Resource108(uri + '/categories', client)
    this.zyro = new Resource109(uri + '/zyro', client)
    this.domains = new Resource110(uri + '/domains', client)
    this.addTranslation = new Resource115(uri + '/add-translation', client)
    this.store = new Resource116(uri + '/store', client)
    this.gamification = new Resource120(uri + '/gamification', client)
  }


  function Resource1 (uri, client) {
    this._uri = uri
    this._client = client

    this.goals = new Resource2(uri + '/goals', client)
    this.emailVerify = new Resource24(uri + '/email-verify', client)
    this.social = new Resource26(uri + '/social', client)
    this.passwordReset = new Resource29(uri + '/password-reset', client)
    this.socialLogin = new Resource31(uri + '/social-login', client)
    this.onboarding = new Resource33(uri + '/onboarding', client)
  }

  Resource1.prototype.userId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource4(uri, this._client)
  }

  function Resource2 (uri, client) {
    this._uri = uri
    this._client = client

    this.list = new Resource3(uri + '/list', client)
  }


  function Resource3 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource3.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource3.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource3.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource4 (uri, client) {
    this._uri = uri
    this._client = client

    this.passwordReset = new Resource5(uri + '/password-reset', client)
    this.phoneNumber = new Resource6(uri + '/phone-number', client)
    this.email = new Resource7(uri + '/email', client)
    this.resendConfirmation = new Resource8(uri + '/resend-confirmation', client)
    this.survey = new Resource9(uri + '/survey', client)
    this.surveyQuestions = new Resource10(uri + '/survey-questions', client)
    this.async = new Resource11(uri + '/async', client)
    this.zyroBuilder = new Resource14(uri + '/zyro-builder', client)
    this.getGlobalNotifications = new Resource15(uri + '/get-global-notifications', client)
    this.globalNotificationsClick = new Resource16(uri + '/global-notifications-click', client)
    this.globalNotificationsAllRead = new Resource17(uri + '/global-notifications-all-read', client)
    this.getNotifications = new Resource18(uri + '/get-notifications', client)
    this.updateShowNotification = new Resource19(uri + '/update-show-notification', client)
    this.addNotification = new Resource20(uri + '/add-notification', client)
    this.websitePauses = new Resource21(uri + '/website-pauses', client)
    this.nextTempSleep = new Resource22(uri + '/next-temp-sleep', client)
    this.phoneVerified = new Resource23(uri + '/phone-verified', client)
  }


  Resource4.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource4.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource4.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  Resource4.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource5 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource5.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource5.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource6 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource6.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource6.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource7 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource7.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource7.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource8 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource8.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource8.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource9 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource9.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource9.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource10 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource10.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource10.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource11 (uri, client) {
    this._uri = uri
    this._client = client

    this.messages = new Resource12(uri + '/messages', client)
  }


  function Resource12 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource12.prototype.messageId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource13(uri, this._client)
  }

  Resource12.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource12.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource13 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource13.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource13.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource14 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource14.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource14.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource15 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource15.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource15.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource16 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource16.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource16.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource17 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource17.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource17.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource18 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource18.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource18.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource19 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource19.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource19.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource20 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource20.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource20.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource21 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource21.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource21.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource22 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource22.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource22.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource23 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource23.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource23.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource24 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource24.prototype.token = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource25(uri, this._client)
  }

  Resource24.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  function Resource25 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource25.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource26 (uri, client) {
    this._uri = uri
    this._client = client

    this.unlink = new Resource27(uri + '/unlink', client)
  }


  function Resource27 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource27.prototype.provider = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource28(uri, this._client)
  }

  function Resource28 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource28.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource28.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource29 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource29.prototype.token = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource30(uri, this._client)
  }

  Resource29.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  function Resource30 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource30.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource30.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource31 (uri, client) {
    this._uri = uri
    this._client = client

    this.unlink = new Resource32(uri + '/unlink', client)
  }


  function Resource32 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource32.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource32.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource33 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource33.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource34 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource34.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource35 (uri, client) {
    this._uri = uri
    this._client = client

    this.hostinger = new Resource36(uri + '/hostinger', client)
    this.trial = new Resource37(uri + '/trial', client)
  }


  function Resource36 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource36.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource37 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource37.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource38 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource38.prototype.id = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource39(uri, this._client)
  }

  Resource38.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource38.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource39 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource39.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource39.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource40 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource40.prototype.appId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource41(uri, this._client)
  }

  Resource40.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource40.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource40.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource41 (uri, client) {
    this._uri = uri
    this._client = client

    this.reset = new Resource42(uri + '/reset', client)
    this.password = new Resource43(uri + '/password', client)
    this.type = new Resource44(uri + '/type', client)
    this.category = new Resource45(uri + '/category', client)
    this.adult = new Resource46(uri + '/adult', client)
    this.displayerrors = new Resource47(uri + '/displayerrors', client)
    this.sendmail = new Resource48(uri + '/sendmail', client)
    this.changestate = new Resource49(uri + '/changestate', client)
    this.ftp = new Resource50(uri + '/ftp', client)
    this.repair = new Resource51(uri + '/repair', client)
    this.restore = new Resource52(uri + '/restore', client)
    this.mining = new Resource53(uri + '/mining', client)
    this.files = new Resource54(uri + '/files', client)
    this.settings = new Resource56(uri + '/settings', client)
    this.databases = new Resource57(uri + '/databases', client)
    this.cronjobs = new Resource62(uri + '/cronjobs', client)
    this.statistics = new Resource64(uri + '/statistics', client)
    this.backend = new Resource74(uri + '/backend', client)
    this.redirects = new Resource75(uri + '/redirects', client)
    this.security = new Resource77(uri + '/security', client)
    this.domain = new Resource87(uri + '/domain', client)
    this.zyro = new Resource88(uri + '/zyro', client)
    this.logs = new Resource89(uri + '/logs', client)
    this.buildStatus = new Resource90(uri + '/build_status', client)
    this.install = new Resource91(uri + '/install', client)
    this.filemanager = new Resource92(uri + '/filemanager', client)
    this.software = new Resource94(uri + '/software', client)
    this.appPause = new Resource95(uri + '/app-pause', client)
    this.updateAppPause = new Resource96(uri + '/update-app-pause', client)
  }


  Resource41.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource41.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource41.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource42 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource42.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource42.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource43 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource43.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource43.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource44 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource44.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource44.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource45 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource45.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource45.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource46 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource46.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource46.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource47 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource47.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource47.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource48 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource48.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource48.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource49 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource49.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource49.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource50 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource50.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource50.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource51 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource51.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource51.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource52 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource52.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource52.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource53 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource53.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource53.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource54 (uri, client) {
    this._uri = uri
    this._client = client

    this.permissions = new Resource55(uri + '/permissions', client)
  }


  Resource54.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource54.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource54.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource55 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource55.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource55.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource56 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource56.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource57 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource57.prototype.databaseId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource58(uri, this._client)
  }

  Resource57.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource57.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource57.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource58 (uri, client) {
    this._uri = uri
    this._client = client

    this.changePassword = new Resource59(uri + '/change-password', client)
    this.usage = new Resource60(uri + '/usage', client)
    this.login = new Resource61(uri + '/login', client)
  }


  Resource58.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource58.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource59 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource59.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource59.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource60 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource60.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource60.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource61 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource61.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource61.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource62 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource62.prototype.cronId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource63(uri, this._client)
  }

  Resource62.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource62.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource62.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource63 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource63.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource63.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource64 (uri, client) {
    this._uri = uri
    this._client = client

    this.all = new Resource65(uri + '/all', client)
    this.bandwidth = new Resource66(uri + '/bandwidth', client)
    this.responseCodes = new Resource67(uri + '/response-codes', client)
    this.responseTime = new Resource68(uri + '/response-time', client)
    this.diskQuota = new Resource69(uri + '/disk-quota', client)
    this.topStatistics = new Resource70(uri + '/top-statistics', client)
    this.moreStatistics = new Resource71(uri + '/more-statistics', client)
    this.sendmail = new Resource72(uri + '/sendmail', client)
    this.monthlyBandwidth = new Resource73(uri + '/monthly-bandwidth', client)
  }


  function Resource65 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource65.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource65.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource66 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource66.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource66.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource67 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource67.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource67.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource68 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource68.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource68.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource69 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource69.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource69.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource70 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource70.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource70.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource71 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource71.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource71.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource72 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource72.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource72.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource73 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource73.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource73.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource74 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource74.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource74.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource74.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource75 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource75.prototype.redirectId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource76(uri, this._client)
  }

  Resource75.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource75.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource75.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource76 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource76.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource76.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource77 (uri, client) {
    this._uri = uri
    this._client = client

    this.passwordProtectedDirectories = new Resource78(uri + '/password-protected-directories', client)
    this.hotlinkProtection = new Resource80(uri + '/hotlink-protection', client)
    this.ip = new Resource82(uri + '/ip', client)
  }


  function Resource78 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource78.prototype.dirId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource79(uri, this._client)
  }

  Resource78.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource78.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource78.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource79 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource79.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource79.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource80 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource80.prototype.hostlinkId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource81(uri, this._client)
  }

  Resource80.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource80.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource80.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource81 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource81.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource81.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource82 (uri, client) {
    this._uri = uri
    this._client = client

    this.whitelist = new Resource83(uri + '/whitelist', client)
    this.blacklist = new Resource85(uri + '/blacklist', client)
  }


  function Resource83 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource83.prototype.whitelistId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource84(uri, this._client)
  }

  Resource83.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource83.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource83.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource84 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource84.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource84.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource85 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource85.prototype.blacklistId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource86(uri, this._client)
  }

  Resource85.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource85.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource85.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource86 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource86.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource86.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource87 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource87.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource87.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource87.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource88 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource88.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource88.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource89 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource89.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource89.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource90 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource90.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource90.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource91 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource91.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource91.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource92 (uri, client) {
    this._uri = uri
    this._client = client

    this.wasaccessed = new Resource93(uri + '/wasaccessed', client)
  }


  function Resource93 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource93.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource93.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource94 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource94.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource95 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource95.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource96 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource96.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource97 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource97.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource97.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource98 (uri, client) {
    this._uri = uri
    this._client = client

    this.autologin = new Resource99(uri + '/autologin', client)
  }


  Resource98.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource98.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource99 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource99.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource99.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource100 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource100.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource100.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource101 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource101.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource101.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource102 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource102.prototype.appName = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource103(uri, this._client)
  }
  Resource102.prototype.domainId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource105(uri, this._client)
  }

  Resource102.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource102.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  Resource102.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource103 (uri, client) {
    this._uri = uri
    this._client = client

    this.has3RdParty = new Resource104(uri + '/has-3rd-party', client)
  }


  function Resource104 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource104.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource105 (uri, client) {
    this._uri = uri
    this._client = client

    this.status = new Resource106(uri + '/status', client)
    this.records = new Resource107(uri + '/records', client)
  }


  Resource105.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource105.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  function Resource106 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource106.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource107 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource107.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource108 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource108.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource108.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource109 (uri, client) {
    this._uri = uri
    this._client = client

  }


  function Resource110 (uri, client) {
    this._uri = uri
    this._client = client

    this.search = new Resource111(uri + '/search', client)
    this.check = new Resource112(uri + '/check', client)
    this.buy = new Resource113(uri + '/buy', client)
    this.invoice = new Resource114(uri + '/invoice', client)
  }


  function Resource111 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource111.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource111.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource112 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource112.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource112.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource113 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource113.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource113.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource114 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource114.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  Resource114.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource115 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource115.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  function Resource116 (uri, client) {
    this._uri = uri
    this._client = client

    this.announcements = new Resource117(uri + '/announcements', client)
    this.latestAnnouncement = new Resource119(uri + '/latest-announcement', client)
  }


  Resource116.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource117 (uri, client) {
    this._uri = uri
    this._client = client

  }

  Resource117.prototype.userId = function (/* ...args */) {
    var uri = this._uri + template('/{0}', arguments, [undefined])

    return new Resource118(uri, this._client)
  }

  Resource117.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource118 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource118.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  function Resource119 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource119.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  function Resource120 (uri, client) {
    this._uri = uri
    this._client = client

  }


  Resource120.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }

  function CustomResource (uri, client) {
    this._uri = uri
    this._client = client
  }

  CustomResource.prototype.acl = function (body, options) {
    return handleRequest(this._client, this._uri, 'ACL', body, options)
  }
  CustomResource.prototype.bind = function (body, options) {
    return handleRequest(this._client, this._uri, 'BIND', body, options)
  }
  CustomResource.prototype.checkout = function (body, options) {
    return handleRequest(this._client, this._uri, 'CHECKOUT', body, options)
  }
  CustomResource.prototype.connect = function (body, options) {
    return handleRequest(this._client, this._uri, 'CONNECT', body, options)
  }
  CustomResource.prototype.copy = function (body, options) {
    return handleRequest(this._client, this._uri, 'COPY', body, options)
  }
  CustomResource.prototype.delete = function (body, options) {
    return handleRequest(this._client, this._uri, 'DELETE', body, options)
  }
  CustomResource.prototype.get = function (body, options) {
    return handleRequest(this._client, this._uri, 'GET', body, options)
  }
  CustomResource.prototype.head = function (body, options) {
    return handleRequest(this._client, this._uri, 'HEAD', body, options)
  }
  CustomResource.prototype.link = function (body, options) {
    return handleRequest(this._client, this._uri, 'LINK', body, options)
  }
  CustomResource.prototype.lock = function (body, options) {
    return handleRequest(this._client, this._uri, 'LOCK', body, options)
  }
  CustomResource.prototype.mSearch = function (body, options) {
    return handleRequest(this._client, this._uri, 'M-SEARCH', body, options)
  }
  CustomResource.prototype.merge = function (body, options) {
    return handleRequest(this._client, this._uri, 'MERGE', body, options)
  }
  CustomResource.prototype.mkactivity = function (body, options) {
    return handleRequest(this._client, this._uri, 'MKACTIVITY', body, options)
  }
  CustomResource.prototype.mkcalendar = function (body, options) {
    return handleRequest(this._client, this._uri, 'MKCALENDAR', body, options)
  }
  CustomResource.prototype.mkcol = function (body, options) {
    return handleRequest(this._client, this._uri, 'MKCOL', body, options)
  }
  CustomResource.prototype.move = function (body, options) {
    return handleRequest(this._client, this._uri, 'MOVE', body, options)
  }
  CustomResource.prototype.notify = function (body, options) {
    return handleRequest(this._client, this._uri, 'NOTIFY', body, options)
  }
  CustomResource.prototype.options = function (body, options) {
    return handleRequest(this._client, this._uri, 'OPTIONS', body, options)
  }
  CustomResource.prototype.patch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PATCH', body, options)
  }
  CustomResource.prototype.post = function (body, options) {
    return handleRequest(this._client, this._uri, 'POST', body, options)
  }
  CustomResource.prototype.propfind = function (body, options) {
    return handleRequest(this._client, this._uri, 'PROPFIND', body, options)
  }
  CustomResource.prototype.proppatch = function (body, options) {
    return handleRequest(this._client, this._uri, 'PROPPATCH', body, options)
  }
  CustomResource.prototype.purge = function (body, options) {
    return handleRequest(this._client, this._uri, 'PURGE', body, options)
  }
  CustomResource.prototype.put = function (body, options) {
    return handleRequest(this._client, this._uri, 'PUT', body, options)
  }
  CustomResource.prototype.rebind = function (body, options) {
    return handleRequest(this._client, this._uri, 'REBIND', body, options)
  }
  CustomResource.prototype.report = function (body, options) {
    return handleRequest(this._client, this._uri, 'REPORT', body, options)
  }
  CustomResource.prototype.search = function (body, options) {
    return handleRequest(this._client, this._uri, 'SEARCH', body, options)
  }
  CustomResource.prototype.source = function (body, options) {
    return handleRequest(this._client, this._uri, 'SOURCE', body, options)
  }
  CustomResource.prototype.subscribe = function (body, options) {
    return handleRequest(this._client, this._uri, 'SUBSCRIBE', body, options)
  }
  CustomResource.prototype.trace = function (body, options) {
    return handleRequest(this._client, this._uri, 'TRACE', body, options)
  }
  CustomResource.prototype.unbind = function (body, options) {
    return handleRequest(this._client, this._uri, 'UNBIND', body, options)
  }
  CustomResource.prototype.unlink = function (body, options) {
    return handleRequest(this._client, this._uri, 'UNLINK', body, options)
  }
  CustomResource.prototype.unlock = function (body, options) {
    return handleRequest(this._client, this._uri, 'UNLOCK', body, options)
  }
  CustomResource.prototype.unsubscribe = function (body, options) {
    return handleRequest(this._client, this._uri, 'UNSUBSCRIBE', body, options)
  }

  function Client (options) {
    this.options = extend({
      baseUri: 'https://hostinger-000-rest-mock.herokuapp.com',
      baseUriParameters: {}
    }, options)

    this.resources = new Resource0('', this)
  }

  Client.prototype.resource = function (route, parameters) {
    var path = '/' + template(route, parameters).replace(/^\//, '')

    return new CustomResource(path, this)
  }

  Client.prototype.request = popsicle
  Client.prototype.form = Client.form = popsicle.form
  Client.prototype.version  = undefined


  return Client
})
