/**
 * Created by Wei-Jen on 1/24/17.
 */
class DomElement implements IDomElement {
    private tagName: string;
    private next: DomElement;

    constructor(tagName: string) {
        this.tagName = tagName;
        //this.next = DomElement;
    }

    print() {
    console.log('<' + this.tagName + '>');
    }
}