public class Test {
    public static void main(String[] args) {
//        //  animal1     ->     {1}
//        //  animal2     ->     {1}
//
//
//        Animal animal1 = new Animal(1);
////        Animal animal2 = new Animal(1);
//        Animal animal2 = animal1;
//
//        System.out.println(animal1 == animal2);
////        System.out.println(animal1.equals(animal2));

//        String string1 = "Hello";       //     string1 ->     {"Hello"}
//        String string2 = "Hello";       //     string2 ->    ссылается на созданный {"Hello"}
//
//        System.out.println(string1 == string2);

        String a = "hello";
        String b = "hello123".substring(0,5);

        System.out.println(b);
        System.out.println(a == b);



    }
}

class Animal {
    private int id;

    public Animal(int id){
        this.id = id;
    }

    public boolean equals(Object obj){
        Animal otherAnimal = (Animal) obj;
        return this.id == otherAnimal.id;
    }
}
