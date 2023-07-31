import $ from "jquery";
class Carousel {
  construct(container) {
    this.container = $(container);
    this.items = this.container.children();
    this.current = 0;
    this.isMoving = false;
  }

  update() {
    console.log(this.items);
  }
}

export default Carousel;
