import { Document, Schema, Model, model} from "mongoose"
import { Animal } from "../interfaces/Animal"

export interface AnimalSchema extends Animal, Document {
  fullName(): string
}

export const AnimalSchema: Schema = new Schema({
  name: String,
  age: Number,
  color: String
})
AnimalSchema.pre("save", function(next) {
  let now = new Date()
  if (!this.createdAt) {
    this.createdAt = now
  }
  next()
})
AnimalSchema.methods.fullName = function(): string {
  return (this.firstName.trim() + " " + this.lastName.trim())
}

export const User: Model<AnimalSchema> = model<AnimalSchema>('Animal', AnimalSchema)