export let data = [
  {
    title: "Borimong",
    todos: ["반신욕", "명상"],
    checked: [true, false],
  },
  {
    title: "솝트",
    todos: ["1차 과제", "생각 과제"],
    checked: [true, false, false],
  },
  {
    title: "아침루틴",
    todos: ["독서", "확언", "일기"],
    checked: [true, false, true],
  },
  {
    title: "운동",
    todos: ["런닝머신 30분에서 한 시간", "근력 운동 20분"],
    checked: [true, false],
  },
];

export function setData(newData) {
  data = newData;
}
