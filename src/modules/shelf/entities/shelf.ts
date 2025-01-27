import { randomUUID } from 'crypto';

interface ShelfSchema {
  number: string;
  letter: string;
  bookShelfId: string;
}

export class Shelf {
  private _id: string;
  private props: ShelfSchema;

  constructor(props: ShelfSchema, id?: string) {
    this.props = props;
    this._id = id || randomUUID();
  }

  get id(): string {
    return this._id;
  }

  get number(): string {
    return this.props.number;
  }

  get letter(): string {
    return this.props.letter;
  }

  get bookShelfId(): string {
    return this.props.bookShelfId;
  }

  set number(number: string) {
    this.props.number = number;
  }

  set letter(letter: string) {
    this.props.letter = letter;
  }
}
