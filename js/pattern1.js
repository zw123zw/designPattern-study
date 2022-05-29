// 简单工厂模式
let LoginAlert = function (text) {
  this.content = text
}
LoginAlert.prototype.show = function () {
  alert(this.content)
}
let LoginConfirm = function (text) {
  this.content = text
}
LoginConfirm.prototype.show = function () {
  console.log(this.content)
}
let LoginPrompt = function (text) {
  this.content = text
}
LoginPrompt.prototype.show = function () {
  console.log(this.content)
}
let la = new LoginPrompt('欢迎回来')
la.show()
// 工厂
function sport(type, text) {
  switch (type) {
    case 'alert':
      return new LoginAlert(text)
    case 'confirm':
      return new LoginConfirm(text)
    case 'prompt':
      return new LoginPrompt(text)
    default:
      break
  }
}
let ls = sport('confirm', '注册成功')
ls.show()
function createPop(type, text) {
  let o = new Object()
  o.content = text
  o.type = type
  o.show = function () {}
  if (o.type === 'alert') {
  }
  if (o.type === 'confirm') {
  }
  if (o.type === 'prompt') {
  }
}
// 安全工厂方法
let Factory = function (type, content) {
  if (this instanceof Factory) {
    return this[type][content]
  } else {
    return new Factory(type, content)
  }
}
Factory.prototype = {
  Jave: function () {},
  Php: function () {},
  Jascript: function () {},
}

// 抽象类
let Car = function () {}
Car.prototype = {
  getPrice: function () {
    return new Error('抽象方法不能调用')
  },
  getSpeed: function () {
    return new Error('抽象方法不能调用')
  },
}

// 抽象工厂模式
let ve = function (subtype, suptype) {
  if (typeof ve[suptype] === 'function') {
    function F() {}
    F.prototype = new ve[suptype]()
    subtype.constructor = subtype
    subtype.prototype = new F()
  } else {
    throw new Error('未创建抽象类')
  }
}

// 建造者模式
// 应聘者类
let human = function (param) {
  this.skill = (param && param.skill) || '保密'
  this.hobby = (param && param.hobby) || '保密'
}
human.prototype = {
  getSkill: function () {
    return this.skill
  },
  getHobby: function () {
    return this.hobby
  },
}
// 姓名解析类
let named = function (name) {
  this.wholeName = name
  const nameIndex = name.indexOf
  if (nameIndex > -1) {
    this.firstName = name.slice(0, nameIndex)
    this.secondName = name.slice(nameIndex)
  }
}
// 期望职位类
let workd = function (work) {
  switch (work) {
    case 'code':
      this.work = '工程师'
      this.workDescript = '程序猿'
      break
    case 'UE':
      this.work = '设计师'
      this.workDescript = '设计是一种艺术'
      break
    case 'teach':
      this.work = '教师'
      this.workDescript = '分享是一种快乐'
      break
    default:
      this.work = work
      this.workDescript = '暂无职位描述'
  }
}
workd.prototype.changeWork = function (work) {
  this.work = work
}
workd.prototype.changeDescript = function (workDescript) {
  this.workDescript = workDescript
}
// 建造者
let Person = function (name, work) {
  let _person = new human()
  _person.name = new named(name)
  _person.work = new workd(work)
  return _person
}
let pp = new Person('13', 'code')
console.log(pp.skill)
console.log(pp.work)
console.log(pp.name)

// 原型模式
let loopImage = function (imgArr, container) {
  this.imgArr = imgArr
  this.container = container
}
loopImage.prototype = {
  createImage: function () {},
  changeImage: function () {},
}
let sliderimg = function (imgArr, container) {
  loopImage.call(this, imgArr, container)
}
sliderimg.prototype = new loopImage()
sliderimg.prototype.changeImage = function () {}
sliderimg.prototype.changeImageLengh = function () {
  return this.container
}
let fadeimg = function (imgArr, container, arrow) {
  loopImage.call(this, imgArr, container)
  this.arrow = arrow
}
fadeimg.prototype = new loopImage()
fadeimg.prototype.changeImage = function () {
  this.container = 123111
}
fadeimg.prototype.changeImageLengh = function () {
  return this.container
}
let faa = new fadeimg(123, 11111)
let saa = new sliderimg(123, 22222)
faa.changeImage()
console.log(faa.changeImageLengh())
console.log(saa.changeImageLengh())

// 单例模式
let ming = {
  g: function (id) {
    return document.getElementById(id)
  },
  css: function (id, key, value) {
    return (this.g(id).style[key] = value)
  },
}
let AUitl = (function () {
  let conf = {
    MAX_NUM: 100,
    MIN_NUM: 1,
    COUNT: 10,
  }
  return {
    Util: {
      utilA: function () {},
    },
    Tool: {
      toola: function () {},
    },
    Ajax: {
      ajaxa: function () {},
    },
    Others: {
      othersa: function () {},
    },
    static: {
      getMax: function () {
        return conf.MAX_NUM
      },
    },
  }
})()
console.log(AUitl.static.getMax())
let lazySingle = (function () {
  let instance = null
  let Single = function () {
    return {
      publicM: function () {},
      publicC: 123,
    }
  }
  return function () {
    if (!instance) {
      instance = Single()
    }
    return instance
  }
})()
console.log(lazySingle().publicC)

// 外观模式
let addEvent = function (id, type, fn) {
  let dom = document.getElementById(id)
  if (dom.addEventListener) {
    dom.addEventListener(type, fn, false)
  } else if (dom.attachEvent) {
    dom.attachEvent('on' + type, fn)
  } else {
    dom['on' + type] = fn
  }
}
let getEvent = function (event) {
  return event || window.event
}
let getTarget = function (e) {
  return getEvent(e).target || getEvent(e).srcElement
}
let preventDefault = function (e) {
  if (getEvent(e).preventDefault) {
    getEvent(e).preventDefault()
  } else {
    e.returnValue = false
  }
}

// 适配器模式
let $ = (function () {
  return function () {}
})()
let sa = {}
sa.g = function (id) {
  return $(id).get(0)
}
sa.on = function (id, type, fn) {
  let dom = typeof id === 'string' ? $('#' + id) : $(id)
  dom.on(type, fn)
}
let doSome = function (options) {
  let _options = {
    name: '123',
    age: 123,
    sex: 1,
  }
  Object.keys(_options).forEach(key => {
    _options[key] = options[key] || _options[key]
  })
}

// 代理模式
let count = (function () {
  let img = document.createElement('img')
  return function () {
    let str =
      '//img1.2125.com/2017begin/img/h001/h25/img202004141526598c1790.jpg'
    img.setAttribute('src', str)
    document.body.append(img)
  }
})()
count()

// 装饰者模式
let decorator = function (id, fn) {
  let input = document.getElementById(id)
  if (!input) {
    let dom = document.createElement('div')
    dom.innerHTML = '测试'
    document.body.appendChild(dom)
    input = dom
  }
  if (typeof input.onclick === 'function') {
    let oldClick = input.onclick
    input.onclick = function () {
      oldClick()
      fn()
    }
  } else {
    input.onclick = fn
  }
}
decorator('tel_input', function () {
  console.log('测试一下')
})
decorator('email_input', function () {
  console.log('测试二下')
})

// 桥接模式
let changeColorbg = function (dom, color, bg) {
  dom.style.color = color
  dom.style.background = bg
}
document.getElementsByTagName('div')[0].onmouseover = function () {
  changeColorbg(this, '#333', '#f5f5f5')
}
let pspeed = function (x, y) {
  this.x = this.xthis.y = y
}
pspeed.prototype.run = function () {
  console.log('跑')
}
let pcolor = function (color) {
  this.color = color
}
pcolor.prototype.draw = function () {
  console.log('绘制')
}
let pspeek = function (word) {
  this.word = word
}
pspeek.prototype.run = function () {
  console.log('说话')
}
let Ball = function (x, y, color) {
  this, (speed = new pspeed(x, y))
  this.color = new pcolor(color)
}
Ball.prototype.init = function () {
  this.color.draw()
  this.speed.run()
}
let people = function (x, y, word) {
  this.speed = new pspeed(x, y)
  this.word = new pspeek(word)
}
people.prototype.init = function () {
  this.speed.run()
  this.word.run()
}

// 组合模式
class CFolder {
  constructor(name) {
    this.name = name
    this.files = []
  }
  add(file) {
    this.files.push(file)
  }
  scan() {
    this.files.forEach(f => {
      f.scan()
    })
  }
}
class CFile {
  constructor(name) {
    this.name = name
  }
  add() {
    throw new Error('不能添加文件')
  }
  scan() {
    console.log('开始扫描文件:', this.name)
  }
}
let mFolder = new CFolder('目录1')
let mFolder1 = new CFolder('目录2')
mFolder.add(new CFile('文件1'))
mFolder1.add(new CFile('文件2'))
mFolder.scan()
mFolder1.scan()
let znews = function () {
  this.children = []
  this.element = null
}
znews.prototype = {
  init: function () {
    throw new Error('重写方法')
  },
  add: function () {
    throw new Error('重写方法')
  },
  getElement: function () {
    throw new Error('重写方法')
  },
}
let zcontainer = function (id, parent) {
  znews.call(this)
  this.id = id
  this.parent = parent
  this.init()
}
zcontainer.prototype = new znews()
zcontainer.prototype.init = function () {
  this.element = document.createElement('ul')
  this.element.id = this.id
}
zcontainer.prototype.add = function (child) {
  this.children.push(child)
  this.element.appendChild(child.getElement())
  return this
}
zcontainer.prototype.getElement = function () {
  return this.element
}
zcontainer.prototype.show = function () {
  this.parent.appendChild(this.element)
}
let zitem = function (id) {
  znews.call(this)
  this.id = id
  this.init()
}
zitem.prototype = new znews()
zitem.prototype.init = function () {
  this.element = document.createElement('li')
  this.element.id = this.id
}
zitem.prototype.add = function (child) {
  this.children.push(child)
  this.element.appendChild(child.getElement())
  return this
}
zitem.prototype.getElement = function () {
  return this.element
}
let znewsimg = function (url, text) {
  znews.call(this)
  this.url = url
  this.text = text
  this.init()
}
znewsimg.prototype = new znews()
znewsimg.prototype.init = function () {
  this.element = document.createElement('a')
  this.element.innerHTML = this.text
  this.element.href = this.href
}
znewsimg.prototype.add = function (child) {
  this.children.push(child)
  this.element.appendChild(child.getElement())
  return this
}
znewsimg.prototype.getElement = function () {
  return this.element
}
let nnewc = new zcontainer('news_ul', document.body)
nnewc
  .add(new zitem('nomal').add(new znewsimg('123', '333')))
  .add(new zitem('normal2').add(new znewsimg('1231', '66')))
  .show()
