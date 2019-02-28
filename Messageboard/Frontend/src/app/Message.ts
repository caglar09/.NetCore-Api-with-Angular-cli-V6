import { UUID } from 'uuid';

export class Message{
    messageID:UUID;
    message:string;
    userID:UUID;
    messageTime:Date
}