function greeter(person: string) {
  return "Hello, "+ person
}

let  user = "Jane User";

document.body.textContent = greeter(user)


class Student {
  fullName: string;

  constructor (
    public firstName : string,
    public middleName : string,
    public lastName : string
  ) {
    this.fullName = `${firstName} ${middleName} ${lastName}`
  }
}

const fullname = new Student('flavio', 'flavio', 'flav')
console.log(fullname)