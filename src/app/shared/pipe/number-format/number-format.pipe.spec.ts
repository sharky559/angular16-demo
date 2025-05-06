import { NumberFormatPipe } from './number-format.pipe';

describe('Pipe: NumberFormate', () => {
  it('create an instance', () => {
    let pipe = new NumberFormatPipe();
    expect(pipe).toBeTruthy();
  });
});
