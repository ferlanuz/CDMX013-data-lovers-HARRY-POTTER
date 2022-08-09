import functions from "../src/funciones.js";


describe('functions.sortOrder', () => {
  it('is a function', () => {
    expect(typeof functions.sortOrder).toBe('function');
  });

  it('returns "Aberforth Dumbledore, Babbitty Rabbity, Cadmus Peverell" for "Cadmus Peverell, Babbitty Rabbity, Aberforth Dumbledore" ', () => {
    expect(functions.sortOrder([{name: "Cadmus Peverell"}, {name: "Babbitty Rabbity"}, {name: "Aberforth Dumbledore"}])).toStrictEqual([{name: "Aberforth Dumbledore"}, {name: "Babbitty Rabbity"}, {name: "Cadmus Peverell"}]);
  });
}); 

 describe('functions.sortOrderReverse', () => {
  it('is a function', () => {
    expect(typeof functions.sortOrderReverse).toBe('function');
  });

  it('returns "Zoo director, Zacharias Smith, Xenophilius Lovegood" for "Zacharias Smith, Xenophilius Lovegood, Zoo director"', () => {
    expect(functions.sortOrderReverse([{name: "Zacharias Smith"}, {name: "Xenophilius Lovegood"}, {name: "Zoo director"}])).toStrictEqual([{name: "Zoo director"}, {name: "Zacharias Smith"}, {name: "Xenophilius Lovegood"}]);
  });
});