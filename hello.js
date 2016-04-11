function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    }
    this.sayHello = function(thyName) {
        console.info('hello ' + name);
    }
}
module.exports = Hello;