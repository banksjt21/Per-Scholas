class LinkedList {
    constructor() {
        // 
        this.head = null;
        // if you have a doubly linked list, you want to include the tail

        // this way we can access the current size, like an array length
        this.size = 0;
    }

    // you need to be able to add new elements
    // we are going to add to the end
    add(element) {
        // create new node 
        var node = new Node(element);

        // to store the current node
        let current;

        // if the list is is empty, add element and make it the head
        if (this.head === null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the list
            // this will stop when current.next === null
            while (current.next) {
                current = current.next;
                console.log('in while in add')
            }

            current.next = node;
        }

        this.size++;

        // console.log(this)
    }

    playAll() {
        if (this.size === 0) {
            console.log('there are no songs in your list');
        }
        else {
            let current = this.head;
            
            while (current) {
                current.element.nowPlaying();
                current = current.next;
            }
            console.log('your playlist is over')
        }
    }

    // iterating through to swap the 5th and the 6th
    // first, you need a counter
    // while loop (current.next.next && (counter <=4))

    // if you wanted to swap based on song title

    printAll() {
        if (this.size === 0) {
            console.log('This is an empty list');
        }
        else {
            let current = this.head;

            while (current) {
                current.element.title = 'new' + current.element.title;
                console.log(`This element has title: ${current.element.title}, artist: ${current.element.artist}, and duration: ${current.element.duration}`)
                current = current.next;
                
            }
        }
    }

    removeFirst() {
        if (this.head) {
            this.head = this.head.next;
        }
        this.size--;
    }

    removeLast() {
        if (this.size <= 1) {
            this.head = null;
            this.size = 0;
        } else if (this.size === 2) {
            this.head.next = null;
            this.size = 1;
        } else {
            let prev = this.head;
            let current = this.head.next;

            while (current.next.next) {
                // prev = current;
                current = current.next;
            }

            current.next = null;
            this.size--;
        }
    }
}

class Node {
    //constructor for the node should include initializing your data and your next pointer
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class Song {
    constructor(title, artist, duration, albumArt='blank') {
        this.title = title;
        this.artist = artist;
        this.duration = duration;
        this.albumArt = albumArt;
    }
    nowPlaying() {
        console.log(`${this.title} by ${this.artist} is now playing`)
    }
}

let myLinkedList = new LinkedList();

console.log('the linked list')
console.log(myLinkedList)

let firstSong = new Song ('title1', 'artist1', 'duration1')
myLinkedList.add(firstSong)
// console.log('the linked list after the add')
// console.log(myLinkedList)
let secondSong = new Song ('title2', 'artist2', 'duration2')
myLinkedList.add(secondSong)
// console.log('the linked list after the second add')
// console.log(myLinkedList)
let thirdSong = new Song ('title3', 'artist3', 'duration3')
myLinkedList.add(thirdSong)
// console.log('the linked list after the third add')
// console.log(myLinkedList)
// myLinkedList.playAll();

// myLinkedList.removeFirst();
// myLinkedList.removeFirst();
// myLinkedList.removeFirst();
// console.log('after remove first')
myLinkedList.printAll();
myLinkedList.removeLast();
// console.log('after remove last')
// myLinkedList.printAll();
// myLinkedList.removeLast();
console.log('after remove last')
myLinkedList.printAll();