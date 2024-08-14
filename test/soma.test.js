const soma = require('../soma.js')

test('Soma 2 + 3 e obtém 5', () => {
    let result = soma(2, 3);
    expect(result).toBe(5);
});

test('Soma -99 + -5 e obtém -104', () => {
    let result = soma(-99, -5);
    expect(result).toBe(-104);
})

test('soma "9" + "5" obtém 14', () => {
    let result = soma("9", "5");
    expect(result).toBe(14);
})

test('Soma "23" + "R" e obtém erro', () => {
    let result = soma("23", "R");
    
    expect(result).not.toBe("23R");
    expect(result).not.toBe(NaN);
    expect(result).toThrow(Error);
    expect(result).toThrow(/^ a e b devem ser números! $/)
})