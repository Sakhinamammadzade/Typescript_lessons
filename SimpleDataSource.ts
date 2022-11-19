import { Product } from "./Product"


export class SimpleDataSource{
   private products:Array<Product>;
   
   constructor() {
    this.products=new Array<Product>(
           new Product(1,"Samsung",2000,"telefon"),
           new Product(2,"Iphone",3500,"telefon"),
           new Product(3,"Soyuducu",2500,"meiset"),
           new Product(4,"Tozsoran",1000,"meiset"),
           new Product(5,"Hp g-14",2000,"Computer")
    );
    
   }

   getProducs():Product[]{
    return  this.products
   }

}

//let p=new SimpleDataSource();bunu teyin etdiyimiz an yuxaridaki list constructor icindeki liste elave olunacaq