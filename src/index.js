export default function getHealthPerson(player) {
  let health = '';
  if (player.health >= 50 && player.health <= 100) {
    health = 'healthy';
  } if (player.health < 50 && player.health >= 15) {
    health = 'wounded';
  } if (player.health < 15) {
    health = 'critical';
  } else {
    health = 'incorrect result';
  }

  return health;
}

const person = {
  name: 'Маг',
  health: 14,
};

getHealthPerson(person);
// console.log(getHealthPerson(person)); Для проверки что код работает
