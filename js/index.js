;(function () {
  let checkObject = {
    checkNmae: function () {},
    checkEmail: function () {},
    checkPhone: function () {},
  }
  console.log(checkObject)

  let checkObj = function () {
    this.checkNmae = function () {}
    this.checkEmail = function () {}
    this.checkPhone = function () {}
  }
  checkObj.prototype.checkNmaep = function () {}
  checkObj.prototype.checkEmailp = function () {}
  checkObj.prototype.checkPhonep = function () {}
  let a = new checkObj()
  console.log(a.checkNmae)
  console.log(a.checkPhonep)

  //   创建对象，避免变量污染
  Function.prototype.addMethod = function (name, fn) {
    // this[name] = fn
    this.prototype[name] = fn
    return this
  }
  let meth = function () {}
  meth
    .addMethod('checkName', function () {
      console.log(111)
      return this
    })
    .addMethod('checkEmail', function () {
      console.log(222)
      return this
    })
  let methObj = new meth()
  methObj.checkName().checkEmail()
  console.log(meth.prototype);
  console.log(Function.prototype.addMethod);
})()
