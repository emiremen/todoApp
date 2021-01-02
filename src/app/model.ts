export class Model {
    user;
    items:  any;

    constructor(){
        this.user = "Muhammed";
        this.items = [
            new TodoItem("Spor", true),
            new TodoItem("Kahvaltı", false),
            new TodoItem("Kitap Okuma", true),
            new TodoItem("Sinema", false),
            new TodoItem("Alışveriş", false),
            new TodoItem("Ders", true),
           ];
    }
}

export class TodoItem {
    description;
    action;

    constructor(description: string, action: boolean){
        this.description = description;
        this.action = action;
    }
}