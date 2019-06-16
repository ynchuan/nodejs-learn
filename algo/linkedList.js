class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor(arr) {
        this.size = 0;
        this.head = new Node('head');
        this.end = this.head;
        if (arr) {
            this.arrayToLinked(arr);
        }
    }

    add(o, r) {
        let curr = new Node(o);
        if (r) {
            let rNode = this.getNode(r);
            curr.prev = rNode;
            curr.next = rNode.next;
            if (rNode.next) {
                rNode.next.prev = curr;
            }
            rNode.next = curr;
        }
        else {
            let end = this.end;
            curr.prev = end;
            end.next = curr;
            this.end = curr;
        }
        this.size++;
        return curr;
    }
    removeNode(o) {
        let t = this.getNode(o);
        if (t === this.end) {
            this.end = t.prev;
            t.prev.next = null;
        }
        else if (t !== this.head) {
            t.next.prev = t.prev;
            t.prev.next = t.next;
        }
        this.size--;
        return !!t;
    }
    updateNode(o, u) {
        let t = this.getNode(o);
        if (t) {
            t.data = u;
        }
        return !!t;
    }
    getNode(o) {
        let curr = this.head;
        while (curr.data !== o) {
            curr = curr.next;
        }

        let ret = '';
        if (curr !== this.head) {
            ret = curr;
        }
        return ret;
    }
    get(i) {
        let curr = this.head;
        let idx = 0;
        let ret;
        while (curr) {
            curr = curr.next;
            if (idx === i) {
                ret = curr;
                break;
            }
            idx++;
        }
        return ret;
    }
    remove(i) {
        let curr = this.get(i);
        this.remove(curr.data);
    }

    getAll() {
        let curr = this.head.next;
        this.log('-----GET-ALL-START-----');
        while (curr) {
            this.log(curr.data);
            curr = curr.next;
        }
        this.log('-----GET-ALL--END-----');
    }
    getSize() {
        this.log(this.size);
        return this.size;
    }
    toArray() {
        let curr = this.head;
        let ret = [];
        while (curr.next) {
            ret.push(curr.next);
            curr = curr.next;
        }
        this.log(ret);
        return ret;
    }
    toLinked(arr) {
        if (arr) {
            arr.forEach(item => {
                this.add(item);
            });
        }
    }
    getEndNode() {
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        this.log(curr);
        return curr;
    }
    getHeadNode() {
        let curr = this.end;
        while (curr.prev) {
            curr = curr.prev;
        }
        this.log(curr);
        return curr;
    }
    log(msg) {
        console.log(msg);
    }
    traversal() {

    }
    push() {

    }
    pop() {

    }
    shift() {

    }
    unshift() {

    }
}
module.exports = LinkedList;
var ll = new LinkedList();
ll.add('zhao');
ll.add('qian');
ll.add('li');
ll.getAll();
ll.add('sun', 'qian');
ll.getAll();
ll.updateNode('zhao', 'wang');
ll.getAll();
ll.removeNode('wang');
ll.getAll();
ll.toArray();
ll.toLinked(['zhou', 'wu', 'zheng']);
ll.getAll();
ll.getHeadNode();
ll.getEndNode();
