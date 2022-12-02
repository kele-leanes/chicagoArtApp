const isObject = (inputObject: unknown) => {
  return (
    inputObject === Object(inputObject) &&
    !isArray(inputObject) &&
    typeof inputObject !== 'function'
  );
};

const isArray = (inputArray: unknown) => {
  return Array.isArray(inputArray);
};

const toCamel = (str: string) => {
  return str.replace(/([-_][a-z])/gi, $1 => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};

export const keysToCamel = <T>(input: T): T => {
  if (isObject(input)) {
    const n = {} as T;
    Object.keys(input as object).forEach(k => {
      //@ts-ignore
      n[toCamel(k)] = keysToCamel(input[k]);
    });

    return n;
  } else if (isArray(input)) {
    //@ts-ignore
    return input.map((i: any) => {
      return keysToCamel(i);
    });
  }

  return input;
};
