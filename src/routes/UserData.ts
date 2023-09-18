export class FVUser {
    auth_data: any
    library: Library
};

class Library {
    theme_colour: number
    books: Book[]
};

class Book {
    title: string
    chapters: Chapter[]
};

class Chapter {
    title: string
    description: string
    recipes: Recipe[]
};

class Recipe {
    color: number
    title: string
    description: string
    ingredients: string[]
    procedure: string[]
};

const newUser: User = (
    username: string,
    email: string,
    passhash: string
) => {
    let new_lib: Library = {
        theme_colour: 0,
        books: [],
    }

    let new_user: User = {
        username,
        email,
        passhash,
        library: new_lib,
    }
}
