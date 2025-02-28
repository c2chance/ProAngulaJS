// Generated by CoffeeScript 1.7.1
(function() {
  var JSON;if(!JSON){JSON={}}(function(){'use strict';function f(n){return n<10?'0'+n:n}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key)}if(typeof rep==='function'){value=rep.call(holder,key,value)}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null'}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null'}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v)}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v}}if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' '}}else if(typeof space==='string'){indent=space}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify')}return str('',{'':value})}}if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j}throw new SyntaxError('JSON.parse')}}}());;
  var P, Req, e, impressionData, logData, passbackData, passbackLoadData, passbackNextData, passbackTimeoutData, placementData, requestData, root, zerkEvent,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.zerk_base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    decode: function(e) {
      var a, f, i, n, o, r, s, t, u;
      t = "";
      n = void 0;
      r = void 0;
      i = void 0;
      s = void 0;
      o = void 0;
      u = void 0;
      a = void 0;
      f = 0;
      e = e.replace(/[^A-Za-z0-9\-_\=]/g, "");
      while (f < e.length) {
        s = this._keyStr.indexOf(e.charAt(f++));
        o = this._keyStr.indexOf(e.charAt(f++));
        u = this._keyStr.indexOf(e.charAt(f++));
        a = this._keyStr.indexOf(e.charAt(f++));
        n = s << 2 | o >> 4;
        r = (o & 15) << 4 | u >> 2;
        i = (u & 3) << 6 | a;
        t = t + String.fromCharCode(n);
        if (u !== 64) {
          t = t + String.fromCharCode(r);
        }
        if (a !== 64) {
          t = t + String.fromCharCode(i);
        }
      }
      t = zerk_base64._utf8_decode(t);
      return t.replace(/\0/g, '');
    },
    _utf8_decode: function(e) {
      var c1, c2, c3, n, r, t;
      t = "";
      n = 0;
      r = c1 = c2 = 0;
      while (n < e.length) {
        r = e.charCodeAt(n);
        if (r < 128) {
          t += String.fromCharCode(r);
          n++;
        } else if (r > 191 && r < 224) {
          c2 = e.charCodeAt(n + 1);
          t += String.fromCharCode((r & 31) << 6 | c2 & 63);
          n += 2;
        } else {
          c2 = e.charCodeAt(n + 1);
          c3 = e.charCodeAt(n + 2);
          t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          n += 3;
        }
      }
      return t;
    }
  };

  root.zerk_generateUUID = function() {
    var d, uuid;
    d = new Date().getTime();
    uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r;
      r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
    });
    return uuid;
  };

  root.zerk_getQueryVariable = function(url, variable) {
    var i, pair, query, vars;
    query = url.split("?")[1];
    vars = query.split("&");
    i = 0;
    while (i < vars.length) {
      pair = vars[i].split("=");
      if (pair[0] === variable) {
        return pair[1];
      }
      i++;
    }
    return false;
  };

  root.adosRun = function() {
    while (window.ados.run !== void 0 && window.ados.run.length > 0) {
      window.ados.run[0].call();
      ados.run.splice(0, 1);
    }
    return window.ados.run.push = function(code) {
      return code.call();
    };
  };

  root.cssLoad = function(css) {
    var s, stylenode;
    s = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(s);
    if (!!window.ActiveXObject) {
      return document.styleSheets[document.styleSheets.length - 1].cssText = css;
    } else {
      stylenode = document.createTextNode(css);
      return s.appendChild(stylenode);
    }
  };

  root.cssLinkLoad = function(url) {
    var tag;
    tag = document.createElement('link');
    tag.rel = 'stylesheet';
    tag.href = url;
    return document.getElementsByTagName('head')[0].appendChild(tag);
  };

  root.azHtmlLoad = function(div, content) {
    var adzerkDiv;
    adzerkDiv = document.getElementById(div);
    return adzerkDiv.innerHTML = content;
  };

  root.azScriptSRCLoad = function(div, script) {
    var adzerkDiv, newScript;
    newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.src = script;
    adzerkDiv = document.getElementById(div);
    return adzerkDiv.appendChild(newScript);
  };

  root.azScriptExtensionLoad = function(url) {
    var head, newScript;
    newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = url;
    head = document.getElementsByTagName('head')[0];
    return head.appendChild(newScript);
  };

  root.azRegisterExtension = function(name, func) {
    var args, _i, _len, _ref;
    if (root.ados.extensions == null) {
      root.ados.extensions = {};
    }
    root.ados.extensions[name] = func;
    if ((root.ados.extensionCalls != null) && (root.ados.extensionCalls[name] != null)) {
      _ref = root.ados.extensionCalls[name];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        args = _ref[_i];
        func.apply(root, args);
      }
      return delete root.ados.extensionCalls[name];
    }
  };

  root.azInitExtension = function() {
    var args, name;
    name = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if ((root.ados.extensions != null) && (root.ados.extensions[name] != null)) {
      return root.ados.extensions[name].apply(root, args);
    } else {
      if (root.ados.extensionCalls == null) {
        root.ados.extensionCalls = {};
      }
      if (root.ados.extensionCalls[name] == null) {
        root.ados.extensionCalls[name] = [];
      }
      return root.ados.extensionCalls[name].push(args);
    }
  };

  root.ados_async_load = function(src) {
    var s, z;
    z = document.createElement("script");
    z.type = "text/javascript";
    z.async = true;
    z.src = src;
    s = document.getElementsByTagName("script")[0];
    return s.parentNode.insertBefore(z, s);
  };

  root.azScriptInlineLoad = function(div, script, interval) {
    var adzerkDiv, newScript;
    newScript = document.createElement("script");
    newScript.type = "text/javascript";
    if (/msie/.test(navigator.userAgent.toLowerCase())) {
      newScript.text = script;
    } else {
      newScript.innerHTML = script;
    }
    adzerkDiv = document.getElementById(div);
    return adzerkDiv.appendChild(newScript);
  };

  root.azLoad = function(div, code) {
    var adzerkDiv;
    adzerkDiv = document.getElementById(div);
    if (adzerkDiv) {
      return code();
    } else {
      return setTimeout((function() {
        return azLoad(div, code);
      }), 100);
    }
  };

  root.zshow = function(div) {
    if (zItems[div]) {
      return document.write(zItems[div]);
    }
  };

  root.ados_addInlinePlacement = function(accountId, siteId, size) {
    var chars, i, ran, randomName;
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    randomName = "";
    i = 0;
    while (i < 12) {
      ran = Math.floor(Math.random() * chars.length);
      randomName += chars.substring(ran, ran + 1);
      i++;
    }
    return ados_addPlacement(accountId, siteId, randomName, size);
  };

  root.ados_add_placement = function(accountId, siteId, name, size) {
    return ados_addPlacement(accountId, siteId, name, size);
  };

  root.ados_addPlacement = function(accountId, siteId, name, size) {
    var placement;
    placement = new P();
    placement.A = accountId;
    placement.S = siteId;
    placement.D = name;
    if (!isNaN(size)) {
      placement.AT = size;
    } else {
      placement.ATA = size;
    }
    ados_addPlacementObject(placement);
    return placement;
  };

  root.ados_loadDiv = function(name) {
    if (!window.ados.isAsync) {
      return zshow(name);
    }
  };

  root.ados_setKeywords = function(keywords) {
    var keywordCookie;
    keywordCookie = (' ' + document.cookie).match(new RegExp('[; ]ados_keyword_cookie=([^\\s;]*)'));
    if (!!keywordCookie) {
      return window.ados.keywords = unescape(keywordCookie[1]) + ',' + keywords;
    } else {
      return window.ados.keywords = keywords;
    }
  };

  root.ados_setKeywordCookie = function(keywords) {
    var domain, expires;
    expires = new Date();
    domain = window.ados.domain || ".adzerk.net";
    expires.setTime(new Date().getTime() + 3600000 * 24 * 30);
    return document.cookie = 'ados_keyword_cookie=' + escape(keywords) + ';expires=' + expires.toGMTString() + 'domain=' + domain + ';path=\/;';
  };

  root.ados_setNoTrack = function() {
    return window.ados.isNoTrack = true;
  };

  root.ados_setDomain = function(domain) {
    return window.ados.domain = domain;
  };

  root.ados_setWriteResults = function() {
    return window.ados.writeResults = true;
  };

  root.ados_setPassbackTimeout = function(timeout) {
    ados_log('setting timeout' + timeout);
    return window.ados.passbackTimeout = timeout;
  };

  root.ados_log = function(text) {
    window.ados.fire('log', new logData(text));
    if (window.console) {
      return console.info(new Date().getTime() + ': ' + text);
    }
  };

  root.ados_addPlacementObject = function(placement) {
    if (!window.ados.placements) {
      window.ados.placements = new Array();
    }
    return window.ados.placements.push(placement);
  };

  root.ados_refresh = function(placement, seconds, again) {
    var div;
    ados_log('triggering refresh of:' + placement.D);
    ados.fire('refresh', null);
    div = document.getElementById(placement.D);
    while (div.hasChildNodes()) {
      div.removeChild(div.lastChild);
    }
    ados_addPlacementObject(placement);
    ados_load();
    if (again) {
      return setTimeout((function() {
        return ados_refresh(placement, seconds, true);
      }), seconds * 1000);
    }
  };

  root.ados_loadResults = function(results) {
    var i, len, _results;
    len = results.length;
    i = 0;
    _results = [];
    while (i < len) {
      adosResults[results[i].divName] = results[i];
      eval(results[i].adCode);
      _results.push(i++);
    }
    return _results;
  };

  Req = function() {
    this.Placements = window.ados.placements;
    window.ados.placements = new Array();
    this.Keywords = encodeURIComponent(ados.keywords);
    this.Referrer = encodeURIComponent(document.referrer);
    this.IsAsync = window.ados.isAsync;
    this.IsNoTrack = window.ados.isNoTrack;
    this.WriteInline = window.ados.writeInline;
    this.WriteResults = window.ados.writeResults;
    return this;
  };

  placementData = function(placement) {
    var a, _i, _len, _ref;
    this.accountId = placement.A;
    this.siteId = placement.S;
    this.name = placement.D;
    if (placement.Z) {
      this.zoneId = placement.Z;
    }
    if (placement.CampaignId) {
      this.campaignId = placement.CampaignId;
    }
    if (placement.FlightId) {
      this.flightId = placement.FlightId;
    }
    if (placement.FlightCreativeId) {
      this.adId = placement.FlightCreativeId;
    }
    if (placement.properties) {
      this.properties = placement.properties;
    }
    this.sizes = [];
    if (placement.AT) {
      this.sizes.push(placement.AT);
    }
    if (placement.ATA) {
      _ref = placement.ATA;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        a = _ref[_i];
        this.sizes.push(a);
      }
    }
    return this;
  };

  requestData = function(req) {
    var p, _i, _len, _ref;
    this.placements = [];
    _ref = req.Placements;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      p = _ref[_i];
      this.placements.push(new placementData(p));
    }
    if (req.Keywords) {
      this.keywords = req.Keywords;
    }
    if (req.Referrer) {
      this.referrer = req.Referrer;
    }
    return this;
  };

  logData = function(message) {
    this.message = message;
    return this;
  };

  passbackData = function(div, passback) {
    this.flightId = passback.FlightId;
    this.veriPixel = passback.VeriPixel;
    this.script = passback.Script;
    this.div = div;
    return this;
  };

  passbackLoadData = function(div, passbacks) {
    var p, _i, _len;
    this.passbacks = [];
    for (_i = 0, _len = passbacks.length; _i < _len; _i++) {
      p = passbacks[_i];
      this.passbacks.push(new passbackData(div, p));
    }
    return this;
  };

  passbackNextData = function(div, flightId, nextFlightId) {
    this.div = div;
    this.flightId = flightId;
    this.nextFlightId = nextFlightId;
    return this;
  };

  passbackTimeoutData = function(div, flightId) {
    this.div = div;
    return this.flightId = flightId;
  };

  impressionData = function(div, url) {
    var shim;
    this.div = div;
    this.veriPixel = url;
    shim = zerk_getQueryVariable(url, "e");
    this.e = shim;
    this.shim = JSON.parse(zerk_base64.decode(shim));
    return this;
  };

  zerkEvent = function(e, args) {
    this.name = e;
    this.sessionId = window.ados.sessionId;
    if (args) {
      this.data = args;
    }
    return this;
  };

  P = function() {
    return {
      setZone: function() {
        var zoneids;
        zoneids = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        this.Z = zoneids;
        return this;
      },
      setClickUrl: function(clickurl) {
        this.ClickUrl = encodeURIComponent(clickurl);
        return this;
      },
      setRedirectUrl: function(redirectUrl) {
        this.RedirectUrl = encodeURIComponent(redirectUrl);
        return this;
      },
      setCampaignId: function(campaignId) {
        this.CampaignId = campaignId;
        return this;
      },
      setFlightId: function(flightId) {
        this.FlightId = flightId;
        return this;
      },
      setFlightCreativeId: function(flightCreativeId) {
        this.FlightCreativeId = flightCreativeId;
        return this;
      },
      setProperty: function(key, value) {
        if (this.Properties == null) {
          this.Properties = {};
        }
        this.Properties[key] = value;
        return this;
      },
      setProperties: function(dict) {
        var key, value;
        if (this.Properties == null) {
          this.Properties = {};
        }
        for (key in dict) {
          if (!__hasProp.call(dict, key)) continue;
          value = dict[key];
          this.Properties[key] = value;
        }
        return this;
      },
      setContentKeys: function(dict) {
        var key, value;
        if (this.ContentKeys == null) {
          this.ContentKeys = {};
        }
        for (key in dict) {
          if (!__hasProp.call(dict, key)) continue;
          value = dict[key];
          this.ContentKeys[key] = value;
        }
        return this;
      },
      enableDynamicSiteSelection: function() {
        this.DynamicSiteOverride = document.domain.replace(/^www\./, '');
        return this;
      },
      setRefresh: function(seconds) {
        var placement;
        if (seconds == null) {
          seconds = 10;
        }
        if (isNaN(seconds) || seconds < 1) {
          seconds = 10;
        }
        placement = this;
        setTimeout((function() {
          return ados_refresh(placement, seconds, true);
        }), seconds * 1000);
        return this;
      },
      loadInline: function() {
        ados.isAsync = false;
        ados.writeInline = true;
        window.divName = this.D;
        ados_load(this.D);
        return this;
      }
    };
  };

  root.ados_load = function(loadDiv) {
    var data, domain, keywordCookie, proto, prototype_toJSON, req, src;
    domain = window.ados.domain || "engine.adzerk.net";
    if (ados.isAsync !== false) {
      window.ados.isAsync = true;
    }
    keywordCookie = (' ' + document.cookie).match(new RegExp('[; ]ados_keyword_cookie=([^\\s;]*)'));
    if (!!keywordCookie) {
      window.ados.keywords = unescape(keywordCookie[1]);
    }
    proto = "http";
    if (document.location.protocol === "https:") {
      proto = "https";
    }
    src = proto + "://" + domain + "/ados?t=" + new Date().getTime() + "&request=";
    req = new Req();
    data = new requestData(req);
    ados.fire('requestStart', data);
    prototype_toJSON = (window.Prototype ? Array.prototype.toJSON : null);
    if (prototype_toJSON) {
      delete Array.prototype.toJSON;
    }
    if (req.Placements.length !== 0) {
      if (!window.ados.isAsync) {
        document.write("<script type=\"text/javascript\" src=\"" + src + encodeURI(JSON.stringify(req)) + "\"></script>");
      } else {
        ados_async_load(src + JSON.stringify(req));
      }
    }
    if (prototype_toJSON) {
      return Array.prototype.toJSON = prototype_toJSON;
    }
  };

  root.ados_loadInline = function(accountId, siteId, adtype) {
    var chars, i, ran, randomName;
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    randomName = "";
    i = 0;
    while (i < 12) {
      ran = Math.floor(Math.random() * chars.length);
      randomName += chars.substring(ran, ran + 1);
      i++;
    }
    document.write("<div id=\"" + randomName + "\"></div>");
    return ados_add_placement(accountId, siteId, randomName, adtype);
  };

  root.ados_loadPassback = function(div, passbacks) {
    if (!window.ados.passbacks) {
      window.ados.passbacks = {};
    }
    if (!window.ados.currentPassback) {
      window.ados.currentPassback = {};
    }
    if (!window.ados.counted) {
      window.ados.counted = {};
    }
    window.ados.fire('passbackLoad', new passbackLoadData(div, passbacks));
    window.ados.passbacks[div] = passbacks;
    window.ados.counted[div] = false;
    return ados_execPassback(div, passbacks[0]);
  };

  root.ados_passback_next = function(div, id) {
    var chain, flight, idx, next, _i, _ref;
    chain = window.ados.passbacks[div];
    for (idx = _i = _ref = chain.length - 1; _ref <= 0 ? _i <= 0 : _i >= 0; idx = _ref <= 0 ? ++_i : --_i) {
      flight = chain[idx];
      if (flight.FlightId === id) {
        next = idx + 1;
        if (next === window.ados.passbacks[div].length) {
          return null;
        }
        window.ados.fire('passbackNext', new passbackNextData(div, id, window.ados.passbacks[div][next]));
        return window.ados.passbacks[div][next];
      }
    }
    throw new Error("Flight not found - make sure the network is returning the correct passback");
  };

  root.ados_passback_last = function(div, ids) {
    var chain, flight, id, idx, next, potentialFlights, _i, _j, _len, _ref;
    chain = window.ados.passbacks[div];
    potentialFlights = [];
    for (_i = 0, _len = ids.length; _i < _len; _i++) {
      id = ids[_i];
      for (idx = _j = _ref = chain.length - 1; _ref <= 0 ? _j <= 0 : _j >= 0; idx = _ref <= 0 ? ++_j : --_j) {
        flight = chain[idx];
        if (flight.FlightId === id) {
          next = idx + 1;
          if (next < window.ados.passbacks[div].length) {
            potentialFlights.push(next);
          }
        }
      }
    }
    if (potentialFlights.length === 0) {
      throw new Error("No eligible flight found to passback to");
    }
    window.ados.fire('passbackNext', new passbackNextData(div, id, next));
    return window.ados.passbacks[div][Math.max.apply(Math, potentialFlights)];
  };

  root.ados_findPassback = function(div, id) {
    var chain, flight, idx, _i, _ref;
    chain = window.ados.passbacks[div];
    for (idx = _i = _ref = chain.length - 1; _ref <= 0 ? _i <= 0 : _i >= 0; idx = _ref <= 0 ? ++_i : --_i) {
      flight = chain[idx];
      if (flight.FlightId === id) {
        return flight;
      }
    }
    throw new Error("Flight not found - make sure the network is returning the correct passback");
  };

  root.azk_clearframe = function(div, flightId) {
    var ifrm;
    ifrm = document.getElementById("ados_frame_" + div + "_" + flightId);
    if (ifrm !== null) {
      return ifrm.parentNode.removeChild(ifrm);
    }
  };

  root.ados_passback = function(div, flightId) {
    var next;
    ados_log('received passback for div:' + div + ' and flightId:' + flightId);
    next = ados_passback_next(div, flightId);
    ados_execPassback(div, next);
    return azk_clearframe(div, flightId);
  };

  root.azk_passback = function(div, flightIds) {
    var last;
    ados_log('received passback for div:' + div + ' and flightIds:' + flightIds);
    last = ados_passback_last(div, flightIds);
    ados_execPassback(div, last);
    return azk_clearframe(div, last);
  };

  root.ados_execPassback = function(div, passback) {
    var timeoutScript;
    ados_log('loading flight:' + passback.FlightId);
    window.ados.currentPassback[div] = passback.FlightId;
    window.ados.fire('passbackExec', new passbackData(div, passback));
    timeoutScript = '';
    if (!window.ados.isAsync) {
      timeoutScript = 'setTimeout(function() { ados_timeoutExpired("' + div + '", ' + passback.FlightId + ') }, 2500)';
    }
    return eval(passback.Script + timeoutScript);
  };

  root.ados_timeoutExpired = function(div, flightId) {
    if (window.ados.currentPassback && window.ados.currentPassback[div] === flightId && window.ados.counted[div] === false) {
      window.ados.fire('passbackTimeout', new passbackTimeoutData(div, flightId));
      ados_log('time to passback expired for div:' + div + ' and flightid:' + flightId);
      return ados_passbackFilled(div, flightId);
    }
  };

  root.ados_frameLoaded = function(div, flightId) {
    var ifrm, timeout;
    ifrm = document.getElementById("ados_frame_" + div + "_" + flightId);
    if (ifrm !== null && ifrm.readyState !== "complete" && ifrm.readyState !== void 0) {
      return setTimeout((function() {
        return ados_frameLoaded(div, flightId);
      }), 100);
    } else if (window.ados.currentPassback && window.ados.currentPassback[div] === flightId) {
      timeout = window.ados.passbackTimeout || 400;
      return setTimeout((function() {
        return ados_passbackFilled(div, flightId);
      }), timeout);
    } else if (window.ados.currentPassback && window.ados.currentPassback[div]) {
      return azk_clearframe(div, flightId);
    }
  };

  root.ados_passbackFilled = function(div, flightId) {
    var flight;
    if (window.ados.currentPassback && window.ados.currentPassback[div] === flightId) {
      ados_log('flight is loaded for div: ' + div + ' and flightId:' + flightId);
      flight = ados_findPassback(div, flightId);
      if (flight.counted === void 0 && window.ados.counted[div] === false) {
        flight.counted = window.ados.counted[div] = true;
        return ados_passbackWritePixel(div, flight.VeriPixel, flightId);
      }
    } else {
      return azk_clearframe(div, flightId);
    }
  };

  root.ados_passbackWritePixel = function(div, url, flightId) {
    var adzerkDiv, pixel;
    adzerkDiv = document.getElementById(div);
    if (adzerkDiv !== null) {
      ados_log('writing pixel for div: ' + div + ' and flightId:' + flightId);
      pixel = document.createElement('img');
      pixel.setAttribute("height", "0px");
      pixel.setAttribute("width", "0px");
      pixel.setAttribute("border", "0");
      pixel.setAttribute("style", "position:absolute;");
      pixel.setAttribute("src", url);
      adzerkDiv.appendChild(pixel);
      return ados.fire('ImpressionCounted', new impressionData(div, url));
    }
  };

  root.ados_writePixel = function(div, url) {
    var adzerkDiv, pixel;
    adzerkDiv = document.getElementById(div);
    if (adzerkDiv !== null) {
      pixel = document.createElement('img');
      pixel.setAttribute("height", "0px");
      pixel.setAttribute("width", "0px");
      pixel.setAttribute("border", "0");
      pixel.setAttribute("style", "position:absolute;");
      pixel.setAttribute("src", url);
      adzerkDiv.appendChild(pixel);
      return ados.fire('ImpressionCounted', new impressionData(div, url));
    }
  };

  root.ados_writeGenericPixel = function(div, url) {
    var adzerkDiv, pixel;
    adzerkDiv = document.getElementById(div);
    if (adzerkDiv !== null) {
      pixel = document.createElement('img');
      pixel.setAttribute("height", "0px");
      pixel.setAttribute("width", "0px");
      pixel.setAttribute("border", "0");
      pixel.setAttribute("style", "position:absolute;");
      pixel.setAttribute("src", url);
      return adzerkDiv.appendChild(pixel);
    }
  };

  root.ados_loadFIframe = function(div, content, flightid, height, width) {
    var adzerkDiv, doc, ifrm;
    adzerkDiv = document.getElementById(div);
    ifrm = document.createElement("iframe");
    ifrm.id = "ados_frame_" + div + "_" + flightid;
    ifrm.frameBorder = 0;
    ifrm.scrolling = "no";
    ifrm.noresize = "noresize";
    ifrm.marginheight = 0;
    ifrm.marginwidth = 0;
    if (height !== 0) {
      ifrm.height = height;
    }
    if (width !== 0) {
      ifrm.width = width;
    }
    adzerkDiv.appendChild(ifrm);
    if (ifrm.attachEvent) {
      ifrm.attachEvent('onload', function() {
        return ados_frameLoaded(div, flightid);
      });
    } else {
      ifrm.onload = function() {
        return ados_frameLoaded(div, flightid);
      };
    }
    content = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\"><html><head><style>div,iframe { top: 0; position:absolute; }</style></head><body style=\"margin:0px;padding:0px;\"><script type=\"text/javascript\">var divName = \"" + div + "\";var inFIF=true;var inDapIF = true;</script>" + content + "</body></html>";
    if (/msie/.test(navigator.userAgent.toLowerCase()) || window.opera) {
      ifrm.contentWindow.contents = content;
      return ifrm.src = "javascript:window[\"contents\"]";
    } else {
      doc = ifrm.contentDocument;
      doc.open();
      doc.write(content);
      doc.close();
      return ifrm;
    }
  };

  root.ados_passback_receiveMessage = function(evt) {
    var adosWindow;
    if (!evt.data.flightId) {
      return;
    }
    adosWindow = evt.source.parent;
    while (!adosWindow.divName && adosWindow !== adosWindow.parent) {
      adosWindow = adosWindow.parent;
    }
    if (!adosWindow.divName) {
      return;
    }
    ados_log('passback recieved through postMessage for Div:' + adosWindow.divName + ' FlightId:' + evt.data.flightId);
    return ados_passback(adosWindow.divName, evt.data.flightId);
  };

  window.ados = window.ados || {};

  window.ados.events = window.ados.events || {};

  window.ados.run = window.ados.run || [];

  window.zItems = window.zItems || [];

  window.adosResults = window.adosResults || {};

  window.ados.sessionId = zerk_generateUUID();

  window.ados.on = function(e, fn) {
    window.ados.events[e] = window.ados.events[e] || [];
    return window.ados.events[e].push(fn);
  };

  window.ados.fire = function(e, args) {
    var zevent, _i, _len, _ref, _results;
    if (window.ados.events[e] != null) {
      zevent = new zerkEvent(e, args);
      _ref = window.ados.events[e];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        e = _ref[_i];
        _results.push(e.call(null, zevent));
      }
      return _results;
    }
  };

  try {
    if (window.top.attachEvent) {
      window.top.attachEvent("message", ados_passback_receiveMessage, false);
    } else if (window.top.addEventListener) {
      window.top.addEventListener("message", ados_passback_receiveMessage, false);
    }
  } catch (_error) {
    e = _error;
  }

  root.adosRun();

  setTimeout((function() {
    return root.adosRun();
  }), 1000);

  window.ados.fire('load', null);

}).call(this);
