## THINGS I'M LEARNING

- Simply bind a property in a component HTML to a property in the .ts file
- Pass a property down from parent element (where declared) to component
- Pass a propety up, using emit from the child to parent (where declared)

  - Child has output emitter
  - parent, where while is called, has the 'catch'
  - parent connects to out put on left and 'catches' event with $event on the right
  - the type of $event is the type defived as the eventEmitter
  - this could be a standard type (string, number) or could be a predefined interface object e.g Activity (which has been declared in a model and imported to the child)

- Showing and hiding elements using \*ngIf
- Using #local reference and <ng-template> for an else statment
- Looping over elements using \*ngFor
- Conditionally rendering CSS using [ngStyle], [ngClass], [class.class-name]
- Using (input) and the input element to target the value
- Acceses the input field using:
  - (input) on the input tag
  - (click) on the button tag
  - [(ngModel)] on the input tag << Two way data binding.

// LOOPS

FOR-IN, loops over object properties!
Doesn't really work in typescript. Can use let KEY: keyof type of OBJ but that didn;t seem to work either.
for (const [key, value] of Object.entries(objName)){
seemed to work
}
https://trungk18.com/experience/how-to-iterate-over-objects-in-typescript/
