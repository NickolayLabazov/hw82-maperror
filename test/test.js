import ErrorRepository from '../src/function';

test('Вызов ошибки', () => {
  const expected = 'error_0';
  const errorRepository = new ErrorRepository();
  const received = errorRepository.getEerror(0);
  expect(received).toEqual(expected);
});

test('Ошибка не найдена', () => {
  const errorRepository = new ErrorRepository();
  expect(() => {
    errorRepository.getEerror(6);
  }).toThrow();
});
