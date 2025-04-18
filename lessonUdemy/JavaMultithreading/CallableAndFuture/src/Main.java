import java.util.Random;
import java.util.concurrent.*;

public class Main{
    
    private static int result;
    
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(1);
        Future<Integer> future = executor.submit(
                () -> {
                    System.out.println("starting");
                    
                    try{
                        Thread.sleep(500);
                    }catch(InterruptedException e){
                        e.printStackTrace();
                    }
                    System.out.println("Finished");
                    
                    Random rand = new Random();
                    int randomValue = rand.nextInt();
                    
                    if(randomValue<5){
                        throw new Exception("Something bad happened");
                    }
                    
                    return randomValue;
                }
        
        );
        
        executor.submit(() -> System.out.println("Hello from thread"));
        
        executor.shutdown();
        
        try {
            int result = future.get(); // get дожидается окончание выполнение потока 
            System.out.println(result);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        } catch (ExecutionException e) {
            Throwable cause = e.getCause();
            System.out.println(cause.getMessage());
        }
        
    }
}