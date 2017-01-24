/**
 * Created by Wei-Jen on 1/24/17.
 */
class TextNode implements IDomElement {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    print() {
        console.log(this.content);
    }
}