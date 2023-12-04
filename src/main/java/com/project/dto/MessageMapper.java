package com.project.dto;

import com.project.model.Message;

public class MessageMapper {

    public static DtoMessage map (Message message) {
        DtoMessage dtoMessage = new DtoMessage();
        dtoMessage.setDatetime(message.getDateTime().toString());
        dtoMessage.setText(message.getMessage());
        dtoMessage.setDatetime(message.getUser().toString());
        return dtoMessage;
    }
}
