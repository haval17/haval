// app.component.ts
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    experience: new FormControl('', Validators.required),
    lan: new FormControl('', [Validators.required]),
    project: new FormControl('', [Validators.required, Validators.minLength(10)]),
   });

 languages = ['JavaScript', 'Python', 'Java', 'C++'];
 experienceLevels = ['Beginner', 'Intermediate', 'Advanced'];

 success = '';

 onSubmit() {
    this.success = `Congratulations ${this.form.value.name}! Your programming skills are impressive. Keep up the great work!`;
 }
}