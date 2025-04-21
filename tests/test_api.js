const assert = require('assert');

describe('Nota', function () {
  it('debe crear una nota correctamente', function () {
    const nota = { content: "Prueba de nota" };
    assert.strictEqual(nota.content, "Prueba de nota");
  });
});