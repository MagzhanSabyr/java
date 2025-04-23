import maven.example.com.NetworkUtils;
import org.junit.Test;

public class NetworkUtilsTest{
    @Test(timeout = 1000)
    public void getConnectionShouldReturnFasterThanOneSecond(){
        NetworkUtils.getConnection();
    }
}
