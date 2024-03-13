import Team from "./user.js";

test("test add", () => {
const team = new Team();
team.add("злой");
const arrResult = ["Анна"];
expect(team).toBe(arrResult);
})

