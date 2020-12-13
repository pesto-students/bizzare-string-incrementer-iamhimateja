import { bizarreStringIncrementer } from './bizarreStringIncrementer';

describe('bizarreStringIncrementer', () => {
  it('bizarreStringIncrementer adds the number 1 if string does not end in a number', () => {
    bizarreStringIncrementer('foo') == 'foo1';
  });

  it('bizarreStringIncrementer increments by 1 the number if the string ends with a number', () => {
    bizarreStringIncrementer('foo23') == 'foo24';
  });

  it('bizarreStringIncrementer considers leading zeros when incrementing', () => {
    bizarreStringIncrementer('foo0041') == 'foo0042';
  });

  it('bizarreStringIncrementer increments by one even when number of digits increase', () => {
    bizarreStringIncrementer('foo9') == 'foo10';
  });

  it('bizarreStringIncrementer fills leading zeros', () => {
    bizarreStringIncrementer('foo099') == 'foo100';
  });

  it('bizarreStringIncrementer looks at only the last digits', () => {
    bizarreStringIncrementer('f99oo') == 'f99oo1';
    bizarreStringIncrementer('f99oo23') == 'f99oo24';
    bizarreStringIncrementer('f99oo099') == 'f99oo100';
  });

  it('should always pad the only the leading zeroes', () => {
    bizarreStringIncrementer('f99oo0099') == 'f99oo0100';
  });
});
