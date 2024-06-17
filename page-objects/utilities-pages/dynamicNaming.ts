import { v4 as uuidv4 } from 'uuid';
export class DynamicName {
    static fileName(): string {
        const today = new Date();

        const dateString = `${today.getDate().toString().padStart(2, '0')}-${(today.getMonth() + 1).toString().padStart(2, '0')
            }-${today.getFullYear()}_${today.getHours().toString().padStart(2, '0')}-${today.getMinutes().toString().padStart(2, '0')}-${today.getSeconds().toString().padStart(2,

                '0')}`;

        return `${dateString}`;
    }
}