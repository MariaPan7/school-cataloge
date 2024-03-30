 The Department of Education wants the catalog to hold quick reference material for each school in the city.
 We need to create classes for primary and high schools. Because these classes share properties and methods, each will inherit from a parent School class. 
 Our parent and three child classes have the following properties, getters, setters, and methods:
School
Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
Getters: all properties have getters
Setters: the numberOfStudents property has a setter
Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)
Primary
Includes everything in the School class, plus one additional property
Properties: pickupPolicy (string)
Middle
Does not include any additional properties or methods
High
Includes everything in the School class, plus one additional property
Properties: sportsTeams (array of strings)
***Under .quickFacts(), create a static method named pickSubstituteTeacher. This method will receive one parameter, named substituteTeachers. 
The substituteTeachers parameter will take an array of strings.
Inside the method, randomly generate a whole number between 0 and one less than the length of the substituteTeachers array. Use this number to access and return 
the substitute teacher at that randomly generated index.
***create instances. also The principal of Lorraine Hansbury needs a substitute teacher for the day.