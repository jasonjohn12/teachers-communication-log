import moment from 'moment';

  const dateForAddingStudent = () => {
    return moment().fromNow();
  }

  // const addStudent = (firstName, lastName, createdDate, notes) => {
  //   setStudentsData([
  //     ...studentsData,
  //     { id, firstName, lastName, createdDate, notes }
  //   ]);
  // };

  // describe("Student object should have properties", () => {
  //   test("it should show first name, last name, created and notes", () => {

  //     const studentObject = addStudent('1','Jason', 'John', moment().fromNow(), "");
  //     expect(studentObject).toBe('a few seconds ago');
  //   });
  // });

  describe("Date should be a few seconds ago when entry is created", () => {
    test("it should show a static date in moment", () => {

      const date = dateForAddingStudent();
      expect(date).toBe('a few seconds ago');
    });
  });

  