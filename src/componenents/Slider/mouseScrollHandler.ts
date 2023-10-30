export default class MouseScrollHandler {
  mouseIsDown: boolean;
  prevPosition: number;

  constructor() {
    this.mouseIsDown = false;
    this.prevPosition = 0;
  }

  handleDragStart(e: React.MouseEvent<HTMLElement>): void {
    this.mouseIsDown = true;
    this.prevPosition = e.clientX;
  }

  handleDragMove(e: React.MouseEvent<HTMLElement>): number {
    if (!this.mouseIsDown || this.prevPosition === e.clientX) return 0;

    const toScroll = this.prevPosition - e.clientX;
    this.prevPosition = e.clientX;
    return toScroll;
  }

  handleDragEnd() {
    this.mouseIsDown = false;
    this.prevPosition = 0;
  }
}
