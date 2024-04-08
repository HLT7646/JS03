function resetValue(value) {
    if (typeof value === "string") {
      return "";
    } else if (typeof value === "number") {
      return 0;
    } else if (typeof value === "boolean") {
      return false;
    } else if (Array.isArray(value)) {
      const outputArr = [];
      for (let i = 0; i < value.length; i++) {
        if (typeof value[i] === "string") {
          outputArr.push("");
        } else if (typeof value[i] === "number") {
          outputArr.push(0);
        } else {
          outputArr.push(resetValue(value[i]));
        }
      }
      return outputArr;
    } else if (typeof value === "object") {
      if (value === null) {
        return null;
      }
      const outputObj = {};
      for (let key in value) {
        outputObj[key] = resetValue(value[key]);
      }
      return outputObj;
    } else {
      return value;
    }
  }
const input = {
    name: "trung",
    age: 25,
    email: "john@example.com",
    isStatus: true,

    b: {
        a: [80, 90, 75],
        c: "abc",
        d: "abc",
        e: "abc",
        f: ['a', 'b', 'c']
    }
};

const output = resetValue(input);

console.log(output);
