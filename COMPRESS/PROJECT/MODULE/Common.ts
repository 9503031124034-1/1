"Copyright By Presidents"
var 
current = 0
export function copiesThing(thing) {
  return JSON.parse(JSON.stringify(thing))
}
export function makesAutoIndex() {
  return current++
}
export function makesRandomCaseUp() {
  var b = makesRandomNumber(0, 25), t = 65 + b, r = String.fromCharCode(t)
  return r
}
export function makesRandomCaseDown() {
  var b = makesRandomNumber(0, 25), t = 97 + b, r = String.fromCharCode(t)
  return r
}
export function makesRandomNumber(min, max) {
  var _max = max + 1, a = Math.random() * (_max - min) + min, b = Math.floor(a)
  return b
}
export function getsRandomOne(things) {
  var a = things, b = makesRandomNumber(0, things.length - 1), c = a[b]
  return c
}
export function areUpperCase(text) {
  var a, b
  if (!!text) {
    a = text.charCodeAt(0)
    if (a >= 65 && a <= 90) {
      b = true
    } else {
      b = false
    }
  }
  return b
}
export function areLowerCase(text) {
  var a, b
  if (!!text) {
    a = text.charCodeAt(0)
    if (a >= 97 && a <= 122) {
      b = true
    } else {
      b = false
    }
  } else {
    b = false 
  }
  return b
}
export function makesCaseUp(text) {
  var a, b, c, d, e
  if (!!text) {
    a = text
    e = ""
    for (b of a) {
      if (areLowerCase(b)) {
        c = b.charCodeAt(0)
        d = String.fromCharCode(c - 32)
      } else {
        d = b
      }
      e += d
    }
  }
  return e
}
export function makesCaseDown(text) {
  var a, b, c, d, e
  if (!!text) {
    a = text
    e = ""
    for (b of a) {
      if (areUpperCase(b)) {
        c = b.charCodeAt(0)
        d = String.fromCharCode(c + 32)
      } else {
        d = b
      }
      e += d
    }
  }
  return e
}
export function areNumeric(text: string) {
  var a = text.charCodeAt(0), b
  if (a >= 48 && a <= 57) {
    b = true
  } else {
    b = 0
  }
  return b
}
export function splitsTextByString(text: string, str: string, goward: boolean = true) {
  var a, b, c, d
  if (goward) {
    a = text.indexOf(str)
    if (a == -1) {
      b = undefined
      c = undefined
    } else {
      b = text.substring(0, a) 
      c = text.substring(a + str.length)
    }
  } else {
    a = text.lastIndexOf(str) 
    if (a == -1) {
      b = undefined
      c = undefined
    } else {
      b = text.substring(0, a) 
      c = text.substring(a + str.length)
    }
  }
  if (b == undefined && c == undefined) {
    d = undefined
  } else {
    d = [b, c, a]
  }
  return d
}
export function splitsTextByIndex(text, index = 0) {
  var a, b
  a = text.substring(0, index), b = text.substring(index)
  return [a, b]
}
export function makesPin(type:
   "case up" |
   "case up and case down" |
   "case up and case down and number" |
   "case up and number" |
   "case down and number"
  , length = 12, mask) {
  var a = "", b = type, c = length, f = mask, g = [], h = 0, i = ""
  if (b == "case up") {
    for (; h < c; h++) {
      g = [], g.push(makesRandomCaseUp()), i = getsRandomOne(g), a+= i
    }
  } 
  else if (b == "case up and case down") {
    for (; h < c; h++) {
      g = [], g.push(makesRandomCaseUp()), g.push(makesRandomCaseDown()), i = getsRandomOne(g), a+= i
    }
  }
  else if (b == "case up and case down and number") {
    for (; h < c; h++) {
      g = [], g.push(makesRandomCaseUp()), g.push(makesRandomCaseDown()), g.push(makesRandomNumber(0, 9)), i = getsRandomOne(g), a+= i
    }
  }
  else if (b == "case up and number") {
    for (; h < c; h++) {
      g = [], g.push(makesRandomCaseUp()), g.push(makesRandomNumber(0, 9)), i = getsRandomOne(g), a+= i
    }
  }
  else if (b == "case down and number") {
    for (; h < c; h++) {
      g = [], g.push(makesRandomCaseDown()), g.push(makesRandomNumber(0, 9)), i = getsRandomOne(g), a+= i
    }
  }
  if (!!f) {
    a = masksText(f, a)
  }
  return a
}
/**
 * 
 * @param mask use #
 * @param text 
 * @returns 
 */
export function masksText(mask: string, text: string) {
  var a, b, c
  a = ""
  c = 0
  for (b of mask) {
    if (b == "#") {
      a += text[c++]
    } else {
      a += b
    }
  }
  return a
}
export function capitalizesText(text) {
  var a, b
  if (!!text) {
    b = text
    if (areLowerCase(b)) {
      a = makesCaseUp(b.charAt(0)) + b.slice(1)
    } else {
      a = b
    }
  }
  return a
}
export function decapitalizesText(text) {
  var a, b
  if (!!text) {
    b = text
    if (areUpperCase(b)) {
      a = makesCaseDown(b.charAt(0)) + b.slice(1)  
    } else {
      a = b
    }
  }
  return a
}
export function capitalizesTextByDash(text) {
  var a, b, c: boolean, d, e, f
  if (!!text) {
    a = text
    c = false
    e = ""
    f = capitalizesText(a)
    for (b of f) {
      if (c) {
        if (areLowerCase(b)) {
          d = makesCaseUp(b)
        } else {
          d = b
        }
        c = false
      } else {
        if (b == "-") {
          c = true
          d = ""
        } else {
          d = b
        }
      }
      e += d
    }
  }
  return e
}
export function dashesTextByCaseUp(text) {
  var a, b, c, d, e, f
  if (!!text) {
    a = text
    b = decapitalizesText(a)
    f = ""
    for (c of b) {
      if (areUpperCase(c)) {
        d = makesCaseDown(c)
        e = "-" + d
      } else {
        e = c
      }
      f += e
    }
  }
  return f
}
export function getLastThing(things) {
  var a = things, b
  if (a.length > 0) {
    b = a[a.length-1]
  } else {
    b = undefined
  }
  return b
}
export function getFirstThing(things) {
  var a = things, b = a[0]
  return b
}
export function confirmsType(target) {
  var a, b
  a = Array.isArray(target)
  b = typeof target
  if (a == true) {
    a = "array"
  } else if (target == null) {
    a = null
  } else if (target == undefined) {
    a = undefined
  } else if (typeof target == "object") {
    if (typeof target.getFullYear === "function") {
      a = "date"
    } else {
      a = "object"
    }
  } else {
    a = b
  }
  return a
}
export function flatsObject(target) {
  var a, b, c, d, e, f, g, h, i
  e = confirmsType(target)
  if (e == null) {
    a = null
  } else if (e == undefined) {
    a = undefined
  } else if (e == "array") {
    a = target
  } else if (e == "object") {
    a = {}
    for (c in target) {
      f = target[c]
      g = confirmsType(f)
      if (g == null) {
        a[c] = null
      } else if (g == undefined) {
        a[c] = undefined
      } else if (g == "array") {
        a[c] = f
      } else if (g == "object") {
        h = flatsObject(f)
        for (i in h) {
          a[c + "." + i] = h[i]
        }
      } else if (g == "date") {
        a[c] = f
      } else {
        a[c] = f
      }
    }
  } else if (g == "date") {
    a = target
  } else {
    a = target
  }
  return a
}
export function xor(one, two) {
  var a
  if (one == true) {
    if (two == true) {
      a = 0
    } else {
      a = 1
    }
  } else if (one == false) {
    if (two == true) {
      a = 1
    } else {
      a = 0
    }
  }
  return a
}
export function beforeFlatsObject(object) {
  var t = {}, r = object, b = Object.entries(r), c
  for (c of b)
    setsObjectValue(t, c[0], c[1])
  return t
}
export function comparesTypeAndType(v, w) {
  var a, b=v, c=w, d=typeof b, f=typeof c
  if (d == "string" && f == "string") { a = b.localeCompare(c) }
  else if (d== "number" && f== "number") {a = b - c}
  else if (d== "boolean" && f=="number") {a = 1}
  else if (d== "number" && f=="boolean") {a = -1}
  else if (d== "string" && f=="number") {a = 1}
  else if (d== "number" && f=="string") {a = -1}
  else if (d== "number" && f=="object") {a = -1}
  else if (d== "object" && f=="number") {a = 1}
  else if (d== "string" && f=="object") {a = -1}
  else if (d== "object" && f=="string") {a = 1}
  else if (d== "boolean" && f=="object") {a = -1}
  else if (d== "object" && f=="boolean") {a = 1}
  else {a= 0}
  return a
}
export function sortsArray(arrary) {
  var a, b = arrary
  if (Array.isArray(b)) {
    a = b.sort((x, y) => comparesTypeAndType(x, y))
  } else {
    a = null
  }
  return a
}
export function sortsObject(object, sortArray = false) {
  var a, b = object, c = sortArray, d, params, f, g, i, j
  a = {}
  d = Object.keys(b).sort((f, y) => f.localeCompare(y))
  for (j of d) {
    a[j] = b[j]
  }
  g = Object.keys(a)
  for (f of g) {
    g = a[f]
    if (Array.isArray(g)) {
      if (c == true) {
        i = sortsArray(g)
      } else {
        i = g
      }
    } else if (typeof g == "object") {
      if (g == null) {
      } else {
        i = sortsObject(g)
      }
    }
    a[f] = i
  }
  return a
}
export function makesDateTime() {
  return new Date()
}
export function formsDateTime(date) {
  var a
  if (!!date) {
    a = date
  } else {
    a = new Date()
  }
  return a.toLocaleString() 
}
export function formsDate(date) {
  var a
  if (!!date) {
    a = date
  } else {
    a = new Date()
  }
  return a.toLocaleDateString() 
}
export function formsTime(date) {
  var a
  if (!!date) {
    a = date
  } else {
    a = new Date()
  }
  return a.toLocaleTimeString() 
}
export function versesArray(...params) {
  var b = params[0], c=[]
  for (var d of b) {
    c.push(d)
  }
  return c.reverse()
}
export function excludesObjectKeys(obj, keys: string[]) {
  return Object.entries(obj).filter((entry) => keys.includes(entry[0]) == false)
}
export function setsObjectValue(obj, path, value) {
  var a, b, c, d, e, f, g, h, i
  a = obj
  b = path
  c = b.split(".")
  d = c.length - 1
  e = c.slice(0, d)
  for (f of e) {
    g = a[f]
    if (g == undefined) {
      h = {}
    } else if (typeof g == "object") {
      h = g
    } else {
      break
    }
    a[f] = h
    a = a[f]
  }
  i = c[d]
  a[i] = value
}
export async function calculatesSynchronouslyExcutionTime(callAsync) {
  var a, b
  a = new Date(), await callAsync(), b = new Date()
  return b.getTime() - a.getTime()
}
export function calculatesExcutionTime(call) {
  var a, b
  a = new Date(), call(), b = new Date()
  return b.getTime() - a.getTime()
}
export function callsFunctionByNumber(call, num) {
  var d
  for(d = 0; d < num; d++) {
    call()
  }
}
export function padsTabByEachLine(str: string, tabSize = 2, indent: number) {
  var a, b, c, d, e, f
  a = str.split("\n")
  b = []
  c = "".padStart(tabSize * indent, " ")
  for(d of a) {
    e = c + d
    b.push(e)
  }
  f = b.join("\n")
  return f
}
export function likesString(str, str2) {
  var a, b, c, d
  for(a = 0; a < str.length; a++) {
    b = str[a], c = str2[a]
    if (b == c) {
    } else {
      break
    }
  }
  d = a == str.length
  return d
}
export function likesArray(arr, arr2) {
  var a, b, c
  for (a of arr) {
    if (arr2.includes(a)) {
    } else {
      b = false
      break
    }
  }
  c = b == undefined
  return c
}
export function likesArrayByStrict(arr, arr2) {
  var a, b, c
  for (a = 0; a < arr.length; a++) {
    if (arr[a] == arr2[a]) {
    } else {
      b = false
      break
    }
  }
  c = b == undefined
  return c
}
export function findsByBinary(array, callback, minIndex, maxIndex) {
  var a, b, c, d, e, f, g, h, i, j, k, l: boolean, m, o
  b = array
  c = callback
  d = minIndex || 0
  e = maxIndex || b.length - 1
  g = d
  h = e
  if (typeof c == "function") {
    f = c
  } else {
    f = (v) => {
      if (v == c) {
        o = 0
      } else if (v < c) {
        o = 1
      } else if (v > c) {
        o = -1
      } else {
        o = -2
      }
      return o
    }
  }
  for (m = 0; m < 100; m++) {
    i = g + Math.floor((h - g) / 2)
    j = b[i], k = f(j)
    if (k == -1) {
      h = i - 1
    } else if (k == 0) {
      a = [i, j], l = true
    } else if (k == 1) {
      g = i + 1
    } else {
      l = true, a = null
    }
    if (g < d || h > e) {
      l = true
    }
    if (l) {
      break
    }
  }
  return a
}
/**
 * shared distance to same millisecond when animation.
 * @param {*} distance 
 * @param {*} milliSecond 
 * @returns 
 */
export function getsMultipleMilliSecond(distance, milliSecond) {
  var a, b
  a = distance / milliSecond
  b = a * milliSecond
  return b
  // rate: 1:1
  // 100 distance per 100 millisecond
  // distance == 150, ms == 300, rate == distance / ms, rate == 0.5, rate * milliSecond == 150.
  // distance == 300, ms == 300, rate == distance / ms, rate == 1, rate * milliSecond == 300.
  // distance == 600, ms == 300, rate == distance / ms, rate == 2, rate * milliSecond == 600.
  // distance == 900, ms == 300, rate == distance / ms, rate == 3, rate * milliSecond == 900.
  // distance == 900, ms == 100, rate == distance / ms, rate == 9, rate * milliSecond == 900.
}
export function makesPlus(v) {
  var a
  if (v < 0) {
    a = -v
  } else {
    a = v
  }
  return a
}
export function getsTextByLineLimit(str = "", lineLimit = 100) {
  var a, b, c, d, e
  a = str.split("\n")
  c = []
  d = 0
  for (b of a) {
    if (d >= lineLimit) {
      break
    }
    c.push(b)
    d++
  }
  e = c.join("\n")
  return e
}
/**
 * two number to smaller
 * @param {} a 
 * @param {*} b 
 */
export function smallerNumber(n, m) {
  var a
  if (n < m) {
    a = n
  } else {
    a = m
  }
  return a
}
/**
 * two number to greater
 * @param {} a 
 * @param {*} b 
 */
export function greaterNumber(n, m) {
  var a
  if (n > m) {
    a = n
  } else {
    a = m
  }
  return a
}
export function wait(milliSecond) {
  var a = milliSecond
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, a)
  })
}
export function replaceLast(text = "", replace = "", value = "") {
  var a, b, c, d, e
  a = text.lastIndexOf(replace)
  if (a != -1) {
    b = text.substring(0, a)
    c = text.substring(a)
    d = c.replace(replace, value)
    e = b + d
  } else {
    e = text
  }
  return e
}
export function resizeImage(width, height, width2) {
  var a, b
  a = width / height // ratio
  b = width2 / a // new height
  return [width2, b]
}
export function removeObjectKeys(object, keys = []) {
  var a, b, c, d, e
  a = flatsObject(object)
  c = {}
  if (typeof keys == "string") {
    e = [keys]
  } else {
    e = keys
  }
  for (b in a) {
    if (e.includes(b)) {
    } else {
      c[b] = a[b]
    }
  }
  d = beforeFlatsObject(c)
  return d
}
export function addFirstItem(array, item) {
  array.reverse()
  array.push(item)
  array.reverse()
}
export async function nextTickNoSync(call, milliSecond = 0) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      call()
      resolve()
    }, milliSecond)
  })
}
export async function nextPromiseNoSync(call, milliSecond = 0) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(async () => {
      await call()
      resolve()
    }, milliSecond)
  })
}
export function padsString(str, paddingString, direction = "left", num) {
  var a, b, c, d, e
  if (str.length < num) {
    b = num - str.length
    c = ""
    for (d = 0; d < b; d++) {
      c += paddingString
    }
    if (direction == "left") {
      e = c + str
    } else {
      e = str + c
    }
    a = e
  } else {
    a = str
  }
  return a
}
type LocaleDateFormat = "YYYY-MM-DDTHH:MM"
/**
 * possible locales ["KR", "US"]. default US.
 * @param {*} date 
 * @param {*} format 
 * @param {*} locale 
 * @returns 
 */
export function formatsLocaleDateString(date, format: LocaleDateFormat, locale = "US") {
  var a, b, c, d, e, f, g, h, i, j, k, l, m, o, p
  if (locale == "KR" || locale == "US") {
    p = locale
  } else {
    p = "US"
  }
  a = new Date(date)
  b = []
  d = ""
  e = [
    "YYYY",
    "MM",
    "DD",
    "hh",
    "HH",
    "mm",
    "ss",
    "T",
    "t",
  ]
  for (c of format) {
    d += c
    for (f of e) {
      if (d.includes(f)) {
        g = splitsTextByString(d, f)
        b.push(g[0])
        b.push(f)
        d = g[1]
      }
    }
  }
  h = b.filter(v => v)
  i = []
  for (j of h) {
    if (j == "YYYY") {
      k = "" + a.getFullYear()
    } else if (j == "MM") {
      l = a.getMonth() + 1
      k = ("" + l).padStart(2, "0")
    } else if (j == "DD") {
      k = ("" + a.getDate()).padStart(2, "0")
    } else if (j == "hh") {
      k = ("" + a.getHours()).padStart(2, "0")
    } else if (j == "HH") {
      l = a.getHours()
      if (l > 12) {
        m = l - 12
      } else {
        m = l
      }
      k = ("" + m).padStart(2, "0")
    } else if (j == "mm") {
      k = ("" + a.getMinutes()).padStart(2, "0")
    } else if (j == "ss") {
      k = ("" + a.getSeconds()).padStart(2, "0")
    } else if (j == "T") {
      l = a.getHours()
      if (p == "US") {
        if (l > 12) {
          m = "PM"
        } else {
          m = "AM"
        }
      } else if (p = "KR") {
        if (l > 12) {
          m = "오후"
        } else {
          m = "오전"
        }
      }
      k = m
    } else if (j == "t") {
      l = a.getHours()
      if (p == "US") {
        if (l > 12) {
          m = "pm"
        } else {
          m = "am"
        }
      } else if (p = "KR") {
        if (l > 12) {
          m = "오후"
        } else {
          m = "오전"
        }
      }
      k = m
    } else {
      k = j
    }
    i.push(k)
  }
  o = i.join("")
  return o
}
// var a = formatLocaleDateString(new Date(), "YYYY. MM. DD. t HH:mm:ss", "KR")
// console.log(a)
var debouncesIds = []
export function debounces(uniqueId, call, timing = 500) {
  var a, b, c, d
  a = debouncesIds.findIndex(v => v.id == uniqueId)
  if (a == -1) {
  } else {
    b = debouncesIds[a]
    clearTimeout(a.timeoutId)
    debouncesIds.splice(a, 1)
  }
  c = setTimeout(() => {
    var aa, ab
    if (!!call) {
      call()
    }
    aa = debouncesIds.findIndex(o => o.id == uniqueId)
    if (aa != -1) {
      ab = debouncesIds[aa]
      clearTimeout(ab.timeoutId)
      debouncesIds.splice(aa, 1)
    }
  }, timing)
  d = {
    id: uniqueId,
    timeoutId: c,
  }
  debouncesIds.push(d)
}
type ThrottleId = {
  id: number | string
  timeoutId: NodeJS.Timeout
  call: Function
}
const throttlesIds: Array<ThrottleId> = []
export function throttles(uniqueId, call, timing = 500) {
  var a, b
  a = throttlesIds.findIndex(vv => vv.id == uniqueId)
  if (a != -1) {
    return
  }
  b = setTimeout(() => {
    var aa, ab: ThrottleId
    aa = throttlesIds.findIndex(o => o.id == uniqueId)
    if (aa != -1) {
      ab = throttlesIds[aa]
      ab.call()
      clearTimeout(ab.timeoutId)
      throttlesIds.splice(aa, 1)
    }
  }, timing)
  throttlesIds.push({
    id: uniqueId,
    timeoutId: b,
    call,
  })
}
type ThrottleId2 = {
  id: number | string
  timeoutId: NodeJS.Timeout
  time: number
  call: Function
}
const throttlesIds2: Array<ThrottleId2> = []
export function throttles_(uniqueId, call, timing = 500) {
  var a, b: ThrottleId2, c
  a = throttlesIds2.findIndex(vv => vv.id == uniqueId)
  if (a != -1) {
    b = throttlesIds2[a]
    b.call = call
    return
  }
  c = setTimeout(() => {
    var aa, ab: ThrottleId2
    aa = throttlesIds2.findIndex(o => o.id == uniqueId)
    if (aa != -1) {
      ab = throttlesIds2[aa]
      ab.call()
      clearTimeout(ab.timeoutId)
      throttlesIds2.splice(aa, 1)
    }
  }, timing)
  throttlesIds2.push({
    id: uniqueId,
    timeoutId: c,
    time: new Date().getTime(),
    call,
  })
}
export function adjustsByRange(value, min, max) { 
  var b, c
  b = adjustsByMin(value, min)
  c = adjustsByMax(b, max)
  return c
}
export function adjustsByMin(value, min) { 
  var b, d
  if (min == undefined) {
    b = value
  } else {
    if (value >= min) {
      b = value
    } else {
      b = value
    }
  }
  return b
}
export function adjustsByMax(value, max) { 
  var c
  if (max == undefined) {
    c = value
  } else {
    if (value <= max) {
      c = value
    } else {
      c = max
    }
  }
  return c
}
export function arePossibleByRange(value, min, max) { 
  var b, c, d
  if (min == undefined) {
    b = true
  } else {
    if (value >= min) {
      b = true
    } else {
      b = false
    }
  }
  if (max == undefined) {
    c = true
  } else {
    if (value <= max) {
      c = true
    } else {
      c = false
    }
  }
  d = b && c
  return d
}
export function arePossibleByMin(value, min) { 
  var b, d
  if (min == undefined) {
    b = true
  } else {
    if (value >= min) {
      b = true
    } else {
      b = false
    }
  }
  d = b
  return d
}
export function arePossibleByMax(value, max) { 
  var c, d
  if (max == undefined) {
    c = true
  } else {
    if (value <= max) {
      c = true
    } else {
      c = false
    }
  }
  d = c
  return d
}
export async function excutesAsyncMethodByNumberNoSync(methodNoSync, times = 1, milliSecond = 500) {
  var a
  for (a = 0; a < times; a++) {
    await __()
  }
  function __() {
    return new Promise<void>((resolve, reject) => {
      setTimeout(async () => {
        await methodNoSync()
        resolve()
      }, milliSecond)
    })
  }
}
export function convertsBytesToKiloBytes(bytes) {
  var a, b
  a = bytes
  if (typeof a == "number") {
    b = bytes / 1024
  }
  return b
}
export function convertsBytesToMegaBytes(bytes) {
  var a, b
  a = bytes
  if (typeof a == "number") {
    b = bytes / 1024 / 1024
  }
  return b
}
export function convertsBytesToGigaBytes(bytes) {
  var a, b
  a = bytes
  if (typeof a == "number") {
    b = bytes / 1024 / 1024 / 1024
  }
  return b
}
/**
 * 
 * @param {*} date 
 * @param {*} number 0 ~ 9
 */
export function setsMinutePerTen(date = new Date(), number) {
  Math.min(date.getMinutes(), date.getMinutes())
  var a, b, c, d
  a = date.getMinutes() % 10
  b = date.getMinutes() - a
  c = b + number
  d = new Date()
  d.setMinutes(c)
  return d
}
export function isValidString(string) { 
  var a
  if (string == "" || string == null || string == undefined) {
    a = false
  } else {
    a = true
  }
  return a
}
export function isSameCoordination(valueIn, valueIn2) {
  var a
  if (valueIn.x == valueIn2.x && valueIn.y == valueIn2.y) {
    a = true
  } else {
    a = false
  }
  return a
}
export function calculateHypotenuseByCoordination(valueIn: { x; y; }, valueIn2: { x; y; }) {
  var a, b, c
  a = Math.abs(valueIn.x - valueIn2.x)
  b = Math.abs(valueIn.y - valueIn2.y)
  c = Math.hypot(a, b)
  return c
}
export class Queue<T = any> {
  elements: { [k: string]: T }
  head: number
  tail: number
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element: T) {
    this.elements[this.tail] = element;
    this.tail++;
  }

  dequeue(): T {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }

  peek() {
    return this.elements[this.head];
  }

  get length() {
    return this.tail - this.head;
  }

  get isEmpty() {
    return this.length === 0;
  }
}
export function getsUniqueId() {
  return ("" + new Date().getTime() + "i" + makesAutoIndex()).replaceAll("/", "_")
}