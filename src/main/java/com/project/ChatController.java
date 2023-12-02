package com.project;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
public class ChatController {

    @GetMapping("/init")
    public HashMap<String, Boolean> init() {
        HashMap<String, Boolean> response = new HashMap<>();

        response.put("result", false);
        return response;
    }

    @PostMapping("/auth")
    public HashMap<String, Boolean> auth(@RequestParam String name) {
        HashMap<String, Boolean> response = new HashMap<>();

        response.put("result", false);
        return response;
    }

    @PostMapping("/message")
    public Boolean sendMessage(@RequestParam String message) {
        return true;
    }

    @GetMapping("/message")
    public List<String> getMessagesList() {
        return null;
    }

    @GetMapping("/users")
    public HashMap<Integer, String> getUsersList() {
        return null;
    }

}
