// To Stop Password Field from being returned
export function toJSON() {
   const obj = this.toObject();
   delete obj.password;
   delete obj.tokens;
   delete obj.__v;
   return obj;
}
