import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
 // make sure the property name is the same as the selector otherwise it wont work.
  //the property it binds to on the element
  // whenever the condition changes we want to execute a method 'set'
  // this is a property, which is a method which executes whenever the property changes.

  @Input() set appUnless(condition: boolean){
if(!condition){
  this.vcRef.createEmbeddedView(this.templateRef)
} else{
    this.vcRef.clear()
}
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}

//this.vcRef.createEmbeddedView(this.templateRef)
// the view container is created with the template ref from the HTML
// clear, just clears the template from the HTML

