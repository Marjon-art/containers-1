export class ErrorRepository {
    constructor() {
        this.datas = new Map([
            [1, "Eror text"],
            [2, "Eror data"]
            ]);
         }
         translate(code) {
          if(this.datas.has(code)){
           return this.datas.get(code);
          }else {
            throw new Error("Unknown error");
          }
         }
    }

 
    