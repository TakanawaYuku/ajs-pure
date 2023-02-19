export default function getHealthPerson(player) {
  let health = '';
  if (player.health >= 50 && player.health <= 100) {
    health = 'healthy';
  } else if (player.health < 50 && player.health >= 15) {
    health = 'wounded';
  } else {
    health = 'critical';
  }

  return health;
}

const person = {
  name: 'Маг',
  health: 55,
};

getHealthPerson(person);
// console.log(getHealthPerson(person)); // Для проверки что код работает
