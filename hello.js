function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    }
    this.sayHello = function(thyName) {
        console.info('hello ' + name);
    }
    console.log(2323);
}
module.exports = Hello;