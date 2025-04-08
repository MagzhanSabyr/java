import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);

        Iterator<Integer> iterator = list.iterator();
        int ind = 0;
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
            if(ind == 1){
                iterator.remove();
            }
            ind++;
        }

        System.out.println(list);




//        for(int x : list){
//            System.out.println(x);
//        }



    }
}