export const loginValidations = (form) => {
    let errors = {};
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
      
      if(!form.email) {
          errors.email = "Este campo es obligatorio";
      } else if (!regexEmail.test(form.email)) {
          errors.email = "Formato de email inválido";
      }
  
      if(!form.password) {
          errors.password = "Este campo es obligatorio";
      }
  
      if(Object.keys(errors).length === 0 && form.password !== "admin") {
          errors.credentials = "Por favor vuelva a intentarlo, sus credenciales son inválidas";
      }
  
      return errors;
  };
