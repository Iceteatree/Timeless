describe("A simple date test", () => {
    const date = new Date();
    test("year should be 2021", () => {
      expect(date.getFullYear()).toEqual(2021);
    });
  });