const { calcularDanio } = require('../src/combate');
test('daño normal: ataque mayor que defensa', () => {
  // Arrange
  const a = { ataque: 15 };
  const d = { defensa: 5 };

  // Act
  const danio = calcularDanio(a, d);

  // Assert
  expect(danio).toBe(10);
});


test('defensa es igual al ataque', () => {
  // Arrange
  const a = { ataque: 15 };
  const d = { defensa:15 };

  // Act
  const danio = calcularDanio(a, d);

  // Assert
  expect(danio).toBe(1);
});


test('defensa mayor que ataque', () => {
  // Arrange
  const a = { ataque: 5 };
  const d = { defensa:15 };

  // Act
  const danio = calcularDanio(a, d);

  // Assert
  expect(danio).toBe(1);
});


test('ataque y defensa iguales a 0', () => {
  // Arrange
  const a = { ataque: 0 };
  const d = { defensa: 0 };

  // Act
  const danio = calcularDanio(a, d);

  // Assert
  expect(danio).toBe(1);
});