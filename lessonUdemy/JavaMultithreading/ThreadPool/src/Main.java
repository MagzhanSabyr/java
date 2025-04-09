import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        ExecutorService executor = Executors.newFixedThreadPool(5);

        for(int i = 0; i < 5; i++) {
            executor.submit(new Work(i));
        }
        executor.shutdown();

        System.out.println("All tasks submitted");

//        executor.awaitTermination(1, TimeUnit.DAYS);  // это для того чтобы режим ожидание вкл

    }
}


class Work implements Runnable {

    private int id;

    public Work(int id) {
        this.id = id;
    }

    @Override
    public void run() {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        System.out.println("Work " + id + " was completed");
    }
}