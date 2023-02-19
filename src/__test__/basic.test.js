import getHealthPerson from '../pureFunction';

test.each([
  [90, 'healthy'],
  [44, 'wounded'],
  [10, 'critical'],
])('health status for %i HP', (health, expected) => {
  const result = getHealthPerson({ name: 'Маг', health });
  expect(result).toBe(expected);
});
