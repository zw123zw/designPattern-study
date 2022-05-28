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
let lazySingle = (function(){
  let instance = null
  let Single = function(){
    return{
      publicM: function(){},
      publicC:  123
    }
  }
return function(){
  if(!instance){
    instance = Single()
  }
  return instance
}
})()
console.log(lazySingle().publicC);
