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
    QUnit.test('Logikai az egyik paraméter', assert => {
        assert.equal(szamolas(3,false),3);
    });
    QUnit.test('Speciális karakter az egyik paraméter', assert => {
        assert.equal(szamolas('!',false),"Szám legyen mindkét paraméter!");
    });
    QUnit.test('Pi az egyik paraméter', assert => {
        assert.equal(szamolas(Math.PI,2),Math.PI+2);
    });
    QUnit.test('Egy paraméter van megadva', assert => {
        assert.equal(szamolas(3),"Két paraméter megadása szükséges");
    });
    QUnit.test('0 paraméter van megadva', assert => {
        assert.equal(szamolas(),"Két paraméter megadása szükséges");
    });
    QUnit.test('Több mint három paraméter van megadva', assert => {
        assert.equal(szamolas(2,4,5),"Két paraméter megadása szükséges");
    });
    QUnit.test('Túl csordulás van megadva', assert => {
        assert.equal(szamolas(3),"Két paraméter megadása szükséges");
    });
  });