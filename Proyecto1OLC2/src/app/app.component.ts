import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto1OLC2';
  content ="";
  obj;
  obj2;

  ngOnInit(){
    this.obj= "//Ejemplo funciones anidadas\n"+
    "\n"+
    "//funcion abuelo\n"+
    "function abuelo(a: number, b: number) {\n"+
    "\n"+
    "    //funcion padre\n"+
    "    function padre(a: string, b: boolean) {\n"+
    "    \n"+
    "        //funcion anidada\n"+
    "        function nieto(a: number, b: number) {\n"+
    "            return a * b;\n"+
    "        }\n"+
    "        \n"+
    "        return b ? \"Mi abuelo es \" + a : \"Mi abuelo no es \" + a;\n"+
    "    }\n"+
    "    return a + b;\n"+
    "}\n"+
    "\n"+
    "var sum: number = addNumbers(10,15)\n"+
    "console.log('Sum of the two numbers is: '+sum)\n";

    this.obj2="//funcion abuelo\n"+
    "function abuelo(a: number, b: number) {\n"+
    "    return a + b;\n"+
    "}\n"+
    "\n"+
    "//funcion anidada\n"+
    "function abuelo_padre(a: string, b: boolean) {\n"+
    "    return b ? \"Mi abuelo es \" + a : \"Mi abuelo no es \" + a;\n"+
    "}\n"+
    "\n"+
    "//funcion anidada\n"+
    "function abuelo_padre_nieto(a: number, b: number) {\n"+
    "    return a * b;\n"+
    "}\n"+
    "\n"+
    "var sum: number = addNumbers(10, 15)\n"+
    "console.log('Sum of the two numbers is: ' + sum)\n";
  }
  setEditorContent(event) {
    // console.log(event, typeof event);
    console.log(this.obj);
  }
  setEditor2Content(event) {
    // console.log(event, typeof event);
    console.log(this.obj2);
  }
}
