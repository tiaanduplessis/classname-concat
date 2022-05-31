export const isObj = (val: any) =>
  val !== null && Object.prototype.toString.call(val) === "[object Object]";
export const isBool = (val: any) => typeof val === "boolean";
export const isFunc = (val: any) =>
  Object.prototype.toString.call(val) === "[object Function]";
export const isTuple = (val: any) =>
  Array.isArray(val) && val.length === 2 && isBool(val[1]);

export const cc = (...classnames: any[]) => {
  let className = "";

  for (let current of classnames) {
    if (typeof current === "string") {
      className = `${className} ${current}`;
      continue;
    }

    if (isObj(current)) {
      for (let objKey in current) {
        const val = current[objKey];
        if (!val) continue;
        const isTruthy = (isBool(val) && val) || (isFunc(val) && val());

        if (isTruthy) {
          className = `${className} ${objKey}`;
          continue;
        }

        className = `${className} ${cc(val)}`;
      }
      continue;
    }

    if (isFunc(current)) {
      className = `${className} ${current()}`;
      continue;
    }

    if (isTuple(current)) {
      const [val, isEnabled] = current;
      if (isEnabled) {
        className = `${className} ${val}`;
      }
      continue;
    }

    if (Array.isArray(current)) {
      className = `${className} ${cc(...current)}`;
      continue;
    }
  }

  return className.trim();
};

export default cc;
