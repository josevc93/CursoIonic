import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

export interface BookItem{
    id: number,
    title: string,
    language: string,
    edition: string,
    publisher: string
}

@Injectable()

export class BookService {
   // private books: BookItem[];

    constructor(private http: HttpClient) {
   /*     this.books = [
            {
                "id": 2,
                "title": "Head First Design Pattern",
                "language": "Java",
                "edition": "second",
                "publisher": "O'Reilly"
            },
            {
                "id": 3,
                "title": "Effective Java",
                "language": "Java",
                "edition": "third",
                "publisher": "Sun Microsystems"
            },
            {
                "id": 4,
                "title": "Concurrency Practice in Java",
                "language": "Java",
                "edition": "first",
                "publisher": "Sun Microsystems"
            },
            {
                "id": 5,
                "title": "Java Generics and Collections",
                "language": "Java",
                "edition": "third",
                "publisher": "O'Reilly"
            },
            {
                "id": 6,
                "title": "Eloquent JavaScript",
                "language": "Javascript",
                "edition": "third",
                "publisher": "Marijn Haverbecke"
            },
            {
                "id": 7,
                "title": "The Book of JavaScript",
                "language": "Javascript",
                "edition": "second",
                "publisher": "Dave Thau"
            },
            {
                "id": 8,
                "title": "JavaScript, The Definitive Guide",
                "language": "Javascript",
                "edition": "third",
                "publisher": "O'Reilly"
            },
            {
                "id": 9,
                "title": "Effective JavaScript",
                "language": "JavaScript",
                "edition": "third",
                "publisher": "O'Reilly"
            },
            {
                "id": 10,
                "title": "C++ Primer",
                "language": "C++",
                "edition": "third",
                "publisher": "Amazon"
            },
            {
                "id": 11,
                "title": "Thinking in C++",
                "language": "C++",
                "edition": "third",
                "publisher": "Amazon"
            }
        ]; */
    }

    getBooks(): Observable<BookItem[]> {
        return <Observable<BookItem[]>> this.http.get('http://localhost:3000/books');
    }

    updateBook(book: BookItem): Observable<BookItem[]> {
        return <Observable<BookItem[]>> this.http.put('http://localhost:3000/books/' + book.id, book);
    }

    deleteBook(book: BookItem): Observable<BookItem[]> {
        return <Observable<BookItem[]>> this.http.delete('http://localhost:3000/books/' + book.id);
    }

    newBook(book: BookItem): Observable<BookItem[]> {
        return <Observable<BookItem[]>> this.http.post('http://localhost:3000/books/', book);
    }
/*
    getBooks(): Subject<BookItem[]> {
        //Retrasamos el tiempo en el que devuelve las frutas
        const booksAvailables = new Subject<BookItem[]>();
        setTimeout(() => {
            booksAvailables.next(this.books);
        }, 2000);

        return booksAvailables;
    }*/
}