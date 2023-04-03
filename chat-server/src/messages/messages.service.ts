import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  messages: Message[] = [{ name: 'Tan', text: 'heyooo' }];
  clientToUser: {};

  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name;
  }

  getClientName(clientId: string) {
    return this.clientToUser[clientId];
  }

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    const message = { ...createMessageDto };
    this.messages.push(message);
    return message;
  }

  findAll(): Message[] {
    return this.messages;
  }
}
