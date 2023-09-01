public class Arrays {
    public static void main(String[] args){
        /*char character = 'a'; // примитивный тип данных
        String s = "Hello";
        String s1 = new String("Hello");*/
        int number = 10 ; // примитивный тип данных [10]

        /*int[] numbers = new int[5];             // numbers -> [массив]   Ссылочный тип данных
        System.out.println(numbers[0]);         // 0 1 2 3 4
        System.out.println(numbers[5]);         // numbers[0] = 0  пустой*/
        int[] numbers = new int[5];

        for( int i = 0 ; i<numbers.length; i++ ){
            numbers[i] = i*10;
        }
        for (int i = 0; i<numbers.length ; i++){
            System.out.println(numbers[i]);
        }
        int [] numbers1 = {1,2,3};
        for(int i = 0; i<numbers1.length; i++){
            System.out.println(numbers1[i]);
        }





    }
}
