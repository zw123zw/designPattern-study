// 简单工厂模式
let LoginAlert = function(text){
    this.content = text
}
LoginAlert.prototype.show = function(){
    alert(this.content)
}
let LoginConfirm = function(text){
    this.content = text
}
LoginConfirm.prototype.show = function(){
    console.log(this.content)
}
let LoginPrompt = function(text){
    this.content = text
}
LoginPrompt.prototype.show = function(){
    console.log(this.content)
}
let la = new LoginPrompt('欢迎回来')
la.show()
// 工厂
function sport(type, text){
    switch(type){
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