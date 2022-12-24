package com.itc.springbootframework;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static com.jayway.jsonpath.internal.path.PathCompiler.fail;
import static org.junit.jupiter.api.Assertions.assertEquals;

class SpringBootFrameworkApplicationTests {

    private MyMath math = new MyMath();

    @Test
    void calculateSum_ThreeMemberArray() {
        assertEquals(5, math.calculateSum(new int[] {1,2,3}));

    }

    @Test
    void calculateSum_ZeroLengthArray() {
        assertEquals(0, math.calculateSum(new int[] {}));

    }

}
