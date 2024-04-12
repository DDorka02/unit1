QUnit.module('szamolas', function() {
    QUnit.test('Létezik-e?', assert => {
      assert.ok(szamolas);
    });

    QUnit.test('Függvény-e?', assert => {
        assert.ok(typeof(szamolas === "function"));
    });

    QUnit.test('Pozitív számok?', assert => {
        kapott = szamolas(3,5)
        vart=8;
        assert.equal(kapott,vart);
    });
  });