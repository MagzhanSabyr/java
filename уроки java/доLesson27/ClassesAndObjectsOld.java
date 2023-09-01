/*
public class ClassesAndObjectsOld {
    public static void main(String[] args) {
        Person person1 = new Person();
//        person1.name = "Jack";
//        person1.age = 50;
        person1.setNameAndAge("Jack", 50);
        System.out.println("My name is " + person1.name + ", I am " + person1.age + " years old");
        Person person2 = new Person();
//        person2.name = "Michael";
//        person2.age = 20;
        person2.setNameAndAge("Michael", 20);
        System.out.println("My name is " + person2.name + ", I am " + person2.age + " years old");

        person1.speak();
        person2.speak();
        person2.sayHello();
        int year1  = person1.calculateYearsToRetirement();
        int year2  = person2.calculateYearsToRetirement();
        System.out.println("Первому человеку до пенсии: " + year1 + " лет ");
        System.out.println("Второму человеку до пенсии: " + year2 + " лет ");
    }
}

class Person{
    // У класса могут быть:
    // 1. данные (поля )
    // 2. Действия, которые он может совершать (методы)

    String name ;
    int age;

    void setNameAndAge(String username, int userage){
        name = username;
        age = userage;
    }

    void speak(){
//        for (int i =0 ; i<3; i++){
        System.out.println("my name is " + name + ", I am " + age + " years old");
//        }
    }
    void sayHello(){
        System.out.println("Hello !");
    }
    */
/*    void calculateYearsToRetirement(){
            int years = 65- age;
            System.out.println("Количество лет до пенсии: " + years );
        }
        *//*

    int  calculateYearsToRetirement(){
        int years = 65- age;
        return years ;
    }



}*/
