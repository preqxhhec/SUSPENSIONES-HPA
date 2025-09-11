
  // verificacion de contraseña
  
  function verificarContraseña() {
    var password = document.getElementById("password").value;
    var imagen = document.querySelector('.img');
    if (password === "") {
        document.getElementById("form").style.display = "block";
        document.getElementById("acceso").style.display = "none";
        imagen.style.display = 'none';
    } else {
        alert("Contraseña incorrecta");
    }
}







        const causalSelect = document.getElementById('causal');
        const subcausalSelect = document.getElementById('subcausal');

        // Objeto con las subcausales para cada causal
        const subcausales = {
            "1. ATRIBUIDAS AL PACIENTE": [
                "Patología aguda. ",
                "Descompensación en pabellón,",
                "Anticipación de cirugia por agudización de patología.",
                "Paciente fallece."
            ],
            "2. ADMINISTRATIVAS": [
                "No se presenta",
                "Rechaza operación.",
                "Patología crónica descompensada.",
                "Falta de ayuno.",
                "Sin suspensión de anticoagulante u otras drogas proscritas (excluidas).",
                "Atraso en el ingreso,",
                "Patología no informada, no conocida (alergia al látex).",
                "Estudio incompleto.",
                "Exámenes alterados no corregidos.",
                "Falta de preparación de piel, intestinal, antibiótica u otra especifica.",
                "Sin evaluación de especialista indicada.",
                "Sin indicación quirúrgica",
                "Falta de disponibilidad de cama basica",
                "Falta de disponibilidad de cama media",
                "Falta de disponibilidad de cama UTI",
                "Falta de disponibilidad de cama UCI",
                "Sin cupo en recuperacion",
                "Documentacion incompleta",
                "Sin consentimiento informado firmado /ausencia de tutor legal consignado.",
                "Falla coordinación con Unidad de Imagenologia.",
                "Falla coordinación con Unidad Anatomia Patología (biopsia rápida)."
               
            ],
            "3. UNIDAD DE APOYO CLÍNICO": [
                "Falta sangre o hemoderivados."
           
                
            ],
            "4. UNIDAD DE APOYO LOGÍSTICO": [
                "Instrumental y/o material con falla de esterilización.",
                "Instrumental incompleto o no disponible. ",
                "Equipamiento no operativo.",
                "Falta de equipo, insumos y/o cajas quirurgicas por parte del proveedor externo",
                "Falta medicamentos/stock insuficiente. ",
                "Falta de insumos/slock insuficiente.",
                "Falta de ropa quirúrgica/stock insuficiente."
                
            ],
            "5. EQUIPO QUIRÚRGICO": [
                "Falta / disponibilidad de cirujano",
                "Falta / disponibilidad de anestesiólogo",
                "Falta / disponibilidad de técnico paramédico ",
                "Falta / disponibilidad profesional no médico",
                "Prolongación de tabla",
                "Error de programación. ",
                "Reemplazado por urgencia."
            ],
            "6. INFRAESTRUCTURA": [
                "Falla energia eléctrica.",
                "Falla de climatización",
                "Falla de red húmeda.",
                "Falla ascensor.",
                "Falla gases clínicos."
                
            ],
            "7. EMERGENCIAS": [
                "Desastres naturales: Terremotos, aluviones, tsunamis, inundaciones, erupciones volcánicas, etc ",
                "Destrucción repentina e irrecuperable de la infraestructura del hospital.",
                "Accidentes múltiples.",
                "Incendios o amago de incendio.",
                "Derrame de productos quimicos. ",
                "Aviso de bomba",
                "Actos delictuales.",
                "Emergencias sanitarias."
            ],
            "8. GREMIALES": [
                "Paro o movilización de funcionarios."
                
                
            ]
        };


// Evento de cambio en el primer select
        causalSelect.addEventListener('change', function() {
            const selectedCausal = this.value;
            subcausalSelect.innerHTML = '<option value="">Seleccione una subcausal</option>';

            if (selectedCausal && subcausales[selectedCausal]) {
                subcausales[selectedCausal].forEach(subcausal => {
                    const option = document.createElement('option');
                    option.value = subcausal;
                    option.text = subcausal;
                    subcausalSelect.appendChild(option);
                });
            }
        });






//enviar y guardar datos

document.getElementById('BTN').addEventListener('click', function(e) {
  e.preventDefault();

  // Obtener el formulario
  const form = document.getElementById('form');
  const inputs = form.querySelectorAll('input, textarea, select'); // Seleccionar todos los campos de entrada
  let isValid = true;

  // Verificar si todos los campos están llenos
  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
    }
  });

  if (!isValid) {
    alert('Por favor, complete todos los campos antes de enviar.');
    return; // Detener la ejecución si hay campos vacíos
  }

  abrirModalEnviando(); // Abrir modal de enviando datos

  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://script.google.com/macros/s/AKfycbzlnGkQPyKWKPaIw0CXSCOL-xjBuE6TW5B0BBWMg6vbRw_uM7P7rrKRC8yXfnEKdWza/exec');
  xhr.onload = function() {
    console.log('Respuesta del servidor:', xhr.status, xhr.responseText); // Depuración
    if (xhr.status >= 200 && xhr.status < 300) { // Éxito (200-299)
      alert('¡Registro exitoso!');
      cerrarModalEnviando(); // Cerrar modal de enviando datos
      form.reset(); // Resetear el formulario
    } else {
      console.error('Error en la respuesta:', xhr.status, xhr.responseText);
      alert('Error al enviar el formulario: ' + xhr.responseText);
      cerrarModalEnviando(); // Cerrar modal de enviando datos
    }
  };
  xhr.onerror = function() {
    console.error('Error de conexión:', xhr.status, xhr.responseText);
    alert('Error de conexión. Es posible que el registro no haya sido exitoso, por favor verifique su base de datos.');
    cerrarModalEnviando(); // Cerrar modal de enviando datos
    form.reset(); // Resetear el formulario
  };
  xhr.send(formData);
});





// Obtener los elementos del modal
var modalEnviando = document.getElementById('modal-enviando');

var btnGuardar = document.getElementById('BTN');

// Función para abrir el modal de enviando datos
function abrirModalEnviando() {
  modalEnviando.style.display = 'flex';
}

// Función para cerrar el modal de enviando datos
function cerrarModalEnviando() {
  modalEnviando.style.display = 'none';
}






//funcion para evitar que el BTNEPA reinicie el formulario
function openLink(event, url) {
            event.preventDefault(); // Prevents default behavior (e.g., page reload)
            window.open(url, '_blank'); // Opens the URL in a new tab
        }










function clasificar() {
            const input = document.getElementById("procedimientoInput");
            const datalist = document.getElementById("procedimientos");
            const clasificacionInput = document.getElementById("clasificacion");
            const selectedOption = Array.from(datalist.options).find(
                option => option.value === input.value
            );
            clasificacionInput.value = selectedOption ? selectedOption.getAttribute("data-clasificacion") : "";
        }








        //cambiar el formato de fecha a dd//mm/aaa//

const inputFecha = document.getElementById('fecha');

inputFecha.addEventListener('input', (e) => {
  const inputValue = inputFecha.value; // Ejemplo: "2025-07-01"
  const [año, mes, dia] = inputValue.split('-'); // Extrae año, mes, día

  // Eliminar input oculto previo para evitar duplicados
  const existingHiddenInput = document.querySelector('input[name="fechaFormatted"]');
  if (existingHiddenInput) {
    existingHiddenInput.remove();
  }

  const inputFechaOculta = document.createElement('input');
  inputFechaOculta.type = 'text'; // Cambia el tipo a text
  inputFechaOculta.name = 'fechaFormatted';
  inputFechaOculta.value = `${dia}/${mes}/${año}`; // Formato dd/mm/yyyy
  inputFechaOculta.classList.add('oculto'); // Agrega la clase oculto
  inputFecha.parentNode.appendChild(inputFechaOculta);
});

function irAlInicio() {
            window.location.href = "https://preqxhhec.github.io/SUSPENSIONES-HPA/"; // Redirige a la página inicial (ajusta la URL según sea necesario)

        }
