export class UniqueConstraintError extends Error {
  constructor(message: string = 'Unique constraint failed') {
    super(message)
    this.name = this.constructor.name
  }
}
