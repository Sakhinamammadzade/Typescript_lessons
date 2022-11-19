import{IProductServices} from './IProductServices';
import {Product} from './Product';
import { SimpleDataSource } from './SimpleDataSource';


export class ProductServices implements IProductServices{
    private dataSource:SimpleDataSource;
    private products:Array<Product>;
 
    constructor() {
      this.dataSource=new SimpleDataSource();
      this.products=new Array<Product>();
      this.dataSource.getProducs().forEach(element => {
        this.products.push(element)
      });
        
    }

    getById(id: number): Product {
       return this.products.filter(x=>x.id===id)[0];
    }
    getProducts(): Product[] {
        return this.products;
    }
    saveProducts(product: Product): void {
       if(product.id===0||product.id===null){
        product.id=this.generateId();
        this.products.push(product);
        //yeni id yaradib product elave edirik
       }
       else{
        let index=this.products.indexOf(product);
        this.products.splice(index,1,product);
        //product listin icinde varmi yoxmu onu yoxlayib save edirik -update
       }
    }
    deleteProducts(product: Product): void {
       let index=this.products.indexOf(product);
       if(index!=0){
        this.products.splice(index,1,)
       }
      
    }

    private generateId():number{
        let key=1;
        while(this.getById(key)!=null){
          key++;
        }
        return  key;
    }
}