class House {
  bedroom: Room
  livingRoom: Room
  constructor() {
      this.bedroom = new Room();
      this.livingRoom = new Room();
  }
}
class Room {
  windows: Windows[]

  constructor() {
      this.windows = [];
  }
}
class Windows {
  color: string
  constructor(color: string) {
      this.color = color;
  }
}

// create the House name sophanaHouse
let sophanaHouse = new House();
let theColor = sophanaHouse.livingRoom.windows[0].color;

// Complete this code to get the color of the first window  of the living r
// console.log(theColor);
