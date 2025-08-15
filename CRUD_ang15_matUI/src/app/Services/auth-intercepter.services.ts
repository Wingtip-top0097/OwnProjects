// create a service for the intercepter
// there were a class like 'authintercepter'
//the class should be implements 'Httpintercepter' 
// after 'Httpintercepter'  implements , that will force to implement a method called 'Intercept'.
// intercept method will take 2 params 1. red:Httprequest, 2. next : HttpHandler.
// after that if we are adding or modifing some logic inthe req , then  we have to use 'next.handle' method for calling the next intercepter.
// after that retuen the req.

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";



export class authintercepter implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        alert("auth intercepter called!");
    }
}
