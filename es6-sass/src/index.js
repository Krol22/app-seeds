import '../sass/main.scss';
import '../index.html';

class HelloWorld {
    constructor(selector) {
        this.helloElement = document.querySelector(selector);
    }

    print() {
        this.helloElement.innerHTML = 'Hello world!';
    }
}


var hw = new HelloWorld('#hello-world');
hw.print();
