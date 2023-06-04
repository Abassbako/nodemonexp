function hello() {
    console.log('Hello world!');
};

var id1 = setInterval(hello, 1000);
var id2 = setTimeout(hello, 1000);

clearTimeout(id1);