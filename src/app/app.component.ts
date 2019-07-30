import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    @ViewChild('email') email;

    user={
        email:'',
        password:'',
        subscriptions:''
    }

    checkSubmit=false
    ngOnInit(){ 
        
    }

    onSubmit(form){ 
        this.user={
            email:form.value.holeForm.email,
            password:form.value.holeForm.password,
            subscriptions:form.value.holeForm.subscriptions,
        }
        this.checkSubmit=true;
    }
}
