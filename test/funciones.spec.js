import functions from "../src/funciones.js";


describe('functions.sortOrder', () => {
  it('is a function', () => {
    expect(typeof functions.sortOrder).toBe('function');
  });

  it('returns "Aberforth Dumbledore, Babbitty Rabbity, Cadmus Peverell" for "Cadmus Peverell, Babbitty Rabbity, Aberforth Dumbledore" ', () => {
    expect(functions.sortOrder([{name: "Cadmus Peverell"}, {name: "Babbitty Rabbity"}, {name: "Aberforth Dumbledore"}])).toStrictEqual([{name: "Aberforth Dumbledore"}, {name: "Babbitty Rabbity"}, {name: "Cadmus Peverell"}]);
  });
}); 

describe('functions.filterNames', () => {
  it('is a function', () => {
    expect(typeof functions.filterNames).toBe('function');
  });

  it('returns "Albus Dumbledore" for "Zacharias Smith, Xenophilius Lovegood, Zoo director, Albus Dumbledore"', () => {
    expect(functions.filterNames([{name: "Zacharias Smith"}, {name: "Xenophilius Lovegood"}, {name: "Albus Dumbledore"}, {name: "Zoo director"}],"Albus Dumbledore")).toStrictEqual([{name: "Albus Dumbledore"}]);
  });
})