export default function getHealthPerson(data) {
  let health = '';
  if (data.health >= 50 && data.health <= 100) {
    health = 'healthy';
  } else if (data.health < 50 && data.health >= 15) {
    health = 'wounded';
  } else {
    health = 'critical';
  }

  return health;
}

// const person = {
//   name: 'Маг',
//   health: 55,
// };

// getHealthPerson(person);
// console.log(getHealthPerson(person)); // Для проверки что код работает
