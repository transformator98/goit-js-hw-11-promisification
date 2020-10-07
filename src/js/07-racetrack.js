const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

const getRandomTime = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const run = horse => {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
};
const promises = horses.map(run);

Promise.race(promises).then(({ horse, time }) => {
  console.log(
    `%c Победил ${horse}, финишировав за ${time} времени`,
    `color:green;font-size:16px;`,
  );
});

Promise.all(promises)
  .then(results => {
    console.log(
      `%c Заезд окончен, принимаются ставки.`,
      `color:blue; font-size:16px;`,
    );
    console.table(results);
  })
  .catch(error => console.log(error));
