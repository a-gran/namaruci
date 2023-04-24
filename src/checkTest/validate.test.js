const validateValue = require('./validateValue')

test('Валидация значения', () => {
        expect(validateValue(100)).toBe(false)
    }
 )

