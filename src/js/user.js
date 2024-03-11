class Team {
  consructor() {
    this.members = new Set();
  }
  add() {
    if(this.members.has(character)){
      throw new Error("такой персонаж уже существует");
    } 
    this.members.add(character);
  };
addAll(...args){ 
  for(let i = 0; i < args.length; i++) {
    this.members.add(args[i]);
  }
};
  toArray(){
    const arr = Array.from(this.members);
    return arr; 
   };
  };



  