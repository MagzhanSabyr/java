import java.util.Random;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        Runner runner = new Runner();

        Thread thread1 = new Thread(new Runnable() {

            @Override
            public void run() {
                runner.firstThread();
            }
        });

        Thread thread2 = new Thread(new Runnable() {
            @Override
            public void run() {
                runner.secondThread();
            }
        });

        thread1.start();
        thread2.start();

        thread1.join();
        thread2.join();

        runner.finished();


    }
}


class Runner {

    private Account account1 = new Account();
    private Account account2 = new Account();

    private Lock lock1 = new ReentrantLock();
    private Lock lock2 = new ReentrantLock();


    private void takeLocks(Lock lock1, Lock lock2 ){
        boolean firstLockTaken = false;
        boolean secondLockTaken = false;

        while(true){
            try{
                firstLockTaken = lock1.tryLock();
                secondLockTaken = lock2.tryLock();
            }finally{
                if(firstLockTaken&&secondLockTaken){
                    return;
                }

                if(firstLockTaken){
                    lock1.unlock();
                }

                if(secondLockTaken){
                    lock2.unlock();
                }
            }
            try {
                Thread.sleep(1);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }

        }


    }


    public void firstThread() {

        Random random = new Random();

//        for (int i = 0; i < 10000; i++) {
//            synchronized (account1){
//                synchronized (account2){
//                    Account.transfer(account1, account2,  random.nextInt(100));
//                }
//            }
//        }
        for (int i = 0; i < 10000; i++) {
            takeLocks(lock1, lock2);
            try {
                Account.transfer(account1, account2, random.nextInt(100));
            } finally {
                lock1.unlock();
                lock2.unlock();
            }

        }


    }

    public void secondThread() {
        Random random = new Random();

//        for (int i = 0; i < 10000; i++) {
//            synchronized (account1){
//                synchronized (account2){
//                    Account.transfer(account2, account1, random.nextInt(100));
//                }
//            }
//        }
        for (int i = 0; i < 10000; i++) {
            lock2.lock();
            lock1.lock();
            try {
                Account.transfer(account2, account1, random.nextInt(100));
            } finally {
                lock1.unlock();
                lock2.unlock();
            }

        }


    }

    public void finished() {
        System.out.println(account1.getBalance());
        System.out.println(account2.getBalance());
        System.out.println("Total balance " + (account1.getBalance() + account2.getBalance()));
    }


}

class Account {
    private int balance = 10000;

    public void deposit(int amount) {
        balance = balance + amount;

    }

    public void withdraw(int amount) {
        balance = balance - amount;
    }

    public int getBalance() {
        return balance;
    }

    public static void transfer(Account from, Account to, int amount) {
        from.withdraw(amount);
        to.deposit(amount);
    }


}