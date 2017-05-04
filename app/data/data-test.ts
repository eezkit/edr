import { Tutor } from './tutor';
import { EntityType } from '../test/entity';
import { Dictionary, RecordDictionary } from './dictionary';
import { Person } from '../data/persons';
import { Student } from '../data/students';
import { Group } from '../data/group';
import { Discipline } from '../data/discipline';
import { Olympiad } from './olimpiad';


export const DISCIPLINES: Discipline[] = [];
DISCIPLINES.push(new Discipline('Mathematical analysis','Math.an.'));
DISCIPLINES.push(new Discipline('Linear algebra','Lin.al.'));
DISCIPLINES.push(new Discipline('Physics','Physics'));

export const SOMETHING: number[] = [1,2,3,4,5,6];

export const OLYMPIADS: Olympiad[] = [];
OLYMPIADS.push(new Olympiad('Межвузовская олимпиада по физике', 2016, 'Победитель', new Discipline('Physics','Physics')));
OLYMPIADS.push(new Olympiad('Межвузовская олимпиада по физике', 2015, 'Участник', new Discipline('Physics','Physics')));
OLYMPIADS.push(new Olympiad('Межвузовская олимпиада по математике', 2015, 'Участник', new Discipline('Mathematical analysis','Math.an.')));
export const OLYMPIADS2: Olympiad[] = [];

export const GROUPS: Group[] = [];
const testGroup: Group = new Group('Б13-507', 2012, 'Программная инженерия');
const testGroup2: Group = new Group('Б13-508', 2013, 'Прикладная математика');
GROUPS.push(new Group('Б13-507', 2012, 'Программная инжененрия'));

export const STUDENTS: Student[] = [];
STUDENTS.push(new Student('Petr','Petrov','Petrovich', 100000, 22, testGroup, 19, DISCIPLINES, OLYMPIADS2, SOMETHING));
STUDENTS.push(new Student('Ivan','Ivanov','Ivanovich', 200000, 21, testGroup2, 18, DISCIPLINES, OLYMPIADS,SOMETHING));
STUDENTS.push(new Student('Victor','Victorov','Victorovich', 300000, 31, testGroup2, 18, DISCIPLINES, OLYMPIADS,SOMETHING));
STUDENTS.push(new Student('Vladimir','Vladimirov','Vladimirovich', 400000, 44, testGroup, 20, DISCIPLINES, OLYMPIADS,SOMETHING));
STUDENTS.push(new Student('Denis','Denisov','Denisovic', 500000, 27, testGroup, 21, DISCIPLINES, OLYMPIADS,SOMETHING));
STUDENTS.push(new Student('Semen','Semenov','Semenovich', 600000, 32, testGroup2, 19, DISCIPLINES, OLYMPIADS,SOMETHING));

export const SOMEPERSONS: Person[] = [];
SOMEPERSONS.push(new Person('Bob','White', 23));
SOMEPERSONS.push(new Person('Tom','Black', 12));
SOMEPERSONS.push(new Person('Soyer','Red', 44));
SOMEPERSONS.push(new Person('Ron','Green', 45));
SOMEPERSONS.push(new Person('Nevil','Grey', 12));

export const TUTORS: Tutor[] = [];
TUTORS.push(new Tutor('Petr', 'Petrov', 'Petrovich', 'PhD', 123, 30, 50));
TUTORS.push(new Tutor('Ivan', 'Ivanov', 'Ivanovich', 'Bachelor', 456, 5, 27));
TUTORS.push(new Tutor('Semen', 'Semenov', 'Semenovich', 'Master', 789, 10, 50));
TUTORS.push(new Tutor('Victor', 'Victorov', 'Victorovich', 'PhD', 101, 35, 60));

export const PERSONANDSTUDENT: EntityType[] = [];
PERSONANDSTUDENT.push(new Person('John','Q',45));
PERSONANDSTUDENT.push(new Student('Semen','Semenov','Semenovich', 600000, 32, testGroup, 19, DISCIPLINES, OLYMPIADS,SOMETHING));
PERSONANDSTUDENT.push(new Tutor('Victor', 'Victorov', 'Victorovich', 'PhD', 101, 35, 60));
PERSONANDSTUDENT.push(new Person('Soyer','Red', 44));
PERSONANDSTUDENT.push(new Student('Victor','Victorov','Victorovich', 300000, 31, testGroup, 18, DISCIPLINES, OLYMPIADS,SOMETHING));
PERSONANDSTUDENT.push(new Tutor('Semen', 'Semenov', 'Semenovich', 'Master', 789, 10, 50));
PERSONANDSTUDENT.push(new Person('Bob','White', 23));
PERSONANDSTUDENT.push(new Student('Ivan','Ivanov','Ivanovich', 200000, 21, testGroup, 18, DISCIPLINES, OLYMPIADS,SOMETHING));
PERSONANDSTUDENT.push(new Tutor('Petr', 'Petrov', 'Petrovich', 'PhD', 123, 30, 50));


export const DICTIONARY: Dictionary = new Dictionary();
DICTIONARY.pushNewRecord(new RecordDictionary('Student','StudentComponent'));
// DICTIONARY.pushNewRecord(new RecordDictionary('Student','PersonComponent'));
DICTIONARY.pushNewRecord(new RecordDictionary('Person','PersonComponent'));
DICTIONARY.pushNewRecord(new RecordDictionary('Tutor','TutorComponent'));