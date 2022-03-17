const BOARD_WIDTH = 15;
const BOARD_HEIGHT = 15;

for (i = 0; i < BOARD_HEIGHT; i++) {
  let ch = "";
  if (i % 2 === 0) {
    ch = " #";
  } else {
    ch = "# ";
  }

  let temp = "";
  for (j = 0; j < BOARD_WIDTH / 2; j++) {
    temp += ch;
  }
  console.log(temp);
}
