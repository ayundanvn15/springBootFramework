package com.itc.springbootframework;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class MyAssertTests {

    List<String> todos = Arrays.asList("AWS", "Azure", "DevOps");

    @Test
    void test() {
        boolean test = todos.contains("AWS"); //Result
        boolean test2 = todos.contains("GCP"); //Result

        //assertEquals(true, test);
        assertTrue(test);
        assertFalse(test2);
        //assertNull, assertNotNull
        assertArrayEquals(new int[] {1,2}, new int[] {2, 1});

        assertEquals(3, todos.size());
    }
}
