import { Team } from "./user.js";


test("не должно быть дублирование персонажа", () => {
    const user = new Team();
    user.add("Anna");
    expect(() => user.add("Anna")).toThrow(new Error("такой персонаж уже существует"));
})
  
test("test add", () => {
const team = new Team();
team.add("Анна");
const arr = Array.from(team.members);
const result = ["Анна"];
expect(arr).toEqual(result);
});

test("test addAll", () => {
    const character = new Team();
    character.addAll("Nikita", "Aleksey", "Natasha");
    const array = Array.from(character.members);
    const user = ["Nikita", "Aleksey", "Natasha"];
    expect(array).toEqual(user);
});

test("test toArray", () => {
    const arr = new Team();
    arr.add("Anna");
    const array = arr.toArray();
    const resultArr = ["Anna"];
expect(array).toEqual(resultArr);
});

