import { AbstractControl, ValidationErrors } from "@angular/forms";

export class NomValidators {
  static neDoitPasContenirEspace(
    controle: AbstractControl
  ): ValidationErrors | null {
    if ((controle.value as string).indexOf(" ") >= 0)
      return { neDoitPasContenirEspace: true };
    return null;
  }

  static doitEtreUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "bayendemba@gmail.com")
          resolve({ doitEtreUnique: true });
        else resolve(null);
      }, 2000);
    });
  }
}
