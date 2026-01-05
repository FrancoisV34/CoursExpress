const { addition, estPair, capitaliser } = require('./utils');

describe('Tests des fonctions utilitaires', () => {
  describe('Fonction addition(a, b)', () => {
    test('devrait additionner deux nombres positifs', () => {
      expect(addition(2, 3)).toBe(5);
      expect(addition(10, 15)).toBe(25);
    });

    test('devrait additionner avec des nombres négatifs', () => {
      expect(addition(-1, 5)).toBe(4);
      expect(addition(-3, -7)).toBe(-10);
      expect(addition(10, -3)).toBe(7);
    });

    test('devrait additionner avec des nombres décimaux', () => {
      expect(addition(1.5, 2.3)).toBe(3.8);
      expect(addition(0.1, 0.2)).toBeCloseTo(0.3);
      expect(addition(0.5, 0.7)).toBe(1.2);
    });

    test('devrait additionner avec zéro', () => {
      expect(addition(0, 7)).toBe(7);
      expect(addition(5, 0)).toBe(5);
      expect(addition(0, 0)).toBe(0);
    });
  });

  describe('Fonction estPair(n)', () => {
    test('devrait retourner true pour les nombres pairs', () => {
      expect(estPair(2)).toBe(true);
      expect(estPair(4)).toBe(true);
      expect(estPair(0)).toBe(true);
      expect(estPair(-2)).toBe(true);
      expect(estPair(-4)).toBe(true);
    });

    test('devrait retourner false pour les nombres impairs', () => {
      expect(estPair(1)).toBe(false);
      expect(estPair(3)).toBe(false);
      expect(estPair(-1)).toBe(false);
      expect(estPair(-3)).toBe(false);
    });
  });

  describe('Fonction capitaliser(str)', () => {
    test("devrait mettre en majuscule la première lettre d'une chaîne normale", () => {
      expect(capitaliser('hello')).toBe('Hello');
      expect(capitaliser('world')).toBe('World');
      expect(capitaliser('test')).toBe('Test');
    });

    test('devrait gérer les chaînes vides', () => {
      expect(capitaliser('')).toBe('');
    });

    test('devrait gérer les chaînes avec première lettre déjà majuscule', () => {
      expect(capitaliser('Hello')).toBe('Hello');
      expect(capitaliser('WORLD')).toBe('WORLD');
    });

    test('devrait laisser inchangés les espaces en début de chaîne', () => {
      expect(capitaliser(' hello')).toBe(' hello');
      expect(capitaliser('  test')).toBe('  test');
    });

    test('devrait gérer les chaînes avec caractères spéciaux', () => {
      expect(capitaliser('123abc')).toBe('123abc');
      expect(capitaliser('!hello')).toBe('!hello');
    });
  });
});
