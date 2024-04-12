QUnit.module('szamolas', function() {
    QUnit.test('Létezik-e?', assert => {
      assert.ok(szamolas);
    });

    QUnit.test('Függvény-e?', assert => {
        assert.ok(typeof(szamolas === "function"));
    });

    QUnit.test('Pozitív egész számok?', assert => {
        kapott = szamolas(3,5)
        vart=8;
        assert.equal(kapott,vart);
    });

    QUnit.test('Negatív egész számok?', assert => {
        assert.equal(szamolas(-3,-5),-8);
    });

    QUnit.test('Vegyes egész számok?', assert => {
        assert.equal(szamolas(-3,5),2);
    });

    QUnit.test('Tört egész számok?', assert => {
        assert.equal(szamolas(3.2,1.5),4.7);
    });

    QUnit.test('Egész szám szöveggként megadva?', assert => {
        assert.equal(szamolas(3,"2"),5);
    });

    QUnit.test('Szöveg az egyik paraméter', assert => {
        assert.equal(szamolas(3,"kutyus"),"Szám legyen mindkét paraméter!");
    });
  });