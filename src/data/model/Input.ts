import type { Variable } from "@/data/model/ValueObjects/Variable";

export class Input {
  className: string;
  variableList: Variable[];

  constructor() {
    this.className = "";
    this.variableList = [];
  }

  hasVariables(): boolean {
    return this.variableList.length !== 0;
  }
}
