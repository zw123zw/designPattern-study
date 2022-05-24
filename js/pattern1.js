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
let ve = function(subtype, suptype){
  if(typeof ve[suptype] === 'function'){
    function F(){}
    F.prototype = new ve[suptype]()
    subtype.constructor = subtype
    subtype.prototype = new F()
  }else{
    throw new Error('未创建抽象类')
  }
}