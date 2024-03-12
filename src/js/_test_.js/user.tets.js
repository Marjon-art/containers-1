import Team from "./user.test.js";

test("test add", () => {
    const team = new Team("Anton");
    team.add();
    const result = {
        name: "Anton",
    };
    if(result === tem) {
        throw new Error("такой персонаж уже существует");
    }
    expect(team).toEqual(result);
});