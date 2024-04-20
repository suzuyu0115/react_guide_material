const Example = () => {
  // 練習用
  let strOrNum: string | number = 'Hello';
  strOrNum = 123;
  console.log(strOrNum);

  let strOrNumOrBool: string | number | boolean = 'Hello';
  strOrNumOrBool = true;
  console.log(strOrNumOrBool);

  let helloOrNumOrBool: 'Hello' | number | boolean = false;

  type HelloOrNum = 'Hello' | number;
  const hello: HelloOrNum = 'Hello';

  type DayOfWeek =
    | 'Monday'
    | 'Tuesday'

  const day: DayOfWeek = 'Monday';
};

export default Example;
