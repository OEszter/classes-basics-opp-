// ---------- ez a BLUEPRINT, a vázlat, azaz egy OSZTÁLY, class ---------
class Student {
    constructor(name, age, hasFinishedStudies, grades) {
        this.name = name;
        this.age = age;
        this.hasFinishedStudies = hasFinishedStudies;
        this.maths = grades.maths;
        this.programming = grades.programming;
    }

    canGraduate() {
        return this.age > 17 && this.hasFinishedStudies

       /*  Ugyanez fentebb, szebben
        if (this.age > 17 && this.hasFinishedStudies === true) {
            return true
        } else {
            return false
        } */
    }
}
//a konstruktorban adjuk meg, h milyen példányokat kap majd. Ebből fognak készülni majd a példányok: constructor()
//adunk hozzá metódusokat. Nem kell itt neki function szócska sem. Az a függvény, amely egy classon belül található = metódus. Ezeket a metódusokat el tudjuk érni a példányokon. Nem a classon. Pl a console.log(Student.cnaGraduate()) hibára fut, mert a metódus a példányon él.
//Ha egy metódusnál az intellicence "undefined"-et dobki, akkor az azt jelenti, hogy vissza kell térnünk a metódusunkhoz. Itt nekünk pl kell else ág is.


//ezt az osztályt arra haszn: kapunk a meghívás pillanatában egy adatot. És akkor visszaad egy értéket. És azért h ez ne egy példányon éljen, hanem az osztélyon. Ehhez kitesszük = static. Ez után ez csak az osztályon fog élni

//azaz a GraduateStudents classban létrehozunk egy getNumberOfGraduatingStudents metódust:

class GraduatingStudents {

    static getNumberOfGraduatingStudents (students) {
        return students.filter(student => student.canGraduate()).length

        /* let counter = 0;

        for (let i = 0; i < students.length; i++) {
            if (students.canGraduate() === true) {
                counter ++
            }
        }
        return counter */
    }
}


// ------------- PÉLDÁNYOSÍTÁS --------

const student1 = new Student("Ricsi", 29, true)
const student2 = new Student("Géza", 17, false)
const student3 = new Student("Anna", 23, false)
const student4 = new Student("Kálmán", 16, true)
const student5 = new Student("Jóska", 77, true)

const students = [student1, student2, student3, student4, student5]




console.log(`${student1} metódusos válasza`, student1.canGraduate())
console.log(`${student2} metódusos válasza`, student2.canGraduate())
console.log(student1)
console.log(student1.canGraduate())

//console.log(Student.canGraduate())  Ez nem fog múködni, mivel a metódus példányon él.

//Ez alább múködni fog, mivel a GraduatingStudents egy osztály, aminek a getNumber... a metódusa. És az egészet lefuttatjuk a students array-en.
console.log(GraduatingStudents.getNumberOfGraduatingStudents(students))




/* //De lehetett volna nem objektumorientált módon is csinálni ezt:
const obj1 = {
    name: 'Ricsi',
    age: 29,
    hasFinishedStudies: true,
    method: () => {
        return "i am a method"
    }
}

function createStudent(name, age, hasFinishedStudies) {
    return {
        name: name,
        age: age,
        hasFinishedStudies: hasFinishedStudies,
        canGraduate: function() {
            if (age > 17 && hasFinishedStudies === true) {
                return true
            }
        }
    }
} */


