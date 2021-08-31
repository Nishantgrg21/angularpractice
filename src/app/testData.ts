import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService{
    createDb(){
        let bookdetails=[
            { id : 100 , name: 'Angular Training' , category: "Learning"},
            { id : 101 , name: 'React Training' , category: "Learning"},
            { id : 102 , name: 'React Traing Book' , category: "Book"},
            { id : 103 , name: 'Angular Training Book' , category: "Book"}
        
        ];
        return {books:bookdetails};
           
    }
}
