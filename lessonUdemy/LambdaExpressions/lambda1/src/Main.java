
//interface Executable {
//    int execute(int x, int y);
//}
//
//class Runner{
//    public void run(Executable executable){
//        int a = executable.execute(10,15);
//        System.out.println(a);
//
//    };
//}
//
////class ExecutableImplementation implements Executable{
////    @Override
////    public void execute() {
////        System.out.println("Hello World");
////    }
////}
//
//
//
//public class Main{
//    public static void main(String[] args) {
//        Runner runner = new Runner();
//        int a = 1;

////        runner.run(new Executable(){
////            @Override
////            public void execute() {
////                System.out.println("Hello World");
////
////            }
////        });
////        runner.run(()-> System.out.println("Hello World"));
//
//        runner.run(new Executable() {
//            @Override
//            public int execute(int x, int y) {
//                int a =2 ;
//                return x+y;
//            }
//        });
//
//        runner.run((x,y)-> {
//            return x + y;
//        } );
//
//    }
//}



import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List <String> list = new ArrayList<>();
        
        list.add("Hello");
        list.add("World");
        list.add("Java");
        
//        list.sort(new Comparator<String>(){
//            @Override
//            public int compare(String o1, String o2) {
//                if(o1.length() > o2.length()){
//                    return 1;
//                } else if(o1.length() < o2.length()){
//                    return -1;
//                } else {
//                    return 0;
//                }
//            }
//        });
//
        
        Comparator<String> comparator = (s1, s2) ->{
            if(s1.length() > s2.length()){return 1;}
            else if(s1.length() < s2.length()){return -1;}
            else {return 0;}
        };
        list.sort(comparator);
        
        System.out.println(list);
    }
    
}