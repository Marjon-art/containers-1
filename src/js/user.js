 export class Team {
  constructor() {
    this.members = new Set();
  }
  add(character) {
    if(this.members.has(character)){
      throw new Error("такой персонаж уже существует");
    } 
    this.members.add(character);
  };
addAll(...character){ 
  for(let i = 0; i <character.length; i++)
    this.members.add(character[i]);
};
  toArray(){
    const arr = Array.from(this.members);
    return arr; 
   };
  };



  