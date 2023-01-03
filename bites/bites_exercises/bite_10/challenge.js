const cohort = {
  name: 'November 2022',
  id: 1122,
  studentNames: ['Aziz', 'Mike', 'Nicola', 'Eliza', 'Anthony']
};

const messagePrint = (object) => {
  console.log(`${object.id} - ${object.name} - ${object.studentNames.length} students in this cohort`);
};

messagePrint(cohort);