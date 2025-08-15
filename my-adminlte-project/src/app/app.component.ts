import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopnavComponent } from "./mastertheme/topnav/topnav.component";
import { AsidenavComponent } from "./mastertheme/asidenav/asidenav.component";
import { FooterComponent } from "./mastertheme/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, TopnavComponent, AsidenavComponent, FooterComponent]
})
export class AppComponent {
  title = 'my-adminlte-project';
}
