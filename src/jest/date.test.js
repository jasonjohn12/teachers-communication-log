import moment from 'moment';

  const dateForAddingStudent = () => {
    return moment().fromNow();
  }

  describe("Date should be a few seconds ago when entry is created", () => {
    test("it should show a static date in moment", () => {

  const date = dateForAddingStudent();
      expect(date).toBe('a few seconds ago');
    });
  });