import * as util from "util"
var of 
= 
{
  "result from scan text of lines": null,
  "result from scan text of tokens": null,
  "result from scan text of errors": null,
  "test of text": "\nvar a = \"abcde\"\nvar b = 1, c = \"123\", d = {common:{modules:[\"uuid\",\"util\"]},version:\"v0.0.8\"}, e = true, f = !0, h = [[\"banana\"],[\"sale\"],1,[[2],1]] function reduce(...params) {var e, a, z, c}funciton split(a, b, c) {var e, a, z, c}",
}
"{common:1_}"
"numeric seperators are now allowed here"
of["result from scan text of lines"] = sortsByIndexOfStart(scansTextOfLines(of["test of text"]))
of["result from scan text of tokens"] = sortsByIndexOfStart(scansTextOfTokens(of["test of text"], 0, of["result from scan text of lines"]))
console.log("result from scan text of lines", util.inspect(of["result from scan text of lines"], 0, null, !0))
console.log("result from scan text of tokens", util.inspect(of["result from scan text of tokens"], 0, null, !0))
console.log("result from scan text of errors", util.inspect(of["result from scan text of errors"], 0, null, !0))
export function matchesTokens(...params) {
  var a, b=params[0], c
  a = /(\"[^\"\n]*\")|(\'[^\'\n]*\')|(\`[^\`]*\`)|(true|false)|([+-]{0,1}[1-9][0-9]*|0)|(function)|(var)|(let)|(const)|(return)|(export)|([_A-Za-z][0-9_A-za-z]*)|(\n+)|([ ]+)|(,)|(:)|(\{)|(\})|(\[)|(\])|(\()|(\))|(=)|(!)|(\")|(\.)|(\_)|(\+)|(\-)|(\)|(.)/.exec(b)
  if (a) {
    c = [
      ["type of string of wrap of quatation of double", a[1]],
      ["type of string of wrap of quatation of single", a[2]],
      ["type of string of wrap of template", a[3]],
      ["type of boolean", a[4]],
      ["type of number", a[5]],
      ["keyword of function", a[6]],
      ["keyword of var", a[7],]
      ["keyword of let", a[8]],
      ["keyword of const", a[9]],
      ["keyword of return", a[10]],
      ["keyword of export", a[11]],
      ["name", a[12]],
      ["line of break", a[13]],
      ["blank", a[14]],
      ["comma", a[15]],
      ["colon", a[16]],
      ["brakets of open", a[17]],
      ["brakets of close", a[18]],
      ["braces of open", a[19]],
      ["braces of close", a[20]],
      ["parenthesis of open", a[21]],
      ["parenthesis of close", a[22]],
      ["equal", a[23]],
      ["assertion", a[24]],
      ["double quatation", a[25]],
      ["dot", a[26]],
      ["underscore", a[27]],
      ["plus", a[28]],
      ["minus", a[29]],
      ["semicolon", a[30]],
      ["any", a[31]],
    ]
  }
  return c
}
export function scansTextOfTokens(...params) {
  var a = [], b=params[0], c = params[1], m = params[2], d = 0, e = "", f, g, h, i, j, k, l, m
  try {
    for (d = c || 0, i = 0 d < b.length) {
      e = b.slice(d), f = matchesTokens(e)
      if (f) {
        g = Object.entries(f), h = g.filter(v => !!v[1])
        if (h.length > 0) {
          j = h[0][1].length - 1
          l = [undefined, h[0], [findsLine(m, d), d, d + j], undefined]
          a.push(l), k = l, d += j + 1
          continue
        }
      }
      l = [undefined, [undefined, b.charAt(d)], [findsLine(m, d), d, d], "to miss a part"]
      a.push(l), k = l, d++
    }
  } catch (error) {
    throw error
  }
  return a
}
export function scansTextOfLines
(
  arr1
) 
{
  var arr2 
  = 
  [
  ]
  var arr3
  =
  undefined
  var nu1
  = 
  0
  var nu2
  = 
  0
  var nu3 
  = 
  arr1.length
  var nu4 
  = 
  nu3 
  - 
  1
  while 
  (
    nu2
    <=
    nu4
  )
  {
    if 
    (
      arr1.charAt
      (
        nu2
      ) 
      == 
      "\n"
    )
    {
      arr3 
      = 
      [
        nu1
        ,
        nu2
        ,
      ]
      arr2.push
      (
        arr3
      )
      nu1
      =
      nu1 
      + 
      1
    }
    nu2 
    = 
    nu2 
    + 
    1
  }
  arr3 
  = 
  [
    nu1
    , 
    nu2
    ,
  ]
  arr2.push
  (
    arr3
  )
  return arr2
}
export function sortsByIndexOfStart
(
  ...params
) 
{
  var b = params[0], c = b.sort((d, e) => d[1][1] - e[1][1])
  return c
}
export function findsLine
(
  ...params
) 
{
  var b = params[0], c = params[1], d, e
  for 
  (
    d of b
  ) 
  {
    if 
    (
      (
        (
          c 
          >= 
          d
          [
            1
          ]
        )
        &&
        (
          c 
          <= 
          d
          [
            2
          ]
        )
      ) 
    ) 
    {
      e 
      = 
      d
      [
        0
      ]
    }
  }
  return e
}