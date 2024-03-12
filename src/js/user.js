class Team {
  constructor() {
    this.members = new Set();
  }
  add(character) {
    if(this.members.has(character)){
      throw new Error("такой персонаж уже существует");
    } 
    this.members.add(character);
  };
addAll(character){ 
    this.members.add(character);
};
  toArray(){
    const arr = Array.from(this.members);
    return arr; 
   };
  };



  