package org.example;

import org.springframework.stereotype.Component;

public class JazzMusic implements Music {
    
    @Override
    public String getSong() {
        return "Jazz Music ";
    }
}
