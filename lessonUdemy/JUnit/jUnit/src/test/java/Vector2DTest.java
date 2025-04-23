import maven.example.com.Vector2D;
import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

public class Vector2DTest{
    
    private final double EPS = 1e-9;
    private static Vector2D v1;
    
    @BeforeClass
    public static void createNewVector(){
        v1 = new Vector2D();
    }
    
    @Test
    public void newVectorShouldHaveZeroLength(){
        
        // assertion
        // 1e-9 = 0.0000....0001
        Assert.assertEquals(0,v1.length(), EPS);
        
    }
    
    @Test
    public void newVectorShouldHaveZeroX(){
        
        Assert.assertEquals(0,v1.length(), EPS);
        
    }
    
    @Test
    public void newVectorShouldHaveZeroY(){
        
        Assert.assertEquals(0,v1.length(), EPS);
    }
    
    
}
