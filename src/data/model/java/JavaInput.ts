import { capitalize } from "vue";
import { Input } from "@/data/model/Input";
import type { Variable } from "@/data/model/ValueObjects/Variable";

export class JavaInput extends Input {
  getJavaCode(): string {

    let codeOut = "";

    // Clean outputCode
    codeOut = "",

  // Class name
  codeOut += `import java.util.Objects;

public class ${capitalize(this.className)} {
  
  `

  // Variables
  this.variableList.forEach((variable: Variable) => {
    codeOut += `${variable.access} ${variable.type} ${variable.name};
  `;
  })

  // Empty Constructor
  codeOut += `
  public ${capitalize(this.className)}() {}
  `

  // Constructor with parameters
  codeOut += `
  public ${capitalize(this.className)}(${this.variableList.map(vari => `${vari.type} ${vari.name}`).join(", ")}) {
  `;

  this.variableList.forEach((variable: Variable) => {
    codeOut += `\tthis.${variable.name} = ${variable.name};
  `;
  })
  
  codeOut += `}
  `;

  // Getters and setters
  this.variableList.forEach((variable: Variable) => {

    codeOut += `
  public ${variable.type} get${capitalize(variable.name)}(){
  \treturn this.${variable.name};
  }
  `;

    codeOut += `
  public void set${capitalize(variable.name)}(${variable.type} value){
  \tthis.${variable.name} = value;
  }
  `;
  })

  // TELL DON'T ASK
  this.variableList.forEach((variable: Variable) => {

  codeOut += `
  public ${capitalize(this.className)} ${variable.name}(${variable.type} value){
  \tset${capitalize(variable.name)}(value);
  \treturn this;
  }
  `;
  })

  // EQUALS
  codeOut += `
  @Override
  public boolean equals(Object o) {
    if (o == this)
      return true;
    if (!(o instanceof ${capitalize(this.className)})) {
      return false;
    }
    ${capitalize(this.className)} ${this.className.toLocaleLowerCase()} = (${capitalize(this.className)}) o;
    return ${this.variableList.map(vari => `Objects.equals(${vari.name}, ${this.className.toLocaleLowerCase()}.${vari.name})`).join(" && ")};
  }
  `;

  // HASHCODE
  codeOut += `
  @Override
  public int hashCode() {
    return Objects.hash(${this.variableList.map(vari => `${vari.name}`).join(", ")});
  }
  `;

  // TO STRING
  codeOut += `
  @Override
  public String toString() {
    return "{" +
  `
  this.variableList.forEach((variable: Variable) => {
  codeOut += `\t\t" ${variable.name}='" + get${capitalize(variable.name)}() + "', " +
  `
  });

  codeOut += `\t"}";
  }`;

  // END OF CODE
  codeOut += `
}`

    return codeOut;
  }

  
}