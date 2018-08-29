import { Content } from './content';
import { Tag } from './tag';

export class Memory {
    id: number;
    tags: Tag[];
    title: string;
    content: Content;
    isSelected: boolean;

    static newInstance(): Memory {
        const memory = new Memory();
        memory.content = new Content();
        return memory;
    }
}
